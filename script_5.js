
// V16 — Relógio virtual, pilotos Bots/IA e operação autônoma sem MSFS 2020
const RD_INITIAL_SIM_TIME = new Date('2026-09-13T12:00:00');
let rdSimTime = new Date(localStorage.getItem('rdSimTime') || RD_INITIAL_SIM_TIME.toISOString());
let rdAutonomous = localStorage.getItem('rdAutonomous') === '1';
let rdCopilot = localStorage.getItem('rdCopilot') === '1';
let rdVirtualPilots = JSON.parse(localStorage.getItem('rdVirtualPilots') || '[]');
const RD_VIRTUAL_PILOTS = [
 {id:'vp1',name:'Carlos Mendes',role:'Comandante',rating:'A350 / A330',salary:18500},
 {id:'vp2',name:'Ana Ribeiro',role:'Comandante',rating:'A320 / A321',salary:14200},
 {id:'vp3',name:'Rafael Costa',role:'First Officer',rating:'A320 / E2',salary:9800},
 {id:'vp4',name:'Mariana Lopes',role:'First Officer',rating:'A350 / A330',salary:11200},
 {id:'vp5',name:'Bruno Almeida',role:'Comandante',rating:'ATR / Caravan',salary:7600},
 {id:'vp6',name:'Sofia Martins',role:'First Officer',rating:'A320 / ATR',salary:8200}
];
function saveSim(){localStorage.setItem('rdSimTime',rdSimTime.toISOString());localStorage.setItem('rdAutonomous',rdAutonomous?'1':'0');localStorage.setItem('rdCopilot',rdCopilot?'1':'0');localStorage.setItem('rdVirtualPilots',JSON.stringify(rdVirtualPilots));renderSimulation();}
function formatSimTime(){return rdSimTime.toLocaleString('pt-BR',{dateStyle:'full',timeStyle:'short'});}
function advanceVirtualHours(h){rdSimTime=new Date(rdSimTime.getTime()+h*3600000);saveSim();runAutonomousTick();}
function advanceDay(d){advanceVirtualHours(d*24);}
function setSimulationDateTime(){const d=document.getElementById('simDate'),t=document.getElementById('simTime');if(!d||!t)return;const next=new Date(`${d.value}T${t.value}:00`);if(isNaN(next.getTime())){alert('Escolha uma data e um horário válidos.');return;}rdSimTime=next;saveSim();runAutonomousTick();}
function resetSimulationClock(){rdSimTime=new Date(RD_INITIAL_SIM_TIME);saveSim();}
function toggleAutonomous(){rdAutonomous=!rdAutonomous;saveSim();alert(rdAutonomous?'Operação autônoma ATIVADA. Os pilotos virtuais continuarão voando no site mesmo com o MSFS 2020 fechado.':'Operação autônoma desativada.');}
function toggleCopilot(){rdCopilot=!rdCopilot;saveSim();alert(rdCopilot?'Copiloto automático ATIVADO.':'Copiloto automático desativado.');}
function hireVirtualPilot(id){const p=RD_VIRTUAL_PILOTS.find(x=>x.id===id);if(!p)return;if(rdVirtualPilots.some(x=>x.id===id)){alert(p.name+' já faz parte da sua equipe.');return;}rdVirtualPilots.push({...p,hiredAt:rdSimTime.toISOString(),hours:0,flights:0,status:'Disponível'});saveSim();alert(p.name+' foi contratado como piloto virtual.');}
function fireVirtualPilot(id){rdVirtualPilots=rdVirtualPilots.filter(x=>x.id!==id);saveSim();}
function renderVirtualPilots(){const m=document.getElementById('virtualPilotMarket'),h=document.getElementById('hiredVirtualPilots');if(m)m.innerHTML=RD_VIRTUAL_PILOTS.map(p=>{const hired=rdVirtualPilots.some(x=>x.id===p.id);return `<div class="card tile"><h3>👨‍✈️ ${p.name}</h3><span class="tag">${p.role}</span><p>Qualificação: ${p.rating}</p><p>Salário virtual: R$ ${p.salary.toLocaleString('pt-BR')}/mês</p><button class="primary" ${hired?'disabled':''} onclick="hireVirtualPilot('${p.id}')">${hired?'✓ Contratado':'Contratar piloto'}</button></div>`}).join('');if(h)h.innerHTML=rdVirtualPilots.length?rdVirtualPilots.map(p=>`<div class="flight-row"><span><b>${p.name}</b> — ${p.role} • ${p.rating}</span><span>${p.flights} voos • ${p.hours} h <button onclick="fireVirtualPilot('${p.id}')">Dispensar</button></span></div>`).join(''):'Nenhum piloto virtual contratado ainda.';}
const RD_AI_CABIN_CREW_V30=[
 {id:'cc1',name:'Giovanna Silva Santos',role:'Comissária',rating:'Economy / Premium / Business'},
 {id:'cc2',name:'Marina Costa',role:'Chefe de cabine',rating:'Widebody / Internacional'},
 {id:'cc3',name:'Ana Beatriz',role:'Comissária',rating:'A320 / A321 / E2'},
 {id:'cc4',name:'Fernanda Lima',role:'Comissária',rating:'A350 / A330'},
 {id:'cc5',name:'Camila Souza',role:'Chefe de cabine',rating:'A350 / A330 / A340'},
 {id:'cc6',name:'Carolina Dias',role:'Comissária',rating:'ATR / Caravan / Regional'},
 {id:'cc7',name:'Juliana Mendes',role:'Chefe de cabine',rating:'A320 / A321'},
 {id:'cc8',name:'Beatriz Nunes',role:'Comissária',rating:'A330 / A350'},
 {id:'cc9',name:'Larissa Martins',role:'Comissária',rating:'A320 / A321 / A350'},
 {id:'cc10',name:'Mariana Lopes',role:'Comissária',rating:'A350 / A330'}
];
let rdCrewAssignments=JSON.parse(localStorage.getItem('rdCrewAssignmentsV30')||'{}');
let rdAutoAircraftCount=Number(localStorage.getItem('rdAutoAircraftCountV30')||6);
function crewPersistV30(){localStorage.setItem('rdCrewAssignmentsV30',JSON.stringify(rdCrewAssignments));localStorage.setItem('rdAutoAircraftCountV30',String(rdAutoAircraftCount));}
function setAutoAircraftCountV30(v){rdAutoAircraftCount=Math.max(1,Math.min(50,Number(v)||1));crewPersistV30();renderCrewAssignmentV30();renderSimulation();}
function getHiredPilotsV30(){return rdVirtualPilots.length?rdVirtualPilots:RD_VIRTUAL_PILOTS.map(p=>({...p,status:'Disponível'}));}
function normalizeCrewAssignmentV30(flight){const cur=rdCrewAssignments[flight]||{};return {pilot:cur.pilot||'',copilot:cur.copilot||'',purser:cur.purser||'',cabin:cur.cabin||[]};}
function saveCrewForFlightV30(flight){const el=document.getElementById('crewAssignmentV30');if(!el)return;const pilot=el.querySelector('[data-role="pilot"]')?.value||'';const copilot=el.querySelector('[data-role="copilot"]')?.value||'';const purser=el.querySelector('[data-role="purser"]')?.value||'';const cabin=[...el.querySelectorAll('[data-role="cabin"]:checked')].map(x=>x.value);rdCrewAssignments[flight]={pilot,copilot,purser,cabin};crewPersistV30();renderCrewAssignmentV30();}
function renderCrewAssignmentV30(){const el=document.getElementById('crewAssignmentV30'),sel=document.getElementById('autoAircraftCountV30'),status=document.getElementById('autoAircraftStatusV30');if(sel){sel.innerHTML=Array.from({length:20},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join('');sel.value=String(Math.min(20,Math.max(1,rdAutoAircraftCount)));} if(status)status.textContent=`${rdAutoAircraftCount} aeronave(s) no modo automático`;if(!el)return;const routes=(RD_MAP_V21||[]).filter(x=>x.status==='Em voo'&&!x.demo).slice(0,Math.max(1,rdAutoAircraftCount));const pilots=getHiredPilotsV30();if(!routes.length){el.innerHTML='<div class="muted">Nenhum voo virtual elegível encontrado.</div>';return;}el.innerHTML=routes.map(f=>{const a=normalizeCrewAssignmentV30(f.flight);return `<div class="card tile" style="margin-top:10px"><h4>✈️ ${f.flight} — ${f.origin} → ${f.dest}</h4><div class="controls" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px"><label>Piloto<select data-role="pilot"><option value="">Selecionar</option>${pilots.map(p=>`<option value="${p.id}" ${a.pilot===p.id?'selected':''}>${p.name} — ${p.role}</option>`).join('')}</select></label><label>Copiloto<select data-role="copilot"><option value="">Selecionar</option>${pilots.map(p=>`<option value="${p.id}" ${a.copilot===p.id?'selected':''}>${p.name} — ${p.role}</option>`).join('')}</select></label><label>Chefe de cabine<select data-role="purser"><option value="">Selecionar</option>${RD_AI_CABIN_CREW_V30.filter(p=>p.role==='Chefe de cabine').map(p=>`<option value="${p.id}" ${a.purser===p.id?'selected':''}>${p.name}</option>`).join('')}</select></label></div><div style="margin-top:8px"><b>Comissários</b><div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:5px">${RD_AI_CABIN_CREW_V30.filter(p=>p.role==='Comissária').map(p=>`<label style="font-size:12px"><input type="checkbox" data-role="cabin" value="${p.id}" ${a.cabin.includes(p.id)?'checked':''}> ${p.name}</label>`).join('')}</div></div><button class="primary" style="margin-top:10px" onclick="saveCrewForFlightV30('${f.flight}')">💾 Salvar escala</button></div>`;}).join('');}
function autoAssignCrewV30(){const routes=(RD_MAP_V21||[]).filter(x=>x.status==='Em voo'&&!x.demo).slice(0,Math.max(1,rdAutoAircraftCount));const pilots=getHiredPilotsV30();routes.forEach((f,i)=>{const p=pilots[i%pilots.length],co=pilots[(i+1)%pilots.length];const leads=RD_AI_CABIN_CREW_V30.filter(x=>x.role==='Chefe de cabine'),cab=RD_AI_CABIN_CREW_V30.filter(x=>x.role==='Comissária');rdCrewAssignments[f.flight]={pilot:p?.id||'',copilot:co?.id||'',purser:leads[i%leads.length]?.id||'',cabin:[cab[(i*2)%cab.length]?.id||'',cab[(i*2+1)%cab.length]?.id||''].filter(Boolean)};});crewPersistV30();renderCrewAssignmentV30();}
function showCrewAssignmentV30(){renderCrewAssignmentV30();document.getElementById('crewAssignmentV30')?.scrollIntoView({behavior:'smooth',block:'start'});}
function getCrewDisplayV30(flight){const a=rdCrewAssignments[flight]||{};const pilots=getHiredPilotsV30();const by=(arr,id)=>arr.find(x=>x.id===id)?.name||'Não atribuído';const cabin=RD_AI_CABIN_CREW_V30.filter(x=>(a.cabin||[]).includes(x.id)).map(x=>x.name);return {pilot:by(pilots,a.pilot),copilot:by(pilots,a.copilot),purser:by(RD_AI_CABIN_CREW_V30,a.purser),cabin:cabin.length?cabin:['Não atribuído']};}


// V30.3 — 100 aeronaves virtuais disponíveis no gate/estacionadas.
const RD_VIRTUAL_FLEET_MODELS_V30=[
 ['A350-900','RD',12],['A320-200','RD',18],['A320neo','RD',18],['A350-1000','RD',3],['Cessna 208 Caravan','RD',10],['ATR 72-600','RD',8],['E195-E2','RD',8],['A330neo','RD',6],['A340-300','RD',4],['A340-600','RD',2],['A380-800','RD',1],['A321neo','RD',4],['A321ceo','RD',1],['A321XLR','RD',1],
 ['A330-200','RDP',1],['A320neo','RDP',4]
];
const RD_VIRTUAL_FLEET_AIRPORTS_V30=['SDRS','GRU','GIG','SDU','REC','OPO'];
let rdVirtualFleet100V30=JSON.parse(localStorage.getItem('rdVirtualFleet100V30')||'null');
function buildVirtualFleet100V30(){
 if(Array.isArray(rdVirtualFleet100V30)&&rdVirtualFleet100V30.length===100)return;
 const out=[]; let n=1;
 for(const [model,airline,count] of RD_VIRTUAL_FLEET_MODELS_V30){
   for(let i=0;i<count;i++){
     const isRdp=airline==='RDP';
     const reg=isRdp?`CS-RDP${String(n).padStart(3,'0')}`:`PR-RD${String(n).padStart(3,'0')}`;
     const airport=isRdp?'OPO':RD_VIRTUAL_FLEET_AIRPORTS_V30[(n-1)%5];
     out.push({id:`VF${String(n).padStart(3,'0')}`,reg,model,airline,airport,status:'PARKED',route:'',pilot:'',copilot:'',purser:'',cabin:[]}); n++;
   }
 }
 rdVirtualFleet100V30=out.slice(0,100);
 localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));
}
function virtualFleetPilotsV30(){return getHiredPilotsV30();}
function virtualFleetCabinV30(){return RD_AI_CABIN_CREW_V30;}
function fleetRouteLabelV30(r){return `${r.flight} • ${r.origin} → ${r.dest}`;}
function initVirtualFleet100V30(){
 buildVirtualFleet100V30();
 const aircraft=document.getElementById('v30Fleet100Aircraft');
 const route=document.getElementById('v30Fleet100Route');
 const airport=document.getElementById('v30Fleet100Airport');
 const pilot=document.getElementById('v30Fleet100Pilot');
 const copilot=document.getElementById('v30Fleet100Copilot');
 const purser=document.getElementById('v30Fleet100Purser');
 const cabin=document.getElementById('v30Fleet100Cabin');
 if(aircraft)aircraft.innerHTML=rdVirtualFleet100V30.map(x=>`<option value="${x.id}">${x.reg} • ${x.model} • ${x.airline==='RDP'?'RD AIRLINES-PORTUGAL':'RD AIRLINES'}</option>`).join('');
 if(route)route.innerHTML='<option value="">Selecionar rota</option>'+RD_MAP_V21.filter(x=>!x.demo).map(r=>`<option value="${r.flight}">${fleetRouteLabelV30(r)}</option>`).join('');
 if(airport)airport.innerHTML=RD_VIRTUAL_FLEET_AIRPORTS_V30.map(a=>`<option value="${a}">${a} — ${RD_MAP_AIRPORTS_V21[a]?.[0]||a}</option>`).join('');
 const pilots=virtualFleetPilotsV30();
 const opts='<option value="">Selecionar</option>'+pilots.map(p=>`<option value="${p.id}">${p.name} — ${p.role}</option>`).join('');
 if(pilot)pilot.innerHTML=opts;if(copilot)copilot.innerHTML=opts;
 const leads=virtualFleetCabinV30().filter(p=>p.role==='Chefe de cabine');
 if(purser)purser.innerHTML='<option value="">Selecionar</option>'+leads.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
 if(cabin)cabin.innerHTML=virtualFleetCabinV30().filter(p=>p.role==='Comissária').map(p=>`<label style="font-size:11px"><input type="checkbox" value="${p.id}"> ${p.name}</label>`).join('');
 renderVirtualFleet100V30();
 selectVirtualFleet100V30(rdVirtualFleet100V30[0]?.id);
}
function fleetStatusLabelV30(s){return s==='GATE'?'No gate':s==='ASSIGNED'?'Escalada':'Estacionada';}
function fleetStatusClassV30(s){return s==='GATE'?'gate':s==='ASSIGNED'?'gate':'parked';}
function renderVirtualFleet100V30(){
 buildVirtualFleet100V30();
 const q=(document.getElementById('v30Fleet100Search')?.value||'').toLowerCase();
 const air=document.getElementById('v30Fleet100Airline')?.value||'ALL';
 const st=document.getElementById('v30Fleet100Status')?.value||'ALL';
 const rows=rdVirtualFleet100V30.filter(x=>(air==='ALL'||x.airline===air)&&(st==='ALL'||x.status===st)&&[x.reg,x.model,x.airline,x.airport,x.route].join(' ').toLowerCase().includes(q));
 const list=document.getElementById('v30Fleet100List');
 if(list)list.innerHTML=rows.map(x=>`<div class="v30-fleet100-row"><span><b>${x.reg}</b></span><span>${x.model}<br><small>${x.airline==='RDP'?'RD AIRLINES-PORTUGAL':'RD AIRLINES'}</small></span><span>${x.airport}</span><span><span class="v30-fleet100-status ${fleetStatusClassV30(x.status)}">${fleetStatusLabelV30(x.status)}</span></span><button onclick="selectVirtualFleet100V30('${x.id}')">Selecionar</button></div>`).join('')||'<div style="padding:14px;color:#999">Nenhuma aeronave encontrada.</div>';
 const total=rdVirtualFleet100V30.length,gate=rdVirtualFleet100V30.filter(x=>x.status==='GATE').length,park=rdVirtualFleet100V30.filter(x=>x.status==='PARKED').length;
 const a=document.getElementById('v30Fleet100Total'),g=document.getElementById('v30Fleet100Gate'),p=document.getElementById('v30Fleet100Parked'); if(a)a.textContent=total;if(g)g.textContent=gate;if(p)p.textContent=park;
}
function selectVirtualFleet100V30(id){
 const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return;
 const set=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v||''};
 set('v30Fleet100Aircraft',x.id);set('v30Fleet100Route',x.route);set('v30Fleet100AssignmentStatus',x.status);set('v30Fleet100Airport',x.airport);set('v30Fleet100Pilot',x.pilot);set('v30Fleet100Copilot',x.copilot);set('v30Fleet100Purser',x.purser);
 document.querySelectorAll('#v30Fleet100Cabin input[type="checkbox"]').forEach(cb=>cb.checked=(x.cabin||[]).includes(cb.value));
 const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`Selecionada: ${x.reg} • ${x.model} • ${fleetStatusLabelV30(x.status)} • ${x.airport}`;
}
function saveVirtualFleetAssignmentV30(){
 const id=document.getElementById('v30Fleet100Aircraft')?.value; const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return;
 x.route=document.getElementById('v30Fleet100Route')?.value||''; x.status=document.getElementById('v30Fleet100AssignmentStatus')?.value||'PARKED'; x.airport=document.getElementById('v30Fleet100Airport')?.value||x.airport; x.pilot=document.getElementById('v30Fleet100Pilot')?.value||''; x.copilot=document.getElementById('v30Fleet100Copilot')?.value||''; x.purser=document.getElementById('v30Fleet100Purser')?.value||''; x.cabin=[...document.querySelectorAll('#v30Fleet100Cabin input:checked')].map(cb=>cb.value);
 localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30)); renderVirtualFleet100V30(); renderAssignedFleetOnMapV30();
 const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`✓ ${x.reg} salva: ${fleetStatusLabelV30(x.status)} em ${x.airport}${x.route?' • '+x.route:''}`;
}
function clearVirtualFleetAssignmentV30(){const id=document.getElementById('v30Fleet100Aircraft')?.value;const x=rdVirtualFleet100V30.find(y=>y.id===id);if(!x)return;stopVirtualFlightV30(x.id);x.route='';x.status='PARKED';x.airport=x.airport||'SDRS';x.pilot='';x.copilot='';x.purser='';x.cabin=[];localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));selectVirtualFleet100V30(x.id);renderVirtualFleet100V30();renderAssignedFleetOnMapV30();}

