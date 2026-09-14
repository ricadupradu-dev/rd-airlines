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
const ADSBFI_BASE = 'https://opendata.adsb.fi/api/v3';
let cache = { at: 0, data: null };

app.get('/api/opensky/states', async (req, res) => {
  try {
    const lat = Number(req.query.lat ?? -23.4356);
    const lon = Number(req.query.lon ?? -46.4731);
    const dist = Math.min(
      Math.max(Number(req.query.dist ?? 250), 1),
      250
    );

    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return res.status(400).json({
        ok: false,
        error: 'Latitude ou longitude inválida'
      });
    }

    if (cache.data && Date.now() - cache.at < 1000) {
      return res.json(cache.data);
    }

    const url = `${ADSBFI_BASE}/lat/${lat}/lon/${lon}/dist/${dist}`;

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'RD-AIRLINES/30.1'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `adsb.fi HTTP ${response.status}: ${text.slice(0, 200)}`
      );
    }

    const data = await response.json();

    const aircraft = Array.isArray(data.ac)
      ? data.ac
      : [];

    const states = aircraft
      .filter(a =>
        Number.isFinite(Number(a.lat)) &&
        Number.isFinite(Number(a.lon))
      )
      .map(a => [
        String(a.hex || ''),
        String(a.flight || '').trim(),
        null,
        null,
        null,
        Number(a.lon),
        Number(a.lat),
        Number.isFinite(Number(a.alt_baro))
          ? Number(a.alt_baro) * 0.3048
          : null,
        false,
        Number.isFinite(Number(a.gs))
          ? Number(a.gs) * 0.514444
          : null,
        Number.isFinite(Number(a.track))
          ? Number(a.track)
          : null,
        Number.isFinite(Number(a.baro_rate))
          ? Number(a.baro_rate) * 0.00508
          : null
      ]);

    const result = {
      ok: true,
      source: 'adsb.fi',
      time: Math.floor(Date.now() / 1000),
      states
    };

    cache = {
      at: Date.now(),
      data: result
    };

    res.json(result);
  } catch (e) {
    console.error('adsb.fi error:', e);

    res.status(502).json({
      ok: false,
      source: 'adsb.fi',
      error: e.message
    });
  }
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