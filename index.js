import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
dotenv.config();
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const root=__dirname;
const app=express();
const PORT=Number(process.env.PORT||3000);
const ADSBFI_BASE='https://opendata.adsb.fi/api/v3';
const ADSBDB_BASE='https://api.adsbdb.com/v0';
let cache=new Map();
const routeCache=new Map();
app.get('/api/health',(req,res)=>res.json({ok:true,service:'rd-airlines',source:'adsb.fi'}));
app.get('/api/flight-route/:callsign',async(req,res)=>{
 try{
   const callsign=String(req.params.callsign||'').trim().toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12);
   if(!callsign)return res.status(400).json({ok:false,error:'Callsign inválido'});
   const hit=routeCache.get(callsign);
   if(hit&&Date.now()-hit.at<15*60*1000)return res.json(hit.data);
   // Primeiro valida/encontra a aeronave pelo CALLSIGN no próprio adsb.fi.
   // Depois usa o mesmo CALLSIGN para obter a rota (origem/destino) no ADSBDB.
   let adsbAircraft=null;
   try{
     const adsbResp=await fetch(`https://opendata.adsb.fi/api/v2/callsign/${encodeURIComponent(callsign)}`,{headers:{Accept:'application/json','User-Agent':'RD-AIRLINES/30.1 (callsign lookup)'}});
     if(adsbResp.ok){
       const adsbPayload=await adsbResp.json();
       adsbAircraft=Array.isArray(adsbPayload?.ac)?adsbPayload.ac[0]||null:null;
     }
   }catch(_e){}

   const response=await fetch(`${ADSBDB_BASE}/callsign/${encodeURIComponent(callsign)}`,{headers:{Accept:'application/json','User-Agent':'RD-AIRLINES/30.1 (route enrichment)'}});
   if(response.status===404){const data={ok:true,callsign,found:false,origin:null,destination:null,source:'adsbdb.com',adsbFiFound:!!adsbAircraft,adsbFiHex:adsbAircraft?.hex||null};routeCache.set(callsign,{at:Date.now(),data});return res.json(data);}
   if(!response.ok)throw new Error(`ADSBDB HTTP ${response.status}`);
   const payload=await response.json();
   const fr=payload?.response?.flightroute||null;
   const data={
     ok:true,callsign,found:!!fr,source:'adsbdb.com',
     adsbFiFound:!!adsbAircraft,adsbFiHex:adsbAircraft?.hex||null,
     origin:fr?.origin?{iata:fr.origin.iata_code||null,icao:fr.origin.icao_code||null,name:fr.origin.name||null,municipality:fr.origin.municipality||null}:null,
     destination:fr?.destination?{iata:fr.destination.iata_code||null,icao:fr.destination.icao_code||null,name:fr.destination.name||null,municipality:fr.destination.municipality||null}:null,
     airline:fr?.airline?{name:fr.airline.name||null,icao:fr.airline.icao||null,iata:fr.airline.iata||null}:null
   };
   routeCache.set(callsign,{at:Date.now(),data});
   res.json(data);
 }catch(e){res.status(502).json({ok:false,error:e.message});}
});

app.get('/api/opensky/states',async(req,res)=>{
 try{
   const lat=Number(req.query.lat ?? -23.4356);
   const lon=Number(req.query.lon ?? -46.4731);
   const dist=Math.min(Math.max(Number(req.query.dist ?? 250),1),250);
   if(!Number.isFinite(lat)||!Number.isFinite(lon)) return res.status(400).json({ok:false,error:'Latitude ou longitude inválida'});
   const key=`${lat.toFixed(2)},${lon.toFixed(2)},${dist}`;
   const hit=cache.get(key);
   if(hit&&Date.now()-hit.at<1200) return res.json(hit.data);
   const url=`${ADSBFI_BASE}/lat/${lat}/lon/${lon}/dist/${dist}`;
   const response=await fetch(url,{headers:{Accept:'application/json','User-Agent':'RD-AIRLINES/30.1 (adsb.fi open data integration)'}});
   if(!response.ok){const txt=await response.text();throw new Error(`adsb.fi HTTP ${response.status}${txt?': '+txt.slice(0,160):''}`);}
   const data=await response.json();
   const aircraft=Array.isArray(data.ac)?data.ac:[];
   const states=aircraft.filter(a=>Number.isFinite(Number(a.lat))&&Number.isFinite(Number(a.lon))).map(a=>[
     String(a.hex||''),
     String(a.flight||'').trim(),
     null,null,null,
     Number(a.lon),
     Number(a.lat),
     Number.isFinite(Number(a.alt_baro))?Number(a.alt_baro)*0.3048:null,
     a.alt_baro==='ground' || a.gs===null || a.gs===undefined,
     Number.isFinite(Number(a.gs))?Number(a.gs)*0.514444:null,
     Number.isFinite(Number(a.track))?Number(a.track):null,
     Number.isFinite(Number(a.baro_rate))?Number(a.baro_rate)*0.00508:null,
     null,null,null,null,null,
     Number.isFinite(Number(a.category))?Number(a.category):null
   ]);
   const result={ok:true,source:'adsb.fi',time:Math.floor(Date.now()/1000),states};
   cache.set(key,{at:Date.now(),data:result});
   res.json(result);
 }catch(e){res.status(502).json({ok:false,error:e.message});}
});

const weatherCache=new Map();
app.get('/api/weather/:icao',async(req,res)=>{
  const icao=String(req.params.icao||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,4);
  if(!icao)return res.status(400).json({ok:false,error:'ICAO inválido'});
  const hit=weatherCache.get(icao);
  if(hit&&Date.now()-hit.at<60000)return res.json(hit.data);
  try{
    const headers={'User-Agent':'RD-AIRLINES/30.1 (aviation simulation)','Accept':'application/json'};
    const [mr,tr]=await Promise.all([
      fetch(`https://aviationweather.gov/api/data/metar?ids=${icao}&format=json`,{headers}),
      fetch(`https://aviationweather.gov/api/data/taf?ids=${icao}&format=json`,{headers})
    ]);
    const metar=mr.ok?await mr.json():[];
    const taf=tr.ok?await tr.json():[];
    const data={ok:true,icao,metar:Array.isArray(metar)?metar:[],taf:Array.isArray(taf)?taf:[],source:'Aviation Weather Center'};
    weatherCache.set(icao,{at:Date.now(),data});
    res.json(data);
  }catch(e){res.status(502).json({ok:false,error:e.message});}
});

app.use(express.static(root,{extensions:['html']}));
app.get(/.*/,(req,res)=>res.sendFile(path.join(root,'index.html')));
app.listen(PORT,()=>console.log(`RD AIRLINES V30 online on port ${PORT}`));