// V30.4 — cockpit-style virtual flight animation from gate to destination.
let rdVirtualMotionTimersV30={};
let rdVirtualMotionLayerV30=null;
let rdVirtualMotionStateV30=JSON.parse(localStorage.getItem('rdVirtualMotionStateV30')||'{}');
function ensureVirtualMotionLayerV30(){ if(typeof rdLiveMapV29==='undefined'||!rdLiveMapV29||typeof L==='undefined') return false; if(!rdVirtualMotionLayerV30) rdVirtualMotionLayerV30=L.layerGroup().addTo(rdLiveMapV29); return true; }
function routeObjForFleetV30(x){ if(!x?.route) return null; const f=(RD_MAP_V21||[]).find(r=>r.flight===x.route); return f||null; }
function positionForPhaseV30(f,progress){ const a=rdCoordV29(f.origin),b=rdCoordV29(f.dest); const t=Math.max(0,Math.min(1,progress)); return {lat:a[1]+(b[1]-a[1])*t,lon:a[2]+(b[2]-a[2])*t,a,b}; }
function phaseForElapsedV30(elapsed,total=180){ if(elapsed<15)return ['TAXI',elapsed/15]; if(elapsed<30)return ['TAKEOFF',(elapsed-15)/15]; if(elapsed<145)return ['CRUISE',(elapsed-30)/115]; if(elapsed<165)return ['DESCENT',(elapsed-145)/20]; if(elapsed<180)return ['LANDING',(elapsed-165)/15]; return ['ARRIVED',1]; }
function phaseLabelV30(p){ return ({GATE:'NO GATE',TAXI:'TÁXI / PUSHBACK',TAKEOFF:'DECOLAGEM',CRUISE:'EM ROTA',DESCENT:'DESCIDA',LANDING:'POUSO',ARRIVED:'NO DESTINO'})[p]||p; }
function crewNamesForFleetV30(x){const pilots=virtualFleetPilotsV30();const by=(arr,id)=>arr.find(p=>p.id===id)?.name||'Não atribuído';return {pilot:by(pilots,x.pilot),copilot:by(pilots,x.copilot),purser:by(RD_AI_CABIN_CREW_V30,x.purser),cabin:RD_AI_CABIN_CREW_V30.filter(p=>(x.cabin||[]).includes(p.id)).map(p=>p.name)};}
function renderFleetMotionMarkerV30(x,state){ if(!ensureVirtualMotionLayerV30())return; rdVirtualMotionLayerV30.getLayers().filter(m=>m.__fleetId===x.id).forEach(m=>rdVirtualMotionLayerV30.removeLayer(m)); const f=routeObjForFleetV30(x); if(!f)return; const pos=positionForPhaseV30(f,state.progress); const a=pos.a,b=pos.b; const bearing=Math.atan2((b[2]-a[2])*Math.cos((a[1]+b[1])*Math.PI/360),b[1]-a[1])*180/Math.PI; const icon=L.divIcon({className:'',html:`<div class="rd-aircraft-marker-v29 rd-virtual" style="transform:rotate(${bearing}deg)"><span class="plane">✈</span></div>`,iconSize:[28,28],iconAnchor:[14,14]}); const c=crewNamesForFleetV30(x); const m=L.marker([pos.lat,pos.lon],{icon,zIndexOffset:900}).bindPopup(`<div class="rd-flight-popup-v29"><b>🟡 ${x.reg} • ${x.model}</b><div class="route">${f.origin} → ${f.dest}</div><div><span class="v30-motion-chip">${phaseLabelV30(state.phase)}</span></div><div>⏱️ Progresso: ${Math.round(state.progress*100)}%</div><div>👨‍✈️ Piloto: ${c.pilot}</div><div>👨‍✈️ Copiloto: ${c.copilot}</div><div>🧑‍✈️ Chefe de cabine: ${c.purser}</div><div>🧑‍✈️ Comissários: ${c.cabin.length?c.cabin.join(', '):'Não atribuídos'}</div><small>Simulação RD AIRLINES • voo virtual</small></div>`); m.__fleetId=x.id; m.addTo(rdVirtualMotionLayerV30); }
function startSelectedVirtualFlightV30(){ const id=document.getElementById('v30Fleet100Aircraft')?.value; const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return; const f=routeObjForFleetV30(x); if(!f){alert('Selecione uma rota antes de iniciar o voo.');return;} if(!x.pilot||!x.copilot){alert('Selecione piloto e copiloto antes de iniciar o voo.');return;} stopVirtualFlightV30(x.id); x.status='ASSIGNED'; x.airport=f.origin; const st={start:Date.now(),elapsed:0,progress:0,phase:'TAXI'}; rdVirtualMotionStateV30[x.id]=st; localStorage.setItem('rdVirtualMotionStateV30',JSON.stringify(rdVirtualMotionStateV30)); localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30)); renderVirtualFleet100V30(); renderAssignedFleetOnMapV30(); tickVirtualFlightV30(x.id); const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`▶️ ${x.reg} saiu do gate de ${f.origin}. Acompanhe no mapa.`; }
function stopVirtualFlightV30(id){ if(rdVirtualMotionTimersV30[id]){clearInterval(rdVirtualMotionTimersV30[id]);delete rdVirtualMotionTimersV30[id];} delete rdVirtualMotionStateV30[id]; localStorage.setItem('rdVirtualMotionStateV30',JSON.stringify(rdVirtualMotionStateV30)); if(rdVirtualMotionLayerV30)rdVirtualMotionLayerV30.getLayers().filter(m=>m.__fleetId===id).forEach(m=>rdVirtualMotionLayerV30.removeLayer(m)); }
function resetSelectedVirtualFlightV30(){ const id=document.getElementById('v30Fleet100Aircraft')?.value; const x=rdVirtualFleet100V30.find(y=>y.id===id);if(!x)return;stopVirtualFlightV30(id);x.status='GATE';x.route=x.route||'';x.airport=(routeObjForFleetV30(x)?.origin)||x.airport||'SDRS';localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));renderVirtualFleet100V30();renderAssignedFleetOnMapV30();selectVirtualFleet100V30(id); }
function tickVirtualFlightV30(id){ const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return; const st=rdVirtualMotionStateV30[id]; const f=routeObjForFleetV30(x); if(!st||!f)return; const update=()=>{ const elapsed=Math.max(0,(Date.now()-st.start)/1000); st.elapsed=elapsed; const [phase,prog]=phaseForElapsedV30(elapsed,180); st.phase=phase;st.progress=prog; rdVirtualMotionStateV30[id]=st; localStorage.setItem('rdVirtualMotionStateV30',JSON.stringify(rdVirtualMotionStateV30)); const ph=document.getElementById('v30Fleet100Phase');if(document.getElementById('v30Fleet100Aircraft')?.value===id&&ph)ph.textContent=`${x.reg} • ${phaseLabelV30(phase)} • ${Math.round(prog*100)}%`; renderFleetMotionMarkerV30(x,st); if(phase==='ARRIVED'){clearInterval(rdVirtualMotionTimersV30[id]);delete rdVirtualMotionTimersV30[id];x.status='GATE';x.airport=f.dest;localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));renderVirtualFleet100V30();renderAssignedFleetOnMapV30();const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`🛬 ${x.reg} pousou em ${f.dest} e foi para o gate.`;} }; update(); rdVirtualMotionTimersV30[id]=setInterval(update,1000); }
function resumeVirtualFlightsV30(){ Object.entries(rdVirtualMotionStateV30).forEach(([id,st])=>{const x=rdVirtualFleet100V30.find(y=>y.id===id); if(x&&x.status==='ASSIGNED'){tickVirtualFlightV30(id);} }); }

