
const RD_MAP_V21 = [
 {flight:'RD1001',airline:'RD',origin:'GRU',dest:'OPO',model:'A350-900',reg:'PR-RD001',type:'Comercial',status:'Em voo',pilot:'IA'},
 {flight:'RD1003',airline:'RD',origin:'REC',dest:'GVAC',model:'A320neo',reg:'PR-RD003',type:'Comercial',status:'Em voo',pilot:'Bot'},
 {flight:'RD1004',airline:'RD',origin:'SDRS',dest:'SBCT',model:'ATR 72-600',reg:'PR-RD004',type:'Comercial',status:'No solo',pilot:'Humano'},
 {flight:'RD1006',airline:'RD',origin:'GIG',dest:'KSFO',model:'A350-900',reg:'PR-RD006',type:'Comercial',status:'Em voo',pilot:'IA'},
 {flight:'RD1013',airline:'RD',origin:'SDRS',dest:'SBBR',model:'A320neo',reg:'PR-RD013',type:'Comercial',status:'No gate',pilot:'Bot'},
 {flight:'RD1017',airline:'RD',origin:'SDRS',dest:'GIG',model:'E195-E2',reg:'PR-RD017',type:'Comercial',status:'Em voo',pilot:'Humano'},
 {flight:'RDP2001',airline:'RDP',origin:'OPO',dest:'HECA',model:'A350-900',reg:'CS-RDP01',type:'Comercial',status:'Em voo',pilot:'IA'},
 {flight:'RDP2003',airline:'RDP',origin:'OPO',dest:'FAO',model:'A320neo',reg:'CS-RDP03',type:'Comercial',status:'No solo',pilot:'Bot'},
 {flight:'RDP2007',airline:'RDP',origin:'OPO',dest:'EGLL',model:'A320neo',reg:'CS-RDP07',type:'Comercial',status:'Em voo',pilot:'Humano'},
 {flight:'RD9001',airline:'RD',origin:'SDRS',dest:'SBBR',model:'Cessna 208 Caravan',reg:'PR-RD901',type:'Executiva',status:'No gate',pilot:'Humano'},
 {flight:'RD9002',airline:'RD',origin:'GRU',dest:'GIG',model:'A321neo',reg:'PR-RD902',type:'Executiva',status:'No solo',pilot:'IA'},
 {flight:'RD7001',airline:'RD',origin:'GIG',dest:'GRU',model:'A330-900',reg:'PR-RD701',type:'Militar',status:'No solo',pilot:'IA'}
];
const RD_MAP_AIRPORTS_V21={SDRS:['Resende / RJ',-22.478,-44.480],GRU:['Guarulhos / SP',-23.435,-46.473],GIG:['Galeão / RJ',-22.809,-43.250],SDU:['Santos Dumont / RJ',-22.910,-43.164],REC:['Recife / PE',-8.126,-34.923],OPO:['Porto / Portugal',41.242,-8.678]};
let rdLiveMapV29=null;
let rdLiveMarkersV29=[];
let rdLiveRoutesV29=[];
const RD_SIM_FLIGHT_COORDS_V29={
  SDRS:RD_MAP_AIRPORTS_V21.SDRS,GRU:RD_MAP_AIRPORTS_V21.GRU,GIG:RD_MAP_AIRPORTS_V21.GIG,SDU:RD_MAP_AIRPORTS_V21.SDU,REC:RD_MAP_AIRPORTS_V21.REC,OPO:RD_MAP_AIRPORTS_V21.OPO,
  SBCT:['Curitiba / PR',-25.528,-49.176],GVAC:['Sal / Cabo Verde',16.741,-22.949],KLAX:['Los Angeles / EUA',33.942,-118.408],KSFO:['San Francisco / EUA',37.621,-122.379],SPJC:['Lima / Peru',-12.021,-77.114],OEJN:['Jeddah / Arábia Saudita',21.679,39.156],SBBR:['Brasília / DF',-15.869,-47.921],HECA:['Cairo / Egito',30.122,31.406],FAO:['Faro / Portugal',37.014,-7.966],EGLL:['London Heathrow',51.470,-0.454],RJAA:['Tokyo Narita',35.772,140.392],CYVR:['Vancouver / Canadá',49.196,-123.181]
};
function rdCoordV29(code){return RD_SIM_FLIGHT_COORDS_V29[code]||RD_MAP_AIRPORTS_V21[code]||['',0,0]}
function rdProgressV29(i){
  const minutes=((new Date(rdSimTime).getTime()/60000)+i*37)%180;
  return (minutes/180)%1;
}
function rdInterpolateV29(a,b,t){
  let lon1=a[2],lon2=b[2]; if(Math.abs(lon2-lon1)>180){if(lon1<0)lon1+=360;if(lon2<0)lon2+=360;}
  let lon=lon1+(lon2-lon1)*t; if(lon>180)lon-=360; if(lon<-180)lon+=360;
  return [a[1]+(b[1]-a[1])*t,lon];
}
let openskyStatesV30=[];
let openskyLastUpdateV30=0;
let openskyTimerV30=null;
let openskyCountriesV30=[];
function normalizeOpenSkyStateV30(s){
 const a=Array.isArray(s)?s:[];
 return {
   icao24:a[0]??null,callsign:a[1]??null,origin_country:a[2]??null,
   time_position:a[3]??null,last_contact:a[4]??null,longitude:a[5]??null,latitude:a[6]??null,
   baro_altitude:a[7]??null,on_ground:a[8]??null,velocity:a[9]??null,true_track:a[10]??null,
   vertical_rate:a[11]??null,sensors:a[12]??null,geo_altitude:a[13]??null,squawk:a[14]??null,
   spi:a[15]??null,position_source:a[16]??null,category:a[17]??null
 };
}
async function loadOpenSkyV30(force=false){
 const status=document.getElementById('openskyStatusV30');
 if(!force && Date.now()-openskyLastUpdateV30<28000)return;
 if(status)status.textContent='OpenSky: atualizando…';
 try{
   const r=await fetch('/api/opensky/states',{cache:'no-store'});
   const d=await r.json();
   if(!r.ok)throw new Error(d.error||'HTTP '+r.status);
   openskyStatesV30=Array.isArray(d.states)?d.states.map(normalizeOpenSkyStateV30).filter(x=>x.latitude!=null&&x.longitude!=null):[];
   openskyLastUpdateV30=Date.now();
   const set=[...new Set(openskyStatesV30.map(x=>x.origin_country).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
   if(set.join('|')!==openskyCountriesV30.join('|')){
     openskyCountriesV30=set; const sel=document.getElementById('mapCountryFilterV30');
     if(sel){const old=sel.value;sel.innerHTML='<option value="ALL">País OpenSky: Todos</option>'+set.map(c=>`<option value="${String(c).replace(/"/g,'&quot;')}">${c}</option>`).join(''); if(set.includes(old))sel.value=old;}
   }
   if(status)status.textContent='🔵 OpenSky: '+openskyStatesV30.length.toLocaleString('pt-BR')+' aeronaves';
 }catch(e){if(status)status.textContent='⚠️ OpenSky: '+e.message;}
 renderRDMapV21(true);
}
function openskyTypeV30(s){const c=Number(s.category); if(c===8)return 'Helicóptero'; if(c===9)return 'Planador'; if(c===14)return 'UAV'; if(c>=2&&c<=7)return 'Aeronave'; return 'Outro';}
const RD_AI_CREW_V30=[
 ['Cap. Rafael Almeida','1º Of. Lucas Martins','Chefe de Cabine Marina Costa','Comissária Ana Beatriz'],
 ['Cap. Eduardo Santos','1º Of. Felipe Rocha','Chefe de Cabine Juliana Mendes','Comissário Bruno Alves'],
 ['Cap. Marcelo Vieira','1º Of. André Carvalho','Chefe de Cabine Camila Souza','Comissária Fernanda Lima'],
 ['Cap. Ricardo Oliveira','1º Of. Thiago Ferreira','Chefe de Cabine Beatriz Nunes','Comissário Daniel Silva'],
 ['Cap. Gustavo Pereira','1º Of. Henrique Gomes','Chefe de Cabine Larissa Martins','Comissária Carolina Dias'],
 ['Cap. João Ribeiro','1º Of. Pedro Henrique','Chefe de Cabine Mariana Lopes','Comissário Gabriel Costa']
];
function aiCrewForRealV30(x){
 const key=String(x?.icao24||x?.callsign||x?.origin_country||'REAL').toUpperCase();
 let hash=0; for(let i=0;i<key.length;i++) hash=(hash*31+key.charCodeAt(i))>>>0;
 const c=RD_AI_CREW_V30[hash%RD_AI_CREW_V30.length];
 return {pilot:c[0],copilot:c[1],cabinLead:c[2],cabinCrew:c[3]};
}
function aiCrewHtmlV30(x){
 const c=aiCrewForRealV30(x);
 return `<div class="ai-crew-box-v30"><b>🤖 Tripulação IA — SIMULADA</b><div>👨‍✈️ Piloto: ${c.pilot}</div><div>👨‍✈️ 1º Oficial: ${c.copilot}</div><div>🧑‍✈️ Chefe de cabine: ${c.cabinLead}</div><div>🧑‍✈️ Comissário(a): ${c.cabinCrew}</div><small>Personagens virtuais atribuídos pela simulação RD AIRLINES; não representam a tripulação real da aeronave.</small></div>`;
}
const RD_RUNWAY_DATA_V30={
  SDRS:{name:'Resende',icao:'SDRS',runways:[1300],metar:'SDRS'},
  GRU:{name:'São Paulo/Guarulhos',icao:'SBGR',runways:[3700,3000],metar:'SBGR'},
  GIG:{name:'Rio de Janeiro/Galeão',icao:'SBGL',runways:[4000,2930],metar:'SBGL'},
  SDU:{name:'Rio de Janeiro/Santos Dumont',icao:'SBRJ',runways:[1323,1260],metar:'SBRJ'},
  REC:{name:'Recife/Guararapes',icao:'SBRF',runways:[3007],metar:'SBRF'},
  OPO:{name:'Porto',icao:'LPPR',runways:[3480,2260],metar:'LPPR'},
  SBCT:{name:'Curitiba/Afonso Pena',icao:'SBCT',runways:[2218],metar:'SBCT'},
  GVAC:{name:'Amílcar Cabral / Sal',icao:'GVAC',runways:[3270],metar:'GVAC'},
  KLAX:{name:'Los Angeles',icao:'KLAX',runways:[3685,3135,2727,3382],metar:'KLAX'},
  KSFO:{name:'San Francisco',icao:'KSFO',runways:[3618,3658,2639,2286],metar:'KSFO'},
  SPJC:{name:'Lima/Jorge Chávez',icao:'SPJC',runways:[3507],metar:'SPJC'},
  OEJN:{name:'Jeddah/King Abdulaziz',icao:'OEJN',runways:[3800,4000,3290],metar:'OEJN'},
  SBBR:{name:'Brasília',icao:'SBBR',runways:[3200,3300],metar:'SBBR'},
  HECA:{name:'Cairo',icao:'HECA',runways:[4000,4000,4000],metar:'HECA'},
  FAO:{name:'Faro',icao:'LPFR',runways:[2490],metar:'LPFR'},
  EGLL:{name:'London Heathrow',icao:'EGLL',runways:[3902,3658],metar:'EGLL'},
  RJAA:{name:'Tokyo/Narita',icao:'RJAA',runways:[4000,2500],metar:'RJAA'},
  CYVR:{name:'Vancouver',icao:'CYVR',runways:[3505,3029,2225],metar:'CYVR'},
  HAAB:{name:'Addis Ababa',icao:'HAAB',runways:[4725],metar:'HAAB'},
  LTFM:{name:'Istanbul',icao:'LTFM',runways:[3750,3750,4100],metar:'LTFM'},
  EDDB:{name:'Berlin Brandenburg',icao:'EDDB',runways:[4000,3600],metar:'EDDB'},
  SBBR:{name:'Brasília',icao:'SBBR',runways:[3200,3300],metar:'SBBR'},
  LPVR:{name:'Vila Real',icao:'LPVR',runways:[950],metar:'LPVR'},
  LPBJ:{name:'Beja',icao:'LPBJ',runways:[3450],metar:'LPBJ'},
  EDDP:{name:'Leipzig/Halle',icao:'EDDP',runways:[3600,3680],metar:'EDDP'},
  GOBD:{name:'Blaise Diagne / Dakar',icao:'GOBD',runways:[3500],metar:'GOBD'},
  DTTA:{name:'Tunis-Carthage',icao:'DTTA',runways:[2840,2840],metar:'DTTA'},
  SOCA:{name:'Cayenne',icao:'SOCA',runways:[3200],metar:'SOCA'},
  SBEG:{name:'Manaus',icao:'SBEG',runways:[2700],metar:'SBEG'}
};
const RD_AIRCRAFT_MIN_RUNWAY_V30={
  'Cessna 208 Caravan':900,'ATR 72-600':1200,'E195-E2':1800,'A320-200':2100,'A320neo':2100,
  'A321ceo':2300,'A321neo':2300,'A321XLR':2400,'A330neo':2500,'A330-200':2500,'A340-300':2700,
  'A340-600':2900,'A350-900':2800,'A350-1000':2900,'A380-800':3000
};
function rdAircraftMinRunwayV30(model){return RD_AIRCRAFT_MIN_RUNWAY_V30[model]||2200;}
function rdAirportRunwayMaxV30(code){return Math.max(...(RD_RUNWAY_DATA_V30[code]?.runways||[0]));}
function rdFlightSafetyV30(f){const o=rdAirportRunwayMaxV30(f.origin),d=rdAirportRunwayMaxV30(f.dest),need=rdAircraftMinRunwayV30(f.model);return {ok:o>=need&&d>=need,need,origin:o,dest:d};}
function rdFallbackAircraftV30(f){
  const original=rdFlightSafetyV30(f);
  if(original.ok)return {...f, safety:original, substituted:false, originalModel:f.model};
  const o=original.origin,d=original.dest;
  const pairMin=Math.min(o,d);
  // Prefer ATR 72-600 when both ends support it; otherwise use Grand Caravan.
  const fallback=pairMin>=1200?'ATR 72-600':(pairMin>=900?'Cessna 208 Caravan':null);
  if(!fallback)return {...f, safety:original, substituted:false, originalModel:f.model, blocked:true};
  const safe={...f, model:fallback, safety:{...rdFlightSafetyV30({...f,model:fallback}), originalNeed:original.need}, substituted:true, originalModel:f.model, blocked:false};
  return safe;
}
function rdEffectiveRowsV30(rows){return rows.map(rdFallbackAircraftV30);}

let metarCacheV30={};
async function loadMetarV30(icao){
  const el=document.getElementById('metarAirportGridV30'); if(!el)return;
  const ap=Object.entries(RD_RUNWAY_DATA_V30).find(([,v])=>v.metar===icao||v.icao===icao);
  if(!ap)return;
  const [code,data]=ap;
  const safetyRows=RD_MAP_V21.filter(f=>f.origin===code||f.dest===code).map(f=>({f,s:rdFlightSafetyV30(f)}));
  const effectiveSafety=safetyRows.map(x=>rdFallbackAircraftV30(x.f)); const blocked=effectiveSafety.filter(x=>x.blocked).length; const substituted=effectiveSafety.filter(x=>x.substituted).length;
  const max=rdAirportRunwayMaxV30(code);
  document.getElementById('runwaySafetySummaryV30').innerHTML=`<span class="${blocked?'safety-warn':'safety-ok'}"><b>${code}</b> • pista máx. ${max.toLocaleString('pt-BR')} m • ${blocked} voo(s) sem aeronave compatível • ${substituted} substituído(s) por ATR/Caravan</span>`;
  if(metarCacheV30[icao]&&Date.now()-metarCacheV30[icao].at<60000){renderMetarV30(code,metarCacheV30[icao].metar,metarCacheV30[icao].taf);return;}
  el.innerHTML='<div class="metar-cell">Carregando METAR/TAF…</div>';
  try{
    const r=await fetch('/api/weather/'+encodeURIComponent(icao),{cache:'no-store'}); const d=await r.json(); if(!r.ok)throw new Error(d.error||'HTTP '+r.status);
    metarCacheV30[icao]={at:Date.now(),metar:d.metar,taf:d.taf}; renderMetarV30(code,d.metar,d.taf);
  }catch(e){renderMetarV30(code,null,null,e.message);}
}
function renderMetarV30(code,metar,taf,err){
  const d=RD_RUNWAY_DATA_V30[code],m=metar&&metar[0],t=taf&&taf[0];
  document.getElementById('metarAirportGridV30').innerHTML=`<div class="metar-cell"><b>Aeroporto</b>${d.name} (${d.icao})</div><div class="metar-cell"><b>Pista publicada</b>${d.runways.join(' / ')} m</div><div class="metar-cell"><b>METAR</b>${m?(m.fltCat||'—')+' • vento '+(m.wdir??'—')+'° / '+(m.wspd??'—')+' kt • vis '+(m.visib??'—'):'Sem METAR disponível'}</div><div class="metar-cell"><b>TAF</b>${t?'Disponível':'Sem TAF disponível'}${err?' • '+err:''}</div>`;
}
function renderRunwaySafetyV30(){const ap=document.getElementById('mapAirportFilterV21')?.value||'ALL';const code=ap==='ALL'?'GRU':ap;loadMetarV30(RD_RUNWAY_DATA_V30[code]?RD_RUNWAY_DATA_V30[code].icao:'SBGR');}
function renderRDMapV21(fromOpenSky=false){
 const al=document.getElementById('mapAirlineFilterV21')?.value||'ALL',ty=document.getElementById('mapTypeFilterV21')?.value||'ALL',st=document.getElementById('mapStatusFilterV21')?.value||'ALL',ap=document.getElementById('mapAirportFilterV21')?.value||'ALL',src=document.getElementById('mapSourceFilterV30')?.value||'ALL',country=document.getElementById('mapCountryFilterV30')?.value||'ALL',q=(document.getElementById('mapSearchV21')?.value||'').toLowerCase();
 const rdRows=RD_MAP_V21.filter(x=>!x.demo&&(al==='ALL'||x.airline===al)&&(ty==='ALL'||x.type===ty)&&(st==='ALL'||x.status===st)&&(ap==='ALL'||x.origin===ap||x.dest===ap)&&[x.flight,x.origin,x.dest,x.model,x.reg,x.type,x.status,x.pilot].join(' ').toLowerCase().includes(q));
 const effectiveRows=rdEffectiveRowsV30(rdRows);
  const rdSafeRows=effectiveRows.filter(x=>!x.blocked);
 renderRunwaySafetyV30();
 const realRows=openskyStatesV30.filter(x=>x.latitude!=null&&x.longitude!=null&&(country==='ALL'||x.origin_country===country)&&[x.icao24,x.callsign,x.origin_country].join(' ').toLowerCase().includes(q));
 const useRD=src==='ALL'||src==='RD', useReal=src==='ALL'||src==='OPENSKY';
 const rows=useRD?rdRows:[]; const shownReal=useReal?realRows:[];
 const box=document.getElementById('mapFlightListV21'),count=document.getElementById('mapCountV21');if(!box)return;
 count.textContent=(rows.length+shownReal.length).toLocaleString('pt-BR');
 const realHtml=shownReal.slice(0,250).map(x=>`<div class="map-flight-row-v21" onclick="focusOpenSkyV30('${x.icao24||''}')"><div class="map-flight-top-v21"><div class="map-flight-brand-v22"><span style="color:#0b6b3a;font-size:18px">✈</span><b>${(x.callsign||x.icao24||'SEM CALLSIGN').trim()}</b></div><span class="map-status-v21">OpenSky</span></div><div class="map-flight-meta-v21"><span>🆔 ${x.icao24||'—'}</span><span>🌎 ${x.origin_country||'—'}</span><span>⬆ ${x.baro_altitude!=null?Math.round(x.baro_altitude*3.28084).toLocaleString('pt-BR')+' ft':'—'}</span><span>💨 ${x.velocity!=null?Math.round(x.velocity*1.94384)+' kt':'—'}</span></div></div>`).join('');
 const rdHtml=effectiveRows.map(x=>{const ss=x.safety;return `<div class="map-flight-row-v21 ${x.blocked?'flight-blocked-v30':''}" onclick="focusMapAirportV21('${x.origin}')"><div class="map-flight-top-v21"><div class="map-flight-brand-v22"><img class="map-airline-logo-v22" src="${airlineLogoV22(x.airline)}" onerror="this.style.display='none'" alt=""><b>✈ ${x.flight} • ${x.origin} → ${x.dest}</b></div><span class="map-status-v21 ${x.blocked?'safety-block':'safety-ok'}">${x.blocked?'🚫 SEM AERONAVE COMPATÍVEL':'🟡 RD VIRTUAL'}</span></div><div class="map-flight-meta-v21"><span>🛩️ ${x.model}</span>${x.substituted?`<span>🔄 substituído de ${x.originalModel}</span>`:''}<span>🆔 ${x.reg}</span><span>🛫 ${ss.origin.toLocaleString('pt-BR')} m</span><span>🛬 ${ss.dest.toLocaleString('pt-BR')} m</span><span>📏 mín. ${ss.need.toLocaleString('pt-BR')} m</span></div></div>`;}).join('');
 box.innerHTML=(realHtml+rdHtml)||'<div style="padding:18px;color:#999">Nenhuma aeronave encontrada com os filtros selecionados.</div>';
 renderLiveRadarV29(rdSafeRows,shownReal);
}
let rdLiveAirportLayerV30=null, rdLiveRealLayerV30=null, rdLiveVirtualLayerV30=null, rdLiveRouteLayerV30=null;
function ensureLiveLayersV30(){
 const el=document.getElementById('rdLiveMapV29'); if(!el||typeof L==='undefined')return false;
 if(!rdLiveMapV29){
   rdLiveMapV29=L.map(el,{worldCopyJump:true,zoomControl:true,minZoom:2,maxZoom:10,preferCanvas:true}).setView([8,-28],3);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors | OpenSky Network',maxZoom:19}).addTo(rdLiveMapV29);
   rdLiveAirportLayerV30=L.layerGroup().addTo(rdLiveMapV29);
   rdLiveRealLayerV30=L.layerGroup().addTo(rdLiveMapV29);
   rdLiveVirtualLayerV30=L.layerGroup().addTo(rdLiveMapV29);
   rdLiveRouteLayerV30=L.layerGroup().addTo(rdLiveMapV29);
   setTimeout(()=>{rdLiveMapV29.invalidateSize(); if(window.renderAssignedFleetOnMapV30)renderAssignedFleetOnMapV30();},120);
 }
 return true;
}
function openSkyDisplayLimitV30(){
 if(!rdLiveMapV29)return 550;
 const z=rdLiveMapV29.getZoom();
 if(z<=3)return 550;
 if(z<=5)return 800;
 if(z<=7)return 1100;
 return 1400;
}
function realRowsForViewportV30(realRows){
 if(!rdLiveMapV29)return realRows.slice(0,550);
 const bounds=rdLiveMapV29.getBounds();
 const visible=realRows.filter(x=>x.latitude!=null&&x.longitude!=null&&bounds.contains([x.latitude,x.longitude]));
 const pool=(visible.length?visible:realRows).slice();
 // Keep a deterministic, lightweight subset rather than creating thousands of DOM markers.
 const max=openSkyDisplayLimitV30();
 if(pool.length<=max)return pool;
 return pool.slice(0,max);
}
function addOpenSkyMarkersV30(realRows){
 if(!rdLiveRealLayerV30)return;
 rdLiveRealLayerV30.clearLayers();
 const shown=realRowsForViewportV30(realRows);
 shown.forEach(x=>{
   const hd=x.true_track!=null?x.true_track:0;
   const icon=L.divIcon({className:'',html:`<div class="rd-aircraft-marker-v29 opensky-real" style="transform:rotate(${hd}deg)"><span class="plane">✈</span></div>`,iconSize:[24,24],iconAnchor:[12,12]});
   const m=L.marker([x.latitude,x.longitude],{icon,zIndexOffset:700});
   m.bindPopup(`<div class="rd-flight-popup-v29"><b>🟢 OpenSky REAL</b><div class="route">${(x.callsign||'SEM CALLSIGN').trim()}</div><div>🆔 ICAO24: ${x.icao24||'—'}</div><div>🌎 Origem estimada: ${x.origin_country||'—'}</div><div>📍 ${Number(x.latitude).toFixed(4)}°, ${Number(x.longitude).toFixed(4)}°</div><div>⬆ Altitude: ${x.baro_altitude!=null?Math.round(x.baro_altitude*3.28084).toLocaleString('pt-BR')+' ft':'—'}</div><div>💨 Velocidade: ${x.velocity!=null?Math.round(x.velocity*1.94384)+' kt':'—'}</div><div>🧭 Proa: ${x.true_track!=null?Math.round(x.true_track)+'°':'—'}</div><div>🏷️ Categoria: ${openskyTypeV30(x)}</div>${aiCrewHtmlV30(x)}<small>Dados ao vivo — OpenSky Network</small></div>`);
   m.addTo(rdLiveRealLayerV30);
 });
 const clock=document.getElementById('rdLiveMapClockV29');
 if(clock){const total=realRows.filter(x=>x.latitude!=null&&x.longitude!=null).length;clock.dataset.realTotal=String(total);clock.dataset.realShown=String(shown.length);}
}
function renderLiveRadarV29(rows=RD_MAP_V21,realRows=openskyStatesV30){
 if(!ensureLiveLayersV30())return;
 const src=document.getElementById('mapSourceFilterV30')?.value||'ALL';
 if(rdLiveAirportLayerV30&&rdLiveAirportLayerV30.getLayers().length===0){
   Object.entries(RD_MAP_AIRPORTS_V21).forEach(([code,d])=>{
     const m=L.marker([d[1],d[2]],{icon:L.divIcon({className:'',html:'<div class="rd-airport-marker-v29"></div>',iconSize:[16,16],iconAnchor:[8,8]})});
     m.bindTooltip(code+' — '+d[0]+' • pista '+rdAirportRunwayMaxV30(code),{direction:'top'});
     m.addTo(rdLiveAirportLayerV30);
   });
 }
 rdLiveRealLayerV30?.clearLayers(); rdLiveVirtualLayerV30?.clearLayers(); rdLiveRouteLayerV30?.clearLayers();
 if(src==='ALL'||src==='OPENSKY') addOpenSkyMarkersV30(realRows);
 if(src==='ALL'||src==='RD'){
   rows.filter(f=>f.status==='Em voo').forEach((f,i)=>{
     const a=rdCoordV29(f.origin),b=rdCoordV29(f.dest),t=rdProgressV29(i),pos=rdInterpolateV29(a,b,t);
     const bearing=Math.atan2((b[2]-a[2])*Math.cos((a[1]+b[1])*Math.PI/360),b[1]-a[1])*180/Math.PI;
     const speed=Math.round(390+(i*47)%180),alt=Math.round(30000+(i*1700)%12000);
     const icon=L.divIcon({className:'',html:`<div class="rd-aircraft-marker-v29 rd-virtual" style="transform:rotate(${bearing}deg)"><span class="plane">✈</span></div>`,iconSize:[28,28],iconAnchor:[14,14]});
     const m=L.marker(pos,{icon,zIndexOffset:500});
     const crew=getCrewDisplayV30(f.flight);
     m.bindPopup(`<div class="rd-flight-popup-v29"><b>🟡 ${f.flight}</b> • ${f.reg}<div class="route">${f.origin} → ${f.dest}</div><div>✈ ${f.model}</div><div>📍 Posição: ${pos[0].toFixed(2)}°, ${pos[1].toFixed(2)}°</div><div>⬆ Altitude: ${alt.toLocaleString('pt-BR')} ft</div><div>💨 Velocidade: ${speed} kt</div><div>🧭 Proa: ${Math.round((bearing+360)%360)}°</div><div>👨‍✈️ Piloto: ${crew.pilot}</div><div>👨‍✈️ Copiloto: ${crew.copilot}</div><div>🧑‍✈️ Chefe de cabine: ${crew.purser}</div><div>🧑‍✈️ Comissários: ${crew.cabin.join(', ')}</div><small>Simulação RD AIRLINES • Tripulação IA</small></div>`);
     m.addTo(rdLiveVirtualLayerV30);
     const line=L.polyline([[a[1],a[2]],[b[1],b[2]]],{color:'#d7b64a',weight:1,opacity:.35,dashArray:'5 8'}).addTo(rdLiveRouteLayerV30);
   });
 }
 const clock=document.getElementById('rdLiveMapClockV29');
 if(clock){
   const total=realRows.filter(x=>x.latitude!=null&&x.longitude!=null).length;
   const shown=rdLiveRealLayerV30?rdLiveRealLayerV30.getLayers().length:0;
   clock.textContent='🕐 '+formatSimTime()+' • 🟢 '+total.toLocaleString('pt-BR')+' reais • 🟡 '+rows.filter(f=>f.status==='Em voo' && !f.demo).length+' virtuais • 🤖 '+rdAutoAircraftCount+' automáticas • mapa: '+shown.toLocaleString('pt-BR');
 }
}
function refreshOpenSkyMapV30(){ if(rdLiveMapV29) renderLiveRadarV29(RD_MAP_V21.filter(x=>!x.demo),openskyStatesV30); }

function centerGoogleMapV21(){const ap=document.getElementById('mapAirportFilterV21')?.value||'ALL';const data=RD_MAP_AIRPORTS_V21[ap];if(rdLiveMapV29&&data)rdLiveMapV29.setView([data[1],data[2]],6);}
function focusMapAirportV21(ap){const sel=document.getElementById('mapAirportFilterV21');if(sel){sel.value=ap;renderRDMapV21();}centerGoogleMapV21();}
function focusOpenSkyV30(icao){const x=openskyStatesV30.find(s=>s.icao24===icao);if(x&&rdLiveMapV29&&x.latitude!=null){rdLiveMapV29.setView([x.latitude,x.longitude],7);}}
function openGoogleMapV21(){const ap=document.getElementById('mapAirportFilterV21')?.value||'ALL';const data=RD_MAP_AIRPORTS_V21[ap];const q=data?`${data[0]}, ${data[1]}, ${data[2]}`:'Brazil';window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q),'_blank','noopener');}
function oneClickSimBrief(){copySimBriefData();setTimeout(()=>openSimBrief(),250);document.getElementById('simbriefCopyStatus').textContent='✓ Voo preparado: dados copiados e SimBrief aberto. Para preenchimento automático oficial, é necessária a API do SimBrief.';}
document.addEventListener('DOMContentLoaded',()=>{renderRDMapV21();loadOpenSkyV30(true);clearInterval(openskyTimerV30);openskyTimerV30=setInterval(()=>loadOpenSkyV30(),30000);setInterval(()=>{if(rdLiveMapV29)renderRDMapV21();},10000);setTimeout(()=>{if(rdLiveMapV29){rdLiveMapV29.on('zoomend moveend',()=>refreshOpenSkyMapV30());}},700);});
function oneClickSimBrief(){copySimBriefData();setTimeout(()=>openSimBrief(),250);document.getElementById('simbriefCopyStatus').textContent='✓ Voo preparado: dados copiados e SimBrief aberto. Para preenchimento automático oficial, é necessária a API do SimBrief.';}
