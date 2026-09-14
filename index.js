import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
dotenv.config();
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const root=__dirname;
const app=express();
const PORT=Number(process.env.PORT||3000);
const TOKEN_URL='https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token';
const API_URL='https://opensky-network.org/api/states/all';
let token=null, tokenExpiresAt=0, cache={at:0,data:null};
async function getToken(){
 if(token && Date.now()<tokenExpiresAt)return token;
 if(!process.env.OPENSKY_CLIENT_ID||!process.env.OPENSKY_CLIENT_SECRET)throw new Error('Credenciais OpenSky não configuradas no servidor');
 const body=new URLSearchParams({grant_type:'client_credentials',client_id:process.env.OPENSKY_CLIENT_ID,client_secret:process.env.OPENSKY_CLIENT_SECRET});
 const r=await fetch(TOKEN_URL,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});
 const d=await r.json().catch(()=>({})); if(!r.ok)throw new Error(d.error_description||'Falha ao autenticar no OpenSky');
 token=d.access_token; tokenExpiresAt=Date.now()+Math.max(60,(Number(d.expires_in)||1800)-60)*1000; return token;
}
app.get('/api/health',(req,res)=>res.json({ok:true,service:'rd-airlines',openskyConfigured:Boolean(process.env.OPENSKY_CLIENT_ID&&process.env.OPENSKY_CLIENT_SECRET)}));
app.get('/api/opensky/states',async(req,res)=>{
 try{
   if(cache.data && Date.now()-cache.at<28000)return res.json(cache.data);
   const bearer=await getToken();
   const r=await fetch(API_URL,{headers:{Authorization:`Bearer ${bearer}`}});
   if(r.status===401){token=null;tokenExpiresAt=0;const b=await getToken();const retry=await fetch(API_URL,{headers:{Authorization:`Bearer ${b}`}});if(!retry.ok)throw new Error(`OpenSky HTTP ${retry.status}`);const d=await retry.json();cache={at:Date.now(),data:d};return res.json(d);}
   if(!r.ok){const txt=await r.text();throw new Error(`OpenSky HTTP ${r.status}${txt?': '+txt.slice(0,160):''}`);}
   const d=await r.json();cache={at:Date.now(),data:d};res.json(d);
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

app.use(express.static(root, { extensions: ['html'] }));

app.get('/healthz', (req, res) => {
  res.status(200).json({
    ok: true,
    service: 'rd-airlines'
  });
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`RD AIRLINES V30 online on port ${PORT}`);
});