function crewNamesForFleetV30(x){const pilots=virtualFleetPilotsV30();const by=(arr,id)=>arr.find(p=>p.id===id)?.name||'Não atribuído';return {pilot:by(pilots,x.pilot),copilot:by(pilots,x.copilot),purser:by(RD_AI_CABIN_CREW_V30,x.purser),cabin:RD_AI_CABIN_CREW_V30.filter(p=>(x.cabin||[]).includes(p.id)).map(p=>p.name)};}
function renderAssignedFleetOnMapV30(){
 if(typeof rdLiveMapV29==='undefined'||!rdLiveMapV29||typeof L==='undefined')return;
 if(!window.rdVirtualGroundLayerV30)window.rdVirtualGroundLayerV30=L.layerGroup().addTo(rdLiveMapV29);
 if(!rdVirtualMotionLayerV30)rdVirtualMotionLayerV30=L.layerGroup().addTo(rdLiveMapV29);
 window.rdVirtualGroundLayerV30.clearLayers();
 rdVirtualFleet100V30.filter(x=>x.status!=='ASSIGNED'&&x.airport&&RD_MAP_AIRPORTS_V21[x.airport]).forEach((x,i)=>{const d=RD_MAP_AIRPORTS_V21[x.airport];const ring=0.018+((i%5)*0.004);const ang=(i*137.5)*Math.PI/180;const lat=d[1]+Math.sin(ang)*ring;const lon=d[2]+Math.cos(ang)*ring;const icon=L.divIcon({className:'',html:`<div class="rd-aircraft-marker-v29 rd-virtual" title="${x.reg}"><span class="plane">✈</span></div>`,iconSize:[26,26],iconAnchor:[13,13]});const c=crewNamesForFleetV30(x);const f=routeObjForFleetV30(x);const m=L.marker([lat,lon],{icon,zIndexOffset:350}).bindPopup(`<div class="rd-flight-popup-v29"><b>🟡 ${x.reg} • ${x.model}</b><div>📍 ${x.airport} • ${fleetStatusLabelV30(x.status)}</div><div>🛫 Rota: ${f?f.origin+' → '+f.dest:'Não escalada'}</div><div>👨‍✈️ Piloto: ${c.pilot}</div><div>👨‍✈️ Copiloto: ${c.copilot}</div><div>🧑‍✈️ Chefe de cabine: ${c.purser}</div><div>🧑‍✈️ Comissários: ${c.cabin.length?c.cabin.join(', '):'Não atribuídos'}</div><small>Frota virtual RD AIRLINES • no solo</small></div>`);m.addTo(window.rdVirtualGroundLayerV30);});
 Object.entries(rdVirtualMotionStateV30).forEach(([id,st])=>{const x=rdVirtualFleet100V30.find(y=>y.id===id);if(x&&x.status==='ASSIGNED')renderFleetMotionMarkerV30(x,st);});
}

function renderSimulation(){const text=formatSimTime();['virtualDate','simulationClock'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=text;});const d=document.getElementById('simDate'),t=document.getElementById('simTime');if(d)d.value=rdSimTime.toISOString().slice(0,10);if(t)t.value=rdSimTime.toTimeString().slice(0,5);const a=rdAutonomous?'ATIVADA':'desligada';['autonomousStatus','simulationAutoStatus'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent='Status: '+a;});const ab=document.getElementById('autonomousBtn');if(ab)ab.textContent=rdAutonomous?'Desativar operação autônoma':'Ativar operação autônoma';const sb=document.getElementById('simulationAutoBtn');if(sb)sb.textContent=rdAutonomous?'Desativar voos sem jogar':'Ativar voos sem jogar';const cb=document.getElementById('copilotBtn');if(cb){cb.textContent=rdCopilot?'Desativar copiloto automático':'Ativar copiloto automático';document.getElementById('copilotStatus').textContent='Status: '+(rdCopilot?'ATIVADO':'desligado');}renderVirtualPilots();renderAutonomousFlights();}
function renderAutonomousFlights(){
 const el=document.getElementById('autonomousFlights');
 if(!el)return;
 const pilots=(Array.isArray(rdVirtualPilots)?rdVirtualPilots:[]).filter(Boolean);
 const active=pilots.length&&rdAutonomous;
 const routes=Array.isArray(rdFlightRoutes)?rdFlightRoutes:[];
 const flights=routes.slice(0,Math.min(6,Math.max(1,pilots.length))).map((r,i)=>{
   const p=pilots[i%pilots.length];
   if(!p||!r)return '';
   const name=p.name||p.callsign||'Piloto virtual';
   return `<div class="flight-row"><span><b>${r[0]??''}</b> — ${r[1]??''} → ${r[2]??''} • ${name}</span><span>${active?'EM OPERAÇÃO':'AGUARDANDO'} • ${r[3]??''} → ${r[4]??''}</span></div>`;
 }).join('');
 el.innerHTML=pilots.length&&flights?flights:'Contrate pelo menos um piloto virtual para liberar os voos autônomos.';
}
function runAutonomousTick(){if(!rdAutonomous||!rdVirtualPilots.length)return;rdVirtualPilots.forEach(p=>{p.flights+=1;p.hours+=Math.floor(Math.random()*5)+1;p.status='Em operação';});saveSim();}
document.addEventListener('DOMContentLoaded',()=>{renderSimulation();renderCrewAssignmentV30();initVirtualFleet100V30();setTimeout(()=>{resumeVirtualFlightsV30();renderAssignedFleetOnMapV30();},1200);});

const RDAircraftMarket = {
  factory: [
    {model:"A330-900neo", maker:"Airbus", price:296400000, stock:2},
    {model:"A350-900", maker:"Airbus", price:317400000, stock:3},
    {model:"A350-1000", maker:"Airbus", price:366500000, stock:2},
    {model:"A380-800", maker:"Airbus", price:445600000, stock:1},
    {model:"A321neo", maker:"Airbus", price:129500000, stock:8},
    {model:"A321XLR", maker:"Airbus", price:142600000, stock:5},
    {model:"A350-900", maker:"Airbus", price:317400000, stock:3},
    {model:"A350-1000", maker:"Airbus", price:366500000, stock:2},
    {model:"A320neo", maker:"Airbus", price:110600000, stock:10}
  ],
  lease: [
    {model:"A321neo", company:"RD Leasing", monthly:420000, term:"36 meses"},
    {model:"A321XLR", company:"Global Aircraft Leasing", monthly:510000, term:"48 meses"},
    {model:"A330neo", company:"Atlantic Lease", monthly:680000, term:"60 meses"},
    {model:"E195-E2", company:"Regional Lease", monthly:210000, term:"36 meses"}
  ],
  airportStock: [
    {model:"A320neo", registration:"PR-RD101", airport:"GRU", condition:"Pronto para operação"},
    {model:"A321ceo", registration:"PR-RD205", airport:"GIG", condition:"Revisão concluída"},
    {model:"A321neo", registration:"CS-RDP31", airport:"OPO", condition:"Pronto para operação"},
    {model:"ATR 72-600", registration:"CS-RDP72", airport:"OPO", condition:"Estacionado"}
  ]
};

const rdOwned = JSON.parse(localStorage.getItem("rdOwnedAircraft") || "[]");
function saveOwned(){localStorage.setItem("rdOwnedAircraft",JSON.stringify(rdOwned)); renderOwned();}
function buyFactory(i){
  const a=RDAircraftMarket.factory[i];
  rdOwned.push({...a, acquisition:"Compra de fábrica", id:"RD-"+Date.now()});
  saveOwned(); alert(a.model+" comprado para a frota virtual.");
}
function leaseAircraft(i){
  const a=RDAircraftMarket.lease[i];
  rdOwned.push({...a, acquisition:"Leasing", id:"LEASE-"+Date.now()});
  saveOwned(); alert(a.model+" contratado em leasing.");
}
function takeStock(i){
  const a=RDAircraftMarket.airportStock[i];
  rdOwned.push({...a, acquisition:"Estoque aeroportuário", id:a.registration});
  saveOwned(); alert(a.registration+" incorporada à frota virtual.");
}
function renderMarket(){
  const f=document.getElementById("factoryList"), l=document.getElementById("leaseList"), s=document.getElementById("stockList");
  if(f)f.innerHTML=RDAircraftMarket.factory.map((a,i)=>`<div class="aircraft-card"><span class="status-pill">🏭 FÁBRICA</span><h4>${a.model}</h4><div class="muted">${a.maker} • ${a.stock} unidades disponíveis</div><p>US$ ${a.price.toLocaleString("en-US")}</p><button onclick="buyFactory(${i})">Comprar</button></div>`).join("");
  if(l)l.innerHTML=RDAircraftMarket.lease.map((a,i)=>`<div class="aircraft-card"><span class="status-pill">📄 LEASING</span><h4>${a.model}</h4><div class="muted">${a.company} • ${a.term}</div><p>US$ ${a.monthly.toLocaleString("en-US")}/mês</p><button onclick="leaseAircraft(${i})">Alugar</button></div>`).join("");
  if(s)renderStorage();
  renderOwned();
}
function renderOwned(){
 const el=document.getElementById("ownedList"); if(!el)return;
 el.innerHTML=rdOwned.length?`<ul class="order-list">${rdOwned.map(a=>`<li><b>${a.model}</b> — ${a.acquisition}${a.registration?" — "+a.registration:""}</li>`).join("")}</ul>`:"Nenhuma aeronave adquirida nesta sessão.";
}
const rdFlightRoutes = [
["RD1001","GRU","OPO","06:00","09:30"],["RD1002","OPO","GRU","11:00","17:00"],
["RD1003","REC","GVAC","08:00","13:00"],["RD1004","SDRS","SBCT","07:30","09:00"],
["RD1005","GRU","KLAX","22:00","07:00+1"],["RD1006","GIG","KSFO","21:00","07:30+1"],
["RD1007","GRU","SPJC","09:30","14:30"],["RD1008","GRU","OEJN","23:00","17:00+1"],
["RD1009","REC","GOBD","10:00","16:00"],["RD1010","REC","DTTA","09:00","18:00"],
["RD1011","GRU","SOCA","12:00","17:30"],["RD1012","GRU","SBEG","08:00","12:00"],
["RD1013","SDRS","SBBR","06:30","08:00"],["RD1014","SDRS","SBSJ","10:00","11:00"],
["RD1015","SDRS","SBKP","14:00","15:00"],["RD1016","GIG","GRU","18:00","19:20"],
["RD1017","SDRS","GIG","16:00","17:00"],["RD1018","GRU","REC","20:00","23:00"],
["RD1019","GRU","CYVR","21:30","07:00+1"],
["RDP2001","OPO","HECA","07:00","13:00"],["RDP2002","OPO","LIS","10:00","11:00"],
["RDP2003","OPO","FAO","14:00","15:00"],["RDP2004","OPO","VGO","16:00","17:00"],
["RDP2005","OPO","LPVR","09:00","10:00"],["RDP2006","OPO","LPBJ","13:00","14:00"],
["RDP2007","OPO","EGLL","11:00","13:30"],["RDP2008","OPO","EDDP","15:00","18:00"],
["RDP2009","OPO","HAAB","22:00","06:30+1"],["RDP2010","OPO","LTFM","20:00","02:00+1"],
["RDP2011","OPO","CYVR","23:00","10:00+1"],["RDP2012","OPO","RJAA","13:00","10:00+1"],
["RDP2013","OPO","EDDB","17:00","20:30"],["RDP2014","OPO","REC","12:00","15:00+1"],
["RDP2015","OPO","SBBR","09:00","15:00"]
];
function generateRDFLights(){
 const el=document.getElementById("flightSchedule"); if(!el)return;
 el.innerHTML=rdFlightRoutes.map(r=>`<div class="flight-row"><span><b>${r[0]}</b> — ${r[1]} → ${r[2]}</span><span>${r[3]} → ${r[4]}</span></div>`).join("");
}
function generateConnections(){
 const el=document.getElementById("connectionSchedule"); if(!el)return;
 const conns=[["GRU","OPO","OPO","LIS"],["GRU","OPO","OPO","RJAA"],["GRU","REC","REC","GVAC"],["SDRS","GIG","GIG","GRU"],["OPO","REC","REC","GOBD"]];
 el.innerHTML=conns.map((c,i)=>`<div class="flight-row"><span><b>CONEXÃO ${i+1}</b></span><span>${c[0]} → ${c[1]} ✈ ${c[2]} → ${c[3]}</span></div>`).join("");
}
document.addEventListener("DOMContentLoaded",function(){renderMarket();});

// V10 — Pinturas e Notícias
const RD_LIVERIES=[
{id:"gold",name:"RD GOLD",cls:"livery-gold",desc:"Pintura premium preta e dourada da RD AIRLINES."},
{id:"black",name:"RD BLACK",cls:"livery-black",desc:"Pintura preta executiva com detalhes dourados."},
{id:"oneworld",name:"ONEWORLD SPECIAL",cls:"livery-oneworld",desc:"Edição especial oneworld — conceito virtual."},
{id:"portugal",name:"RD PORTUGAL",cls:"livery-portugal",desc:"Pintura da RD AIRLINES-PORTUGAL em preto e dourado."},
{id:"classic",name:"CLASSIC GOLD",cls:"livery-classic",desc:"Versão clássica com fuselagem clara e detalhes dourados."},
{id:"custom",name:"SPECIAL CUSTOM",cls:"livery-custom",desc:"Edição especial para aeronaves comemorativas."}
];
const RD_NEWS=[
{cat:"rd",date:"13 SET 2026",title:"RD AIRLINES amplia sua operação virtual",text:"A companhia reforça sua malha entre Brasil, Portugal e destinos internacionais no universo da simulação.",source:"RD AIRLINES • Universo virtual"},
{cat:"frota",date:"13 SET 2026",title:"Novo A350-1000 em pintura especial",text:"A frota virtual ganha mais um A350-1000 na edição especial preta e dourada com conceito oneworld.",source:"RD AIRLINES • Frota virtual"},
{cat:"aviacao",date:"12 SET 2026",title:"A350 continua em destaque nas operações de longo curso",text:"O modelo segue como uma das principais opções para rotas internacionais de alta capacidade e longo alcance.",source:"RD AIRLINES • Aviação"},
{cat:"simulacao",date:"12 SET 2026",title:"Mais opções para a frota do piloto",text:"A nova central permite selecionar pinturas, acompanhar aeronaves adquiridas e organizar a identidade visual da frota.",source:"RD AIRLINES • Simulação"},
{cat:"rd",date:"11 SET 2026",title:"RD AIRLINES-PORTUGAL mantém hub no Porto",text:"OPO permanece como hub da subsidiária para operações regionais e internacionais.",source:"RD AIRLINES-PORTUGAL • Universo virtual"},
{cat:"aviacao",date:"11 SET 2026",title:"Mercado virtual de aeronaves atualizado",text:"Compra de fábrica, leasing e estoque aeroportuário continuam disponíveis na área Aeronaves.",source:"RD AIRLINES • Mercado virtual"}
];
function renderLiveryAircrafts(){
 const sel=document.getElementById("liveryAircraft");if(!sel)return;
 const names=["A350-900","A350-1000","A320neo","A320-200","A330neo","A340-300","A340-600","A380-800","A321neo","A321XLR","E195-E2","ATR 72-600","Cessna 208 Caravan"];
 sel.innerHTML=names.map(x=>`<option value="${x}">${x}</option>`).join("");sel.onchange=renderLiveryCards;renderLiveryCards();
}
function getLiveryMap(){try{return JSON.parse(localStorage.getItem("rdLiveries")||"{}")}catch(e){return {}}}
function renderLiveryCards(){
 const grid=document.getElementById("liveryGrid"),sel=document.getElementById("liveryAircraft");if(!grid||!sel)return;
 const map=getLiveryMap(),current=map[sel.value]||"gold",cur=RD_LIVERIES.find(x=>x.id===current)||RD_LIVERIES[0];
 document.getElementById("currentLivery").textContent="Pintura atual: "+cur.name;
 document.getElementById("liveryStatus").textContent=`${sel.value} está com a pintura ${cur.name}.`;
 grid.innerHTML=RD_LIVERIES.map(l=>`<div class="card livery-card ${current===l.id?"selected-livery":""}"><div><div class="livery-preview ${l.cls}">RD AIRLINES</div><h3>${l.name}</h3><p>${l.desc}</p></div><button class="primary" data-id="${l.id}">${current===l.id?"✓ Selecionada":"Escolher pintura"}</button></div>`).join("");
 grid.querySelectorAll("button[data-id]").forEach(b=>b.onclick=function(){map[sel.value]=this.dataset.id;localStorage.setItem("rdLiveries",JSON.stringify(map));renderLiveryCards();});
}
function renderNews(filter="all"){
 const grid=document.getElementById("newsGrid");if(!grid)return;
 grid.innerHTML=RD_NEWS.filter(n=>filter==="all"||n.cat===filter).map(n=>`<article class="card news-card"><div class="news-date">${n.date}</div><h3>${n.title}</h3><p>${n.text}</p><div class="news-source">${n.source}</div></article>`).join("");
}
function filterNews(){renderNews(document.getElementById("newsFilter").value)}
document.addEventListener("DOMContentLoaded",()=>{renderLiveryAircrafts();renderNews();});

