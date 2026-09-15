
function show(id){
  document.querySelectorAll('main').forEach(x=>x.style.display='none');
  const target=document.getElementById(id);
  if(!target)return;
  target.style.display='block';
  scrollTo(0,0);
  if(id==='map'){
    setTimeout(()=>{
      if(typeof renderRDMapV21==='function') renderRDMapV21();
      if(typeof rdLiveMapV29!=='undefined' && rdLiveMapV29) rdLiveMapV29.invalidateSize(true);
    },120);
  }
}
document.addEventListener('DOMContentLoaded',()=>show('fleet'));
const seats=document.getElementById('seats'); for(let r=1;r<=8;r++) for(let c=0;c<6;c++){let s=document.createElement('div');s.className='seat';s.textContent=r+String.fromCharCode(65+c);s.onclick=()=>{document.querySelectorAll('.seat').forEach(x=>x.classList.remove('selected'));s.classList.add('selected');document.getElementById('seatinfo').textContent='Assento selecionado: '+s.textContent};seats.appendChild(s)}
function reserve(){alert('Reserva virtual criada! O próximo passo seria integrar o backend, inventário e pagamento/moeda.')}
function trade(c){alert('Compra virtual registrada: '+c+'. Nenhum dinheiro real foi movimentado.')} function applyJob(c){alert('Candidatura virtual enviada para '+c+'.')} function newPassenger(){alert('Novo passageiro Bot criado.')} function hire(t){alert('Cadastro de '+t+' iniciado. No backend, este botão poderá criar o profissional e colocá-lo na escala.')}
const ow=['Alaska Airlines','American Airlines','British Airways','Cathay Pacific','Finnair','Fiji Airways','Hawaiian Airlines','Iberia','Japan Airlines','Malaysia Airlines','Oman Air','Qantas','Qatar Airways','Royal Air Maroc','Royal Jordanian','SriLankan Airlines'];
const owg=document.getElementById('oneworldGrid'); if(owg) ow.forEach(a=>{const d=document.createElement('div');d.className='card tile';d.innerHTML='<h3>'+a+'</h3><span class="tag">ONEWORLD</span><p>Conexão virtual disponível para itinerários RD.</p>';owg.appendChild(d)});
function connectFlight(){const o=document.getElementById('connOrigin').value,p=document.getElementById('connPartner').value,d=document.getElementById('connDest').value||'Destino a definir';const box=document.getElementById('connectionsList');const el=document.createElement('div');el.className='card tile';el.innerHTML='<strong>'+o+'</strong> → <strong>'+p+'</strong> → <strong>'+d+'</strong><br><span class="tag">CONEXÃO VIRTUAL CRIADA</span>';box.prepend(el);alert('Conexão de voo criada com '+p+'.')}


const rdRoutesBR = [
  [
    'GRU',
    'OPO',
    'Guarulhos',
    'Porto'
  ],
  [
    'REC',
    'GVAC',
    'Recife',
    'Sal, Cabo Verde'
  ],
  [
    'SDRS',
    'SBCT',
    'Resende',
    'Curitiba'
  ],
  [
    'GRU',
    'KLAX',
    'Guarulhos',
    'Los Angeles'
  ],
  [
    'GIG',
    'KSFO',
    'Galeão',
    'San Francisco'
  ],
  [
    'GRU',
    'SPJC',
    'Guarulhos',
    'Lima'
  ],
  [
    'GRU',
    'OEJN',
    'Guarulhos',
    'Jeddah'
  ],
  [
    'GRU',
    'UUEE',
    'Guarulhos',
    'Moscow'
  ],
  [
    'REC',
    'GOBD',
    'Recife',
    'Senegal'
  ],
  [
    'REC',
    'DTTA',
    'Recife',
    'Tunis'
  ],
  [
    'GRU',
    'SOCA',
    'Guarulhos',
    'Cayenne'
  ],
  [
    'GRU',
    'SBEG',
    'Guarulhos',
    'Manaus'
  ],
  [
    'SDRS',
    'SBBR',
    'Resende',
    'Brasília'
  ],
  [
    'SDRS',
    'SBSJ',
    'Resende',
    'São José dos Campos'
  ],
  [
    'SDRS',
    'SBKP',
    'Resende',
    'Campinas'
  ],
  [
    'GIG',
    'GRU',
    'Galeão',
    'Guarulhos'
  ],
  [
    'SDRS',
    'GIG',
    'Resende',
    'Galeão'
  ],
  [
    'GRU',
    'REC',
    'Guarulhos',
    'Recife'
  ],
  [
    'GRU',
    'CYVR',
    'Guarulhos',
    'Vancouver'
  ],
  [
    'GRU',
    'USH',
    'Guarulhos',
    'Ushuaia'
  ],
  [
    'GRU',
    'KJFK',
    'Guarulhos',
    'New York JFK'
  ],
  [
    'OPO',
    'KSFO',
    'Porto',
    'San Francisco'
  ],
  [
    'GRU',
    'LSZH',
    'Guarulhos',
    'Zurich'
  ],
  [
    'GRU',
    'LSZH',
    'Guarulhos',
    'Zurich'
  ],
  [
    'GRU',
    'LSZH',
    'Guarulhos',
    'Zurich'
  ]
];
const rdRoutesPT = [
  [
    'OPO',
    'HECA',
    'Porto',
    'Cairo'
  ],
  [
    'OPO',
    'LIS',
    'Porto',
    'Lisboa'
  ],
  [
    'OPO',
    'FAO',
    'Porto',
    'Faro'
  ],
  [
    'OPO',
    'VGO',
    'Porto',
    'Vigo'
  ],
  [
    'OPO',
    'CBW',
    'Porto',
    'Castelo Branco'
  ],
  [
    'OPO',
    'HAAB',
    'Porto',
    'Adis Abeba'
  ],
  [
    'OPO',
    'LTFM',
    'Porto',
    'Istambul'
  ],
  [
    'OPO',
    'CYVR',
    'Porto',
    'Vancouver'
  ],
  [
    'OPO',
    'KSFO',
    'Porto',
    'San Francisco'
  ],
  [
    'OPO',
    'RJAA',
    'Porto',
    'Tokyo Narita'
  ],
  [
    'OPO',
    'EDDB',
    'Porto',
    'Berlin'
  ],
  [
    'OPO',
    'REC',
    'Porto',
    'Recife'
  ],
  [
    'OPO',
    'SBBR',
    'Porto',
    'Brasília'
  ],
  [
    'OPO',
    'FNBJ',
    'Porto',
    'Luanda'
  ],
  [
    'OPO',
    'FQMA',
    'Porto',
    'Maputo'
  ],
  [
    'OPO',
    'GVAC',
    'Porto',
    'Espargos / Sal'
  ],
  [
    'OPO',
    'SCEL',
    'Porto',
    'Santiago'
  ],
  [
    'OPO',
    'LEMD',
    'Porto',
    'Madrid'
  ]
];
const RD_REGIONAL_ROUTES_PT_V30 = [
  ['OPO','LPCS','Porto','Cascais','ATR 72-600'],['LPCS','OPO','Cascais','Porto','ATR 72-600'],
  ['OPO','LPBG','Porto','Bragança','ATR 72-600'],['LPBG','OPO','Bragança','Porto','ATR 72-600'],
  ['OPO','LPCB','Porto','Castelo Branco','Cessna 208 Caravan'],['LPCB','OPO','Castelo Branco','Porto','Cessna 208 Caravan'],
  ['OPO','LPCH','Porto','Chaves','Cessna 208 Caravan'],['LPCH','OPO','Chaves','Porto','Cessna 208 Caravan'],
  ['OPO','LPCO','Porto','Coimbra','Cessna 208 Caravan'],['LPCO','OPO','Coimbra','Porto','Cessna 208 Caravan'],
  ['OPO','LPEV','Porto','Évora','ATR 72-600'],['LPEV','OPO','Évora','Porto','ATR 72-600'],
  ['OPO','LPSO','Porto','Ponte de Sor','Cessna 208 Caravan'],['LPSO','OPO','Ponte de Sor','Porto','Cessna 208 Caravan'],
  ['OPO','LPPM','Porto','Portimão','ATR 72-600'],['LPPM','OPO','Portimão','Porto','ATR 72-600'],
  ['OPO','LPVR','Porto','Vila Real','ATR 72-600'],['LPVR','OPO','Vila Real','Porto','ATR 72-600'],
  ['OPO','LPVZ','Porto','Viseu','ATR 72-600'],['LPVZ','OPO','Viseu','Porto','ATR 72-600'],
  ['PDL','LPCR','Ponta Delgada','Corvo','Cessna 208 Caravan'],['LPCR','PDL','Corvo','Ponta Delgada','Cessna 208 Caravan'],
  ['PDL','LPGR','Ponta Delgada','Graciosa','Cessna 208 Caravan'],['LPGR','PDL','Graciosa','Ponta Delgada','Cessna 208 Caravan'],
  ['PDL','LPPI','Ponta Delgada','Pico','ATR 72-600'],['LPPI','PDL','Pico','Ponta Delgada','ATR 72-600'],
  ['PDL','LPSJ','Ponta Delgada','São Jorge','Cessna 208 Caravan'],['LPSJ','PDL','São Jorge','Ponta Delgada','Cessna 208 Caravan'],
  ['FNC','LPPS','Madeira','Porto Santo','ATR 72-600'],['LPPS','FNC','Porto Santo','Madeira','ATR 72-600']
];
rdRoutesPT.push(...RD_REGIONAL_ROUTES_PT_V30);

function renderRDRouteTable(){
 const row=r=>`<tr><td class="route-code">${r[0]}</td><td>${r[2]}</td><td class="route-code">${r[1]}</td><td>${r[3]}</td><td><span class="route-badge">RD AIRLINES</span></td></tr>`;
 const br=document.getElementById('rdRoutesBR'),pt=document.getElementById('rdRoutesPT');
 if(br)br.innerHTML=rdRoutesBR.map(row).join('');
 if(pt)pt.innerHTML=rdRoutesPT.map(r=>`<tr><td class="route-code">${r[0]}</td><td>${r[2]}</td><td class="route-code">${r[1]}</td><td>${r[3]}</td><td><span class="route-badge">RD AIRLINES-PORTUGAL${r[4]?' • '+r[4]:''}</span></td></tr>`).join('');
}
function filterRDRoutes(inputId,tableId){
 const q=(document.getElementById(inputId).value||'').toLowerCase();
 document.querySelectorAll('#'+tableId+' tr').forEach((tr,i)=>{if(i===0)return;tr.style.display=tr.textContent.toLowerCase().includes(q)?'':'none';});
}
document.addEventListener('DOMContentLoaded',renderRDRouteTable);


window.RDA350Special = { model:"A350-1000", quantity:1, livery:"oneworld Special Livery", registration:"PR-RDOW1" };
window.RDA321Fleet = {
  brasil: { A321neo: 17, A321ceo: 5, A321XLR: 18 },
  portugal: { A321neo: 19, A321XLR: 20 }
};


window.RDExtraRoutesBR=[('GRU', 'SCIP', 'Guarulhos', 'Mataveri (Ilha de Páscoa)'), ('GRU', 'KSEA', 'Guarulhos', 'Seattle'), ('KSEA', 'RJAA', 'Seattle', 'Tokyo Narita'), ('SDRS', 'SBNF', 'Resende', 'Navegantes'), ('SDRS', 'SBPA', 'Resende', 'Porto Alegre'), ('SBRJ', 'SBSP', 'Santos Dumont', 'Congonhas'), ('SDRS', 'GRU', 'Resende', 'Guarulhos'), ('SDRS', 'SDCO', 'Resende', 'Sorocaba')];
window.RDExtraRoutesPT=[('OPO', 'LPVR', 'Porto', 'Vila Real'), ('OPO', 'LPBJ', 'Porto', 'Beja'), ('OPO', 'EGLL', 'Porto', 'Londres Heathrow'), ('OPO', 'EDDP', 'Porto', 'Leipzig/Halle'), ...RD_REGIONAL_ROUTES_PT_V30.map(r=>[r[0],r[1],r[2],r[3]])];
document.addEventListener('DOMContentLoaded',function(){
  function addRows(id,data,label){
    const t=document.getElementById(id);
    if(!t) return;
    data.forEach(r=>{const tr=document.createElement('tr');tr.innerHTML='<td class="route-code">'+r[0]+'</td><td>'+r[2]+'</td><td class="route-code">'+r[1]+'</td><td>'+r[3]+'</td><td><span class="route-badge">'+label+'</span></td>';t.appendChild(tr);});
  }
  addRows('rdRoutesBR',window.RDExtraRoutesBR,'RD AIRLINES');
  addRows('rdRoutesPT',window.RDExtraRoutesPT,'RD AIRLINES-PORTUGAL');
});


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
function renderCrewAssignmentV30(){const el=document.getElementById('crewAssignmentV30'),sel=document.getElementById('autoAircraftCountV30'),status=document.getElementById('autoAircraftStatusV30');if(sel){sel.innerHTML=Array.from({length:20},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join('');sel.value=String(Math.min(20,Math.max(1,rdAutoAircraftCount)));} if(status)status.textContent=`${rdAutoAircraftCount} aeronave(s) no modo automático`;if(!el)return;const routes=(RD_MAP_V21||[]).filter(x=>x.status==='Em voo'&&!x.demo).slice(0,Math.max(1,rdAutoAircraftCount));const pilots=getHiredPilotsV30();if(!routes.length){el.innerHTML='<div class="muted">Nenhum voo virtual elegível encontrado.</div>';return;}el.innerHTML=routes.map(f=>{const a=normalizeCrewAssignmentV30(f.flight);return `<div class="card tile" style="margin-top:10px"><h4>✈️ ${f.flight} — ${f.origin} → ${f.dest}</h4><div class="controls" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px"><label>Piloto<select data-role="pilot"><option value="">Selecionar</option>${pilots.map(p=>`<option value="${p.id}" ${a.pilot===p.id?'selected':''}>${p.name} — ${p.role}</option>`).join('')}</select></label><label>Copiloto<select data-role="copilot"><option value="">Selecionar</option>${pilots.map(p=>`<option value="${p.id}" ${a.copilot===p.id?'selected':''}>${p.name} — ${p.role}</option>`).join('')}</select></label><label>Chefe de cabine<select data-role="purser"><option value="">Selecionar</option>${RD_AI_CABIN_CREW_V30.filter(p=>p.role==='Chefe de cabine').map(p=>`<option value="${p.id}" ${a.purser===p.id?'selected':''}>${p.name}</option>`).join('')}</select></label></div><div style="margin-top:8px"><b>Comissários</b><div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:5px">${RD_AI_CABIN_CREW_V30.filter(p=>p.role==='Comissária').map(p=>`<label style="font-size:12px"><input type="checkbox" data-role="cabin" value="${p.id}" ${a.cabin.includes(p.id)?'checked':''}> ${p.name}</label>`).join('')}</div></div><button class="primary" style="margin-top:10px" onclick="saveCrewForFlightV30('${f.flight}')">💾 Salvar escala</button><button style="margin-top:10px" onclick="openSimBriefForRDFlight('${f.flight}')">🛫 Enviar rota ao piloto via SimBrief</button></div>`;}).join('');}
function autoAssignCrewV30(){const routes=(RD_MAP_V21||[]).filter(x=>x.status==='Em voo'&&!x.demo).slice(0,Math.max(1,rdAutoAircraftCount));const pilots=getHiredPilotsV30();routes.forEach((f,i)=>{const p=pilots[i%pilots.length],co=pilots[(i+1)%pilots.length];const leads=RD_AI_CABIN_CREW_V30.filter(x=>x.role==='Chefe de cabine'),cab=RD_AI_CABIN_CREW_V30.filter(x=>x.role==='Comissária');rdCrewAssignments[f.flight]={pilot:p?.id||'',copilot:co?.id||'',purser:leads[i%leads.length]?.id||'',cabin:[cab[(i*2)%cab.length]?.id||'',cab[(i*2+1)%cab.length]?.id||''].filter(Boolean)};});crewPersistV30();renderCrewAssignmentV30();}
function showCrewAssignmentV30(){renderCrewAssignmentV30();document.getElementById('crewAssignmentV30')?.scrollIntoView({behavior:'smooth',block:'start'});}
function getCrewDisplayV30(flight){const a=rdCrewAssignments[flight]||{};const pilots=getHiredPilotsV30();const by=(arr,id)=>arr.find(x=>x.id===id)?.name||'Não atribuído';const cabin=RD_AI_CABIN_CREW_V30.filter(x=>(a.cabin||[]).includes(x.id)).map(x=>x.name);return {pilot:by(pilots,a.pilot),copilot:by(pilots,a.copilot),purser:by(RD_AI_CABIN_CREW_V30,a.purser),cabin:cabin.length?cabin:['Não atribuído']};}


// V30.6 — Frota virtual inicial com RD AIRLINES + RD AIRLINES-PORTUGAL; RDP distribuída por quantidade oficial no hangar de OPO.
const RD_VIRTUAL_FLEET_MODELS_V30=[
 ['A350-900','RD',12],['A320-200','RD',18],['A320neo','RD',18],['A350-1000','RD',3],['Cessna 208 Caravan','RD',10],['ATR 72-600','RD',8],['E195-E2','RD',8],['A330neo','RD',6],['A340-300','RD',4],['A340-600','RD',2],['A380-800','RD',1],['A321neo','RD',4],['A321ceo','RD',1],['A321XLR','RD',1],
 ['A330-200','RDP',10],['A330neo','RDP',30],['A350-900','RDP',3],['Cessna 208 Caravan','RDP',40],['ATR 72-600','RDP',30],['A320neo','RDP',100],['E195-E2','RDP',20],['A321neo','RDP',19],['A321XLR','RDP',20],['A340-300','RDP',2]
];
// Quantidade pendente: A340-300 da RD AIRLINES-PORTUGAL não é criada até definição oficial.
const RD_VIRTUAL_FLEET_AIRPORTS_V30=['SDRS','GRU','GIG','SDU','REC','OPO'];
function hangarAirportForModelV30(model, airline, requested){
 const m=String(model||'').toUpperCase();
 const isRdp=airline==='RDP';
 const resendeEligible=m.includes('ATR') || m.includes('CESSNA 208') || m.includes('CARAVAN');
 if(isRdp) return 'OPO';
 if(requested==='SDRS' && !resendeEligible) return 'GRU';
 if(!requested) return resendeEligible ? 'SDRS' : 'GRU';
 if(requested==='OPO') return 'GRU';
 return RD_VIRTUAL_FLEET_AIRPORTS_V30.includes(requested) ? requested : (resendeEligible ? 'SDRS' : 'GRU');
}
let rdVirtualFleet100V30=JSON.parse(localStorage.getItem('rdVirtualFleet100V30')||'null');
function createVirtualAircraftRecordV30(n, model, airline){
 const isRdp=airline==='RDP';
 const reg=isRdp?`CS-RDP${String(n).padStart(3,'0')}`:`PR-RD${String(n).padStart(3,'0')}`;
 const airport=hangarAirportForModelV30(model,airline,isRdp?'OPO':undefined);
 return {id:`VF${String(n).padStart(3,'0')}`,reg,model,airline,airport,status:'PARKED',route:'',pilot:'',copilot:'',purser:'',cabin:[]};
}
function buildVirtualFleet100V30(){
 if(!Array.isArray(rdVirtualFleet100V30)) rdVirtualFleet100V30=[];
 rdVirtualFleet100V30=rdVirtualFleet100V30.filter(Boolean).filter(x=>x&&x.id);
 rdVirtualFleet100V30=rdVirtualFleet100V30.map((x,i)=>({...x,airport:hangarAirportForModelV30(x.model,x.airline,x.airport||RD_VIRTUAL_FLEET_AIRPORTS_V30[i%RD_VIRTUAL_FLEET_AIRPORTS_V30.length])}));
 let nextId=rdVirtualFleet100V30.reduce((m,x)=>{const n=Number(String(x.id||'').replace('VF',''));return Math.max(m,Number.isFinite(n)?n:0)},0)+1;
 // Frota base RD: mantém pelo menos 20 aeronaves virtuais.
 const rdCount=rdVirtualFleet100V30.filter(x=>x.airline==='RD').length;
 while(rdVirtualFleet100V30.filter(x=>x.airline==='RD').length<20){
   const pool=RD_VIRTUAL_FLEET_MODELS_V30.filter(e=>e[1]==='RD');
   const entry=pool[(rdVirtualFleet100V30.filter(x=>x.airline==='RD').length)%pool.length];
   rdVirtualFleet100V30.push(createVirtualAircraftRecordV30(nextId++,entry[0],entry[1]));
 }
 // RD AIRLINES-PORTUGAL: materializa as quantidades do quadro de frota no HANGAR de OPO.
 // A340-300 da RD AIRLINES-PORTUGAL: 2 aeronaves no hangar de OPO.
 const rdpTarget=new Map(RD_VIRTUAL_FLEET_MODELS_V30.filter(e=>e[1]==='RDP').map(e=>[e[0],e[2]]));
 for(const [model,target] of rdpTarget){
   const current=rdVirtualFleet100V30.filter(x=>x.airline==='RDP' && x.model===model).length;
   for(let i=current;i<target;i++) rdVirtualFleet100V30.push(createVirtualAircraftRecordV30(nextId++,model,'RDP'));
 }
 rdVirtualFleet100V30=rdVirtualFleet100V30.map(x=>x.airline==='RDP'?{...x,airport:'OPO',status:(x.status||'PARKED')}:x);
 // Uma migração única: garante que todas as aeronaves RDP recém-criadas começam estacionadas em OPO.
 if(localStorage.getItem('rdPortugalHangarV31')!=='1'){
   rdVirtualFleet100V30=rdVirtualFleet100V30.map(x=>x.airline==='RDP'?{...x,airport:'OPO',status:'PARKED',route:'',pilot:'',copilot:'',purser:'',cabin:[]}:x);
   try{localStorage.setItem('rdPortugalHangarV31','1')}catch(e){}
 }
 // Política de compatibilidade: aeronaves novas e já existentes em SDRS obedecem ao porte do aeroporto.
 rdVirtualFleet100V30=rdVirtualFleet100V30.map((x,i)=>({...x,airport:hangarAirportForModelV30(x.model,x.airline,x.airport||RD_VIRTUAL_FLEET_AIRPORTS_V30[i%RD_VIRTUAL_FLEET_AIRPORTS_V30.length])}));
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
 populateVirtualFleetFormV30(rdVirtualFleet100V30[0]?.id);
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
function populateVirtualFleetFormV30(selectedId){
 buildVirtualFleet100V30();
 const aircraft=document.getElementById('v30Fleet100Aircraft');
 const route=document.getElementById('v30Fleet100Route');
 const airport=document.getElementById('v30Fleet100Airport');
 const pilot=document.getElementById('v30Fleet100Pilot');
 const copilot=document.getElementById('v30Fleet100Copilot');
 const purser=document.getElementById('v30Fleet100Purser');
 const cabin=document.getElementById('v30Fleet100Cabin');
 if(aircraft){
   const current=selectedId||aircraft.value;
   aircraft.innerHTML=rdVirtualFleet100V30.map(x=>`<option value="${x.id}">${x.reg} • ${x.model} • ${x.airline==='RDP'?'RD AIRLINES-PORTUGAL':'RD AIRLINES'}</option>`).join('');
   if(current && rdVirtualFleet100V30.some(x=>x.id===current)) aircraft.value=current;
 }
 if(route){
   const current=route.value;
   route.innerHTML='<option value="">Selecionar rota</option>'+ (typeof RD_MAP_V21!=='undefined'?RD_MAP_V21.filter(x=>!x.demo).map(r=>`<option value="${r.flight}">${fleetRouteLabelV30(r)}</option>`).join(''):'');
   if(current) route.value=current;
 }
 if(airport){
   airport.innerHTML=RD_VIRTUAL_FLEET_AIRPORTS_V30.map(a=>`<option value="${a}">${a} — ${RD_MAP_AIRPORTS_V21[a]?.[0]||a}</option>`).join('');
 }
 const pilots=virtualFleetPilotsV30();
 const opts='<option value="">Selecionar</option>'+pilots.map(p=>`<option value="${p.id}">${p.name} — ${p.role}</option>`).join('');
 if(pilot)pilot.innerHTML=opts;
 if(copilot)copilot.innerHTML=opts;
 const leads=virtualFleetCabinV30().filter(p=>p.role==='Chefe de cabine');
 if(purser)purser.innerHTML='<option value="">Selecionar</option>'+leads.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
 if(cabin)cabin.innerHTML=virtualFleetCabinV30().filter(p=>p.role==='Comissária').map(p=>`<label style="font-size:11px"><input type="checkbox" value="${p.id}"> ${p.name}</label>`).join('');
}
function selectVirtualFleet100V30(id){
 const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return;
 populateVirtualFleetFormV30(x.id);
 const set=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v==null?'':String(v);};
 set('v30Fleet100Aircraft',x.id);
 set('v30Fleet100Route',x.route);
 set('v30Fleet100AssignmentStatus',x.status);
 set('v30Fleet100Airport',x.airport);
 set('v30Fleet100Pilot',x.pilot);
 set('v30Fleet100Copilot',x.copilot);
 set('v30Fleet100Purser',x.purser);
 document.querySelectorAll('#v30Fleet100Cabin input[type="checkbox"]').forEach(cb=>cb.checked=(x.cabin||[]).includes(cb.value));
 const msg=document.getElementById('v30Fleet100Msg');
 if(msg)msg.textContent=`✅ Selecionada: ${x.reg} • ${x.model} • ${fleetStatusLabelV30(x.status)} • ${x.airport}`;
}
function saveVirtualFleetAssignmentV30(){
 const id=document.getElementById('v30Fleet100Aircraft')?.value; const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return;
 x.route=document.getElementById('v30Fleet100Route')?.value||''; x.status=document.getElementById('v30Fleet100AssignmentStatus')?.value||'PARKED'; x.airport=hangarAirportForModelV30(x.model,x.airline,document.getElementById('v30Fleet100Airport')?.value||x.airport); x.pilot=document.getElementById('v30Fleet100Pilot')?.value||''; x.copilot=document.getElementById('v30Fleet100Copilot')?.value||''; x.purser=document.getElementById('v30Fleet100Purser')?.value||''; x.cabin=[...document.querySelectorAll('#v30Fleet100Cabin input:checked')].map(cb=>cb.value);
 localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30)); renderVirtualFleet100V30(); renderAssignedFleetOnMapV30();
 const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`✓ ${x.reg} salva: ${fleetStatusLabelV30(x.status)} em ${x.airport}${x.route?' • '+x.route:''}`;
}
function clearVirtualFleetAssignmentV30(){const id=document.getElementById('v30Fleet100Aircraft')?.value;const x=rdVirtualFleet100V30.find(y=>y.id===id);if(!x)return;stopVirtualFlightV30(x.id);x.route='';x.status='PARKED';x.airport=hangarAirportForModelV30(x.model,x.airline,x.airport||'SDRS');x.pilot='';x.copilot='';x.purser='';x.cabin=[];localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));selectVirtualFleet100V30(x.id);renderVirtualFleet100V30();renderAssignedFleetOnMapV30();}

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
function renderFleetMotionMarkerV30(x,state){ if(!ensureVirtualMotionLayerV30())return; rdVirtualMotionLayerV30.getLayers().filter(m=>m.__fleetId===x.id).forEach(m=>rdVirtualMotionLayerV30.removeLayer(m)); const f=routeObjForFleetV30(x); if(!f)return; const pos=positionForPhaseV30(f,state.progress); const a=pos.a,b=pos.b; const bearing=Math.atan2((b[2]-a[2])*Math.cos((a[1]+b[1])*Math.PI/360),b[1]-a[1])*180/Math.PI; const icon=L.divIcon({className:'',html:`<div class="rd-aircraft-marker-v29 rd-virtual" style="transform:rotate(${bearing}deg)"><span class="plane">✈</span></div>`,iconSize:[28,28],iconAnchor:[14,14]}); const c=crewNamesForFleetV30(x); const m=L.marker([pos.lat,pos.lon],{icon,zIndexOffset:900}); setAircraftDetailPopupV30(m,detailHtmlForVirtualV30(x,state)); m.__fleetId=x.id; m.addTo(rdVirtualMotionLayerV30); }
function startSelectedVirtualFlightV30(){ const id=document.getElementById('v30Fleet100Aircraft')?.value; const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return; const f=routeObjForFleetV30(x); if(!f){alert('Selecione uma rota antes de iniciar o voo.');return;} if(!x.pilot||!x.copilot){alert('Selecione piloto e copiloto antes de iniciar o voo.');return;} stopVirtualFlightV30(x.id); x.status='ASSIGNED'; x.airport=f.origin; const st={start:Date.now(),elapsed:0,progress:0,phase:'TAXI'}; rdVirtualMotionStateV30[x.id]=st; localStorage.setItem('rdVirtualMotionStateV30',JSON.stringify(rdVirtualMotionStateV30)); localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30)); renderVirtualFleet100V30(); renderAssignedFleetOnMapV30(); tickVirtualFlightV30(x.id); const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`▶️ ${x.reg} saiu do gate de ${f.origin}. Acompanhe no mapa.`; }
function stopVirtualFlightV30(id){ if(rdVirtualMotionTimersV30[id]){clearInterval(rdVirtualMotionTimersV30[id]);delete rdVirtualMotionTimersV30[id];} delete rdVirtualMotionStateV30[id]; localStorage.setItem('rdVirtualMotionStateV30',JSON.stringify(rdVirtualMotionStateV30)); if(rdVirtualMotionLayerV30)rdVirtualMotionLayerV30.getLayers().filter(m=>m.__fleetId===id).forEach(m=>rdVirtualMotionLayerV30.removeLayer(m)); }
function resetSelectedVirtualFlightV30(){ const id=document.getElementById('v30Fleet100Aircraft')?.value; const x=rdVirtualFleet100V30.find(y=>y.id===id);if(!x)return;stopVirtualFlightV30(id);x.status='GATE';x.route=x.route||'';x.airport=(routeObjForFleetV30(x)?.origin)||x.airport||'SDRS';localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));renderVirtualFleet100V30();renderAssignedFleetOnMapV30();selectVirtualFleet100V30(id); }
function tickVirtualFlightV30(id){ const x=rdVirtualFleet100V30.find(y=>y.id===id); if(!x)return; const st=rdVirtualMotionStateV30[id]; const f=routeObjForFleetV30(x); if(!st||!f)return; const update=()=>{ const elapsed=Math.max(0,(Date.now()-st.start)/1000); st.elapsed=elapsed; const [phase,prog]=phaseForElapsedV30(elapsed,180); st.phase=phase;st.progress=prog; rdVirtualMotionStateV30[id]=st; localStorage.setItem('rdVirtualMotionStateV30',JSON.stringify(rdVirtualMotionStateV30)); const ph=document.getElementById('v30Fleet100Phase');if(document.getElementById('v30Fleet100Aircraft')?.value===id&&ph)ph.textContent=`${x.reg} • ${phaseLabelV30(phase)} • ${Math.round(prog*100)}%`; renderFleetMotionMarkerV30(x,st); if(phase==='ARRIVED'){clearInterval(rdVirtualMotionTimersV30[id]);delete rdVirtualMotionTimersV30[id];x.status='GATE';x.airport=f.dest;localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));renderVirtualFleet100V30();renderAssignedFleetOnMapV30();const msg=document.getElementById('v30Fleet100Msg');if(msg)msg.textContent=`🛬 ${x.reg} pousou em ${f.dest} e foi para o gate.`;} }; update(); rdVirtualMotionTimersV30[id]=setInterval(update,1000); }
function resumeVirtualFlightsV30(){ Object.entries(rdVirtualMotionStateV30).forEach(([id,st])=>{const x=rdVirtualFleet100V30.find(y=>y.id===id); if(x&&x.status==='ASSIGNED'){tickVirtualFlightV30(id);} }); }

function renderAssignedFleetOnMapV30(){
 if(typeof rdLiveMapV29==='undefined'||!rdLiveMapV29||typeof L==='undefined')return;
 if(!window.rdVirtualGroundLayerV30)window.rdVirtualGroundLayerV30=L.layerGroup().addTo(rdLiveMapV29);
 if(!rdVirtualMotionLayerV30)rdVirtualMotionLayerV30=L.layerGroup().addTo(rdLiveMapV29);
 window.rdVirtualGroundLayerV30.clearLayers();
 // Apenas aeronaves em GATE aparecem como posição de solo no mapa. As PARKED permanecem ocultas no hangar.
 rdVirtualFleet100V30.filter(x=>x.status==='GATE'&&x.airport&&RD_MAP_AIRPORTS_V21[x.airport]).forEach((x,i)=>{const d=RD_MAP_AIRPORTS_V21[x.airport];const ring=0.018+((i%5)*0.004);const ang=(i*137.5)*Math.PI/180;const lat=d[1]+Math.sin(ang)*ring;const lon=d[2]+Math.cos(ang)*ring;const icon=L.divIcon({className:'',html:`<div class="rd-aircraft-marker-v29 rd-virtual" title="${x.reg}"><span class="plane">✈</span></div>`,iconSize:[26,26],iconAnchor:[13,13]});const m=L.marker([lat,lon],{icon,zIndexOffset:350});setAircraftDetailPopupV30(m,detailHtmlForVirtualV30(x,null));m.addTo(window.rdVirtualGroundLayerV30);});
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
  rdOwned.push({...a, acquisition:"Compra de fábrica", id:"RD-"+Date.now(), status:"OPERACIONAL"});
  saveOwned(); alert(a.model+" comprado para a frota virtual.");
}
function leaseAircraft(i){
  const a=RDAircraftMarket.lease[i];
  rdOwned.push({...a, acquisition:"Leasing", id:"LEASE-"+Date.now(), status:"OPERACIONAL"});
  saveOwned(); alert(a.model+" contratado em leasing.");
}
function takeStock(i){
  const a=RDAircraftMarket.airportStock[i];
  rdOwned.push({...a, acquisition:"Estoque aeroportuário", id:a.registration, status:"OPERACIONAL"});
  saveOwned(); alert(a.registration+" incorporada à frota virtual.");
}
function renderMarket(){
  const f=document.getElementById("factoryList"), l=document.getElementById("leaseList"), s=document.getElementById("stockList");
  if(f)f.innerHTML=RDAircraftMarket.factory.map((a,i)=>`<div class="aircraft-card"><span class="status-pill">🏭 FÁBRICA</span><h4>${a.model}</h4><div class="muted">${a.maker} • ${a.stock} unidades disponíveis</div><p>US$ ${a.price.toLocaleString("en-US")}</p><button onclick="buyFactory(${i})">Comprar</button></div>`).join("");
  if(l)l.innerHTML=RDAircraftMarket.lease.map((a,i)=>`<div class="aircraft-card"><span class="status-pill">📄 LEASING</span><h4>${a.model}</h4><div class="muted">${a.company} • ${a.term}</div><p>US$ ${a.monthly.toLocaleString("en-US")}/mês</p><button onclick="leaseAircraft(${i})">Alugar</button></div>`).join("");
  if(s)renderStorage();
  renderOwned();
}
function fleetOwnedStatusLabelV30(a){return a.status==='ESTOCADA'?'📦 ESTOCADA':a.status==='MANUTENÇÃO'?'🔧 MANUTENÇÃO':'🟢 OPERACIONAL';}
function stockOwnedAircraftV30(id){const a=rdOwned.find(x=>x.id===id);if(!a)return;a.status='ESTOCADA';a.storageLocation=a.storageLocation||'Estoque Mundial';saveOwned();}
function sendOwnedToMaintenanceV30(id){const a=rdOwned.find(x=>x.id===id);if(!a)return;a.status='MANUTENÇÃO';a.maintenanceAt=new Date().toISOString();saveOwned();}
function dismantleOwnedAircraftV30(id){const i=rdOwned.findIndex(x=>x.id===id);if(i<0)return;const a=rdOwned[i];if(!confirm(`Desmontar ${a.model}${a.registration?' — '+a.registration:''}? Esta ação remove a aeronave da frota virtual.`))return;const hist=JSON.parse(localStorage.getItem('rdDismantledAircraftV30')||'[]');hist.unshift({...a,status:'DESMONTADA',dismantledAt:new Date().toISOString()});localStorage.setItem('rdDismantledAircraftV30',JSON.stringify(hist.slice(0,200)));rdOwned.splice(i,1);saveOwned();}
function returnOwnedToOperationV30(id){const a=rdOwned.find(x=>x.id===id);if(!a)return;a.status='OPERACIONAL';delete a.maintenanceAt;delete a.storageLocation;saveOwned();}
function renderOwned(){
 const el=document.getElementById("ownedList"); if(!el)return;
 if(!rdOwned.length){el.innerHTML="Nenhuma aeronave adquirida nesta sessão.";return;}
 const summary={operacional:rdOwned.filter(a=>(a.status||'OPERACIONAL')==='OPERACIONAL').length,estoque:rdOwned.filter(a=>a.status==='ESTOCADA').length,manut:rdOwned.filter(a=>a.status==='MANUTENÇÃO').length};
 el.innerHTML=`<div class="owned-summary-v30"><span>🟢 Operacionais <b>${summary.operacional}</b></span><span>📦 Em estoque <b>${summary.estoque}</b></span><span>🔧 Em manutenção <b>${summary.manut}</b></span></div><div class="owned-fleet-grid-v30">${rdOwned.map(a=>{const id=encodeURIComponent(a.id);return `<article class="owned-aircraft-card-v30"><div class="owned-aircraft-top"><b>${a.model||'Aeronave'}</b><span>${fleetOwnedStatusLabelV30(a)}</span></div><div class="owned-aircraft-meta">${a.registration||a.reg||'—'} • ${a.acquisition||'Frota RD'}${a.airline==='RDP'?' • RD AIRLINES-PORTUGAL':''}</div><div class="owned-aircraft-actions-v30"><button type="button" onclick="stockOwnedAircraftV30(decodeURIComponent('${id}'))">📦 Estocar</button><button type="button" onclick="sendOwnedToMaintenanceV30(decodeURIComponent('${id}'))">🔧 Manutenção</button><button type="button" onclick="dismantleOwnedAircraftV30(decodeURIComponent('${id}'))">♻️ Desmontar</button>${a.status&&a.status!=='OPERACIONAL'?`<button type="button" onclick="returnOwnedToOperationV30(decodeURIComponent('${id}'))">🟢 Voltar à operação</button>`:''}</div></article>`}).join('')}</div>`;
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
["RD1020","GRU","USH","18:30","23:10"],
["RD1021","GRU","KJFK","22:30","07:10+1"],
["RDP2016","OPO","KSFO","11:30","15:20+1"],
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
const RD_RECRUITMENT_NEWS_SEED=[
 {cat:"contratacoes",date:"13 SET 2026",title:"Lucas é contratado pela Emirates após deixar a LATAM",text:"Lucas, profissional virtual do mercado global, deixou a LATAM Airlines e assinou com a Emirates na simulação RD AIRLINES.",source:"Mercado Global • Simulação"},
 {cat:"contratacoes",date:"13 SET 2026",title:"Sofia aceita proposta da Qatar Airways",text:"A Qatar Airways reforça sua equipe virtual com a contratação de Sofia, após passagem pela Turkish Airlines.",source:"Mercado Global • Simulação"},
 {cat:"contratacoes",date:"12 SET 2026",title:"Miguel troca a Iberia pela British Airways",text:"O profissional virtual Miguel foi contratado pela British Airways depois de deixar a Iberia.",source:"Mercado Global • Simulação"},
 {cat:"contratacoes",date:"12 SET 2026",title:"Ana Ribeiro reforça a RD AIRLINES",text:"Ana Ribeiro assinou contrato como comandante virtual da RD AIRLINES para operações da família A320/A321.",source:"RD AIRLINES • Contratações"},
 {cat:"contratacoes",date:"11 SET 2026",title:"Rafael Costa entra para a operação da RD AIRLINES",text:"O primeiro oficial virtual Rafael Costa foi integrado à equipe para voos de médio e longo curso.",source:"RD AIRLINES • Contratações"},
 {cat:"contratacoes",date:"11 SET 2026",title:"Beatriz Nunes assume posição na cabine",text:"Beatriz Nunes foi contratada como comissária virtual e passa a integrar escalas internacionais.",source:"RD AIRLINES • Contratações"},
 {cat:"contratacoes",date:"10 SET 2026",title:"Mercado global de talentos ganha novas movimentações",text:"Profissionais virtuais continuam trocando de companhia conforme novas oportunidades e propostas salariais surgem na simulação.",source:"Mercado Global • Simulação"}
];
function getRecruitmentNewsV30(){try{return JSON.parse(localStorage.getItem('rdRecruitmentNewsV30')||'[]')}catch(e){return []}}
function saveRecruitmentNewsV30(items){localStorage.setItem('rdRecruitmentNewsV30',JSON.stringify(items.slice(0,120)))}
function publishRecruitmentNewsV30(data){
 const from=data.from||'mercado mundial',to=data.to||'RD AIRLINES',role=data.role||'profissional',salary=data.salary;
 const item={cat:'contratacoes',date:new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase().replace('.',''),title:`${data.name} foi contratado(a) pela ${to}`,text:`${data.name} deixou a ${from} e foi contratado(a) pela ${to} como ${role}${salary?`. Salário virtual: R$ ${Number(salary).toLocaleString('pt-BR')}/mês.`:'.'}`,source:'Mercado Global • Simulação'};
 const arr=getRecruitmentNewsV30();arr.unshift(item);saveRecruitmentNewsV30(arr);renderNews(document.getElementById('newsFilter')?.value||'all');
}
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
 const allNews=[...getRecruitmentNewsV30(),...RD_RECRUITMENT_NEWS_SEED,...RD_NEWS];
 const items=allNews.filter(n=>filter==="all"||n.cat===filter);
 grid.innerHTML=items.map(n=>`<article class="card news-card"><div class="news-date">${n.date}</div><h3>${n.title}</h3><p>${n.text}</p><div class="news-source">${n.source}</div></article>`).join("");
}
function filterNews(){renderNews(document.getElementById("newsFilter").value)}
document.addEventListener("DOMContentLoaded",()=>{renderLiveryAircrafts();renderNews();});



const RD_SIMBRIEF_FLIGHTS = [
  ["RD1001","GRU","OPO","06:00","09:30","A359"], ["RD1002","OPO","GRU","11:00","17:00","A359"],
  ["RD1003","REC","GVAC","08:00","13:00","A20N"], ["RD1004","SDRS","SBCT","07:30","09:00","AT72"],
  ["RD1005","GRU","KLAX","22:00","07:00+1","A359"], ["RD1006","GIG","KSFO","21:00","07:30+1","A359"],
  ["RD1007","GRU","SPJC","09:30","14:30","A20N"], ["RD1008","GRU","OEJN","23:00","17:00+1","A359"],
  ["RD1009","REC","GOBD","10:00","16:00","A20N"], ["RD1010","REC","DTTA","09:00","18:00","A20N"],
  ["RD1011","GRU","SOCA","12:00","17:30","A20N"], ["RD1012","GRU","SBEG","08:00","12:00","A20N"],
  ["RD1013","SDRS","SBBR","06:30","08:00","A20N"], ["RD1014","SDRS","SBSJ","10:00","11:00","A20N"],
  ["RD1015","SDRS","SBKP","14:00","15:00","A20N"], ["RD1016","GIG","GRU","18:00","19:20","A20N"],
  ["RD1017","SDRS","GIG","16:00","17:00","A20N"], ["RD1018","GRU","REC","20:00","23:00","A20N"],
  ["RD1019","GRU","CYVR","21:30","07:00+1","A359"], ["RD1020","GRU","USH","18:30","23:10","A359"], ["RD1021","GRU","KJFK","22:30","07:10+1","A359"], ["RD1022","GRU","LSZH","08:00","19:15","A359"], ["RD1023","GRU","LSZH","13:30","00:45+1","A359"], ["RD1024","GRU","LSZH","20:30","07:45+1","A359"], ["RDP2016","OPO","KSFO","11:30","15:20+1","A359"], ["RDP2017","OPO","FNBJ","07:30","15:00","A359"], ["RDP2018","OPO","FQMA","21:00","08:00+1","A359"], ["RDP2019","OPO","GVAC","16:30","20:30","A20N"], ["RDP2020","OPO","SCEL","22:00","12:00+1","A359"], ["RDP2021","OPO","LEMD","09:30","10:50","A20N"], ["RDP2001","OPO","HECA","07:00","13:00","A359"],
  ["RDP2002","OPO","LIS","10:00","11:00","A20N"], ["RDP2003","OPO","FAO","14:00","15:00","A20N"],
  ["RDP2004","OPO","VGO","16:00","17:00","A20N"], ["RDP2005","OPO","LPVR","09:00","10:00","AT72"],
  ["RDP2006","OPO","LPBJ","13:00","14:00","AT72"], ["RDP2007","OPO","EGLL","11:00","13:30","A20N"],
  ["RDP2008","OPO","EDDP","15:00","18:00","A20N"], ["RDP2009","OPO","HAAB","22:00","06:30+1","A359"],
  ["RDP2010","OPO","LTFM","20:00","02:00+1","A359"], ["RDP2011","OPO","CYVR","23:00","10:00+1","A359"],
  ["RDP2012","OPO","RJAA","13:00","10:00+1","A359"], ["RDP2013","OPO","EDDB","17:00","20:30","A20N"],
  ["RDP2014","OPO","REC","12:00","15:00+1","A359"], ["RDP2015","OPO","SBBR","09:00","15:00","A359"],
  ["RD1022","GRU","LSZH","08:00","19:15","A359"], ["RD1023","GRU","LSZH","13:30","00:45+1","A359"], ["RD1024","GRU","LSZH","20:30","07:45+1","A359"],
  ["RDP2017","OPO","FNBJ","07:30","15:00","A359"], ["RDP2018","OPO","FQMA","21:00","08:00+1","A359"], ["RDP2019","OPO","GVAC","16:30","20:30","A20N"], ["RDP2020","OPO","SCEL","22:00","12:00+1","A359"], ["RDP2021","OPO","LEMD","09:30","10:50","A20N"]
];
const RD_SIMBRIEF_AIRCRAFT={A359:'A350-900',A35K:'A350-1000',A20N:'A320neo',A320:'A320-200',A21N:'A321neo',A321:'A321-200',A333:'A330-300',A339:'A330-900',A343:'A340-300',A346:'A340-600',A388:'A380-800',E295:'E195-E2',AT72:'ATR 72-600',C208:'Cessna 208 Caravan'};
function initSimBrief(){const f=document.getElementById('simbriefFlightSelect'),a=document.getElementById('simbriefAircraftSelect');if(!f||!a)return;f.innerHTML=RD_SIMBRIEF_FLIGHTS.map((x,i)=>`<option value="${i}">${x[0]} • ${x[1]} → ${x[2]} • ${x[3]}</option>`).join('');a.innerHTML=Object.entries(RD_SIMBRIEF_AIRCRAFT).map(([k,v])=>`<option value="${k}">${k} — ${v}</option>`).join('');a.value=RD_SIMBRIEF_FLIGHTS[0][5];renderSimBriefSelection();}
function renderSimBriefSelection(){const f=document.getElementById('simbriefFlightSelect'),a=document.getElementById('simbriefAircraftSelect'),box=document.getElementById('simbriefSelectedCard');if(!f||!a||!box)return;const x=RD_SIMBRIEF_FLIGHTS[Number(f.value)||0];if(!x)return;if(!a.dataset.manual)a.value=x[5];a.dataset.manual='1';box.innerHTML=`<h3>${x[0]} • ${x[1]} → ${x[2]}</h3><p><b>Horário:</b> ${x[3]} → ${x[4]}</p><p><b>Aeronave:</b> ${a.value} — ${RD_SIMBRIEF_AIRCRAFT[a.value]||a.value}</p><p><b>Campos SimBrief:</b> ORIG <span class="tag">${x[1]}</span> DEST <span class="tag">${x[2]}</span> TYPE <span class="tag">${a.value}</span></p>`;}
function simBriefData(){const f=document.getElementById('simbriefFlightSelect'),a=document.getElementById('simbriefAircraftSelect'),x=RD_SIMBRIEF_FLIGHTS[Number(f.value)||0];return `RD AIRLINES\nFlight: ${x[0]}\nOrigin: ${x[1]}\nDestination: ${x[2]}\nDeparture: ${x[3]}\nArrival: ${x[4]}\nAircraft ICAO: ${a.value}\nAircraft: ${RD_SIMBRIEF_AIRCRAFT[a.value]||a.value}`;}
function rdSimBriefICAO(apt){const map={GRU:'SBGR',GIG:'SBGL',SDU:'SBRJ',SDRS:'SDRS',REC:'SBRF',OPO:'LPPR',USH:'SAWH',KJFK:'KJFK',KSFO:'KSFO',SBBR:'SBBR',SBSP:'SBSP',SBKP:'SBKP',SBCT:'SBCT',SBSJ:'SBSJ',SBEG:'SBEG',SPJC:'SPJC',OEJN:'OEJN',UUEE:'UUEE',SOCA:'SOCA',GOBD:'GOBD',DTTA:'DTTA',CYVR:'CYVR',KSEA:'KSEA',RJAA:'RJAA',SCIP:'SCIP',FQMA:'FQMA',FNBJ:'FNBJ',LSZH:'LSZH',SCEL:'SCEL',LEMD:'LEMD',GVAC:'GVAC'};return map[String(apt||'').toUpperCase()]||String(apt||'').toUpperCase();}
function rdSimBriefAircraftCode(modelOrCode){const m=String(modelOrCode||'').trim();if(RD_SIMBRIEF_AIRCRAFT[m])return m;const map={'A350-900':'A359','A350-1000':'A35K','A320neo':'A20N','A320-200':'A320','A321neo':'A21N','A321ceo':'A321','A330neo':'A339','A330-200':'A332','A340-300':'A343','A340-600':'A346','A380-800':'A388','E195-E2':'E295','ATR 72-600':'AT72','Cessna 208 Caravan':'C208'};return map[m]||m;}
function openSimBriefForRDFlight(flight){const x=(RD_MAP_V21||[]).find(r=>String(r.flight)===String(flight));if(!x){alert('Voo não encontrado para o SimBrief.');return;}const type=rdSimBriefAircraftCode(x.type||x.aircraft||'A359');const orig=rdSimBriefICAO(x.origin),dest=rdSimBriefICAO(x.dest);const fltnum=String(x.flight).replace(/^RDP?/,'').replace(/^RD/,'')||String(x.flight);const qs=new URLSearchParams({airline:'RD',fltnum,type,orig,dest,navlog:'1',stepclimbs:'1',notams:'1',maps:'detail'});const url='https://dispatch.simbrief.com/options/custom?'+qs.toString();try{localStorage.setItem('rdLastSimBriefDispatch',JSON.stringify({flight:x.flight,orig,dest,type,at:new Date().toISOString(),url}));}catch(e){}window.open(url,'_blank','noopener');const out=document.getElementById('simbriefCopyStatus');if(out)out.textContent=`✓ SimBrief preparado: ${orig} → ${dest}.`;return url;}
function sendCurrentFleetToSimBrief(){const id=document.getElementById('v30Fleet100Aircraft')?.value;const item=(rdVirtualFleet100V30||[]).find(x=>x.id===id);if(!item||!item.route){alert('Selecione uma aeronave com uma rota atribuída primeiro.');return;}openSimBriefForRDFlight(item.route);}
async function copySimBriefData(){try{await navigator.clipboard.writeText(simBriefData());document.getElementById('simbriefCopyStatus').textContent='✓ Dados copiados. Agora abra o SimBrief e preencha ORIG / DEST / TYPE.';}catch(e){alert(simBriefData());}}
function openSimBrief(){window.open('https://dispatch.simbrief.com/options/new','_blank','noopener');}
document.addEventListener('DOMContentLoaded',initSimBrief);


const RD_AIRLINE_LOGOS_V22=[
['RD','RD AIRLINES','Brasil','Independente'],['RDP','RD AIRLINES-PORTUGAL','Europa','Independente'],
['G3','GOL Linhas Aéreas','Brasil','Independente'],['AD','Azul Linhas Aéreas','Brasil','Independente'],['LA','LATAM Airlines','América Latina','Independente'],['JJ','LATAM Brasil','Brasil','Independente'],
['AA','American Airlines','EUA/Canadá','oneworld'],['AS','Alaska Airlines','EUA/Canadá','oneworld'],['HA','Hawaiian Airlines','EUA/Canadá','oneworld'],['B6','JetBlue','EUA/Canadá','Independente'],['WN','Southwest Airlines','EUA/Canadá','Independente'],['UA','United Airlines','EUA/Canadá','Star Alliance'],['AC','Air Canada','EUA/Canadá','Star Alliance'],['WS','WestJet','EUA/Canadá','Independente'],['DL','Delta Air Lines','EUA/Canadá','SkyTeam'],
['BA','British Airways','Europa','oneworld'],['IB','Iberia','Europa','oneworld'],['AY','Finnair','Europa','oneworld'],['EI','Aer Lingus','Europa','oneworld'],['QR','Qatar Airways','Oriente Médio','oneworld'],['RJ','Royal Jordanian','Oriente Médio','oneworld'],['AT','Royal Air Maroc','África','oneworld'],
['LH','Lufthansa','Europa','Star Alliance'],['LX','SWISS','Europa','Star Alliance'],['OS','Austrian Airlines','Europa','Star Alliance'],['SN','Brussels Airlines','Europa','Star Alliance'],['SK','SAS','Europa','Star Alliance'],['TP','TAP Air Portugal','Europa','Star Alliance'],['TK','Turkish Airlines','Europa','Star Alliance'],['A3','Aegean Airlines','Europa','Star Alliance'],['LO','LOT Polish Airlines','Europa','Star Alliance'],['ET','Ethiopian Airlines','África','Star Alliance'],['MS','EgyptAir','África','Star Alliance'],['SA','South African Airways','África','Star Alliance'],
['AF','Air France','Europa','SkyTeam'],['KL','KLM','Europa','SkyTeam'],['AZ','ITA Airways','Europa','SkyTeam'],['UX','Air Europa','Europa','SkyTeam'],['SU','Aeroflot','Europa','Independente'],['RO','TAROM','Europa','SkyTeam'],
['EK','Emirates','Oriente Médio','Independente'],['EY','Etihad Airways','Oriente Médio','Independente'],['SV','Saudia','Oriente Médio','SkyTeam'],['WY','Oman Air','Oriente Médio','oneworld'],['GF','Gulf Air','Oriente Médio','Independente'],['FZ','flydubai','Oriente Médio','Independente'],
['SQ','Singapore Airlines','Ásia-Pacífico','Star Alliance'],['CX','Cathay Pacific','Ásia-Pacífico','oneworld'],['JL','Japan Airlines','Ásia-Pacífico','oneworld'],['NH','All Nippon Airways','Ásia-Pacífico','Star Alliance'],['QF','Qantas','Ásia-Pacífico','oneworld'],['MH','Malaysia Airlines','Ásia-Pacífico','oneworld'],['PR','Philippine Airlines','Ásia-Pacífico','Independente'],['TG','Thai Airways','Ásia-Pacífico','Star Alliance'],['KE','Korean Air','Ásia-Pacífico','SkyTeam'],['OZ','Asiana Airlines','Ásia-Pacífico','Star Alliance'],['CI','China Airlines','Ásia-Pacífico','SkyTeam'],['BR','EVA Air','Ásia-Pacífico','Star Alliance'],['CA','Air China','Ásia-Pacífico','Star Alliance'],['MU','China Eastern','Ásia-Pacífico','SkyTeam'],['CZ','China Southern','Ásia-Pacífico','SkyTeam'],['AI','Air India','Ásia-Pacífico','Star Alliance'],['6E','IndiGo','Ásia-Pacífico','Independente'],['NZ','Air New Zealand','Ásia-Pacífico','Star Alliance'],
['AM','Aeromexico','América Latina','SkyTeam'],['CM','Copa Airlines','América Latina','Star Alliance'],['AV','Avianca','América Latina','Star Alliance'],['H2','Sky Airline','América Latina','Independente'],['JA','JetSMART','América Latina','Independente'],['VB','Viva Aerobus','América Latina','Independente'],['Y4','Volaris','América Latina','Independente'],
['FR','Ryanair','Europa','Independente'],['U2','easyJet','Europa','Independente'],['W6','Wizz Air','Europa','Independente'],['TP','TAP Air Portugal','Europa','Star Alliance'],['FI','Icelandair','Europa','Independente'],['DY','Norwegian','Europa','Independente'],['VS','Virgin Atlantic','Europa','SkyTeam'],['VY','Vueling','Europa','Independente'],
['KQ','Kenya Airways','África','SkyTeam'],['WB','RwandAir','África','Star Alliance'],['AT','Royal Air Maroc','África','oneworld'],['MK','Air Mauritius','África','oneworld'],
['TS','Air Transat','EUA/Canadá','Independente'],['WS','WestJet','EUA/Canadá','Independente'],['FJ','Fiji Airways','Ásia-Pacífico','oneworld'],['VA','Virgin Australia','Ásia-Pacífico','Independente'],['QF','Qantas','Ásia-Pacífico','oneworld']
];
function airlineLogoV22(code){if(code==='RD'||code==='RDP')return 'assets/rd-logo.png';return 'https://images.kiwi.com/airlines/64/'+encodeURIComponent(code)+'.png';}
function renderAirlineLogosV22(){const grid=document.getElementById('airlineLogoGridV22');if(!grid)return;const q=(document.getElementById('airlineLogoSearchV22')?.value||'').toLowerCase();const reg=document.getElementById('airlineLogoRegionV22')?.value||'ALL';const ali=document.getElementById('airlineLogoAllianceV22')?.value||'ALL';const seen=new Set();const rows=RD_AIRLINE_LOGOS_V22.filter(x=>{const key=x[0];if(seen.has(key))return false;seen.add(key);return (reg==='ALL'||x[2]===reg)&&(ali==='ALL'||x[3]===ali)&&[x[0],x[1],x[2],x[3]].join(' ').toLowerCase().includes(q);});document.getElementById('airlineLogoCountV22').textContent=rows.length+' companhias no catálogo visual';grid.innerHTML=rows.map(x=>`<article class="airline-logo-card" onclick="document.getElementById('mapAirlineFilterV21').value='${x[0]}';show('map');renderRDMapV21()"><img class="airline-logo-img" src="${airlineLogoV22(x[0])}" onerror="this.onerror=null;this.src='assets/rd-logo.png'" alt="Logo ${x[1]}"><h4>${x[1]}</h4><small>${x[0]} • ${x[2]}</small></article>`).join('');}
document.addEventListener('DOMContentLoaded',renderAirlineLogosV22);


const RD_MAP_V21 = [
 {flight:'RD1001',airline:'RD',origin:'GRU',dest:'OPO',model:'A350-900',reg:'PR-RD001',type:'Comercial',status:'No solo',pilot:'IA'},
 {flight:'RD1003',airline:'RD',origin:'REC',dest:'GVAC',model:'A320neo',reg:'PR-RD003',type:'Comercial',status:'No solo',pilot:'Bot'},
 {flight:'RD1004',airline:'RD',origin:'SDRS',dest:'SBCT',model:'ATR 72-600',reg:'PR-RD004',type:'Comercial',status:'No solo',pilot:'Humano'},
 {flight:'RD1006',airline:'RD',origin:'GIG',dest:'KSFO',model:'A350-900',reg:'PR-RD006',type:'Comercial',status:'No solo',pilot:'IA'},
 {flight:'RD1013',airline:'RD',origin:'SDRS',dest:'SBBR',model:'A320neo',reg:'PR-RD013',type:'Comercial',status:'No gate',pilot:'Bot'},
 {flight:'RD1017',airline:'RD',origin:'SDRS',dest:'GIG',model:'E195-E2',reg:'PR-RD017',type:'Comercial',status:'No solo',pilot:'Humano'},
 {flight:'RDP2001',airline:'RDP',origin:'OPO',dest:'HECA',model:'A350-900',reg:'CS-RDP01',type:'Comercial',status:'No solo',pilot:'IA'},
 {flight:'RDP2003',airline:'RDP',origin:'OPO',dest:'FAO',model:'A320neo',reg:'CS-RDP03',type:'Comercial',status:'No solo',pilot:'Bot'},
 {flight:'RDP2007',airline:'RDP',origin:'OPO',dest:'EGLL',model:'A320neo',reg:'CS-RDP07',type:'Comercial',status:'No solo',pilot:'Humano'},
 {flight:'RD9001',airline:'RD',origin:'SDRS',dest:'SBBR',model:'Cessna 208 Caravan',reg:'PR-RD901',type:'Executiva',status:'No gate',pilot:'Humano'},
 {flight:'RD9002',airline:'RD',origin:'GRU',dest:'GIG',model:'A321neo',reg:'PR-RD902',type:'Executiva',status:'No solo',pilot:'IA'},
 {flight:'RD7001',airline:'RD',origin:'GIG',dest:'GRU',model:'A330-900',reg:'PR-RD701',type:'Militar',status:'No solo',pilot:'IA'},
 // Rede regional RD AIRLINES-PORTUGAL — ATR 72-600 / Cessna 208
 {flight:'RDP3011',airline:'RDP',origin:'OPO',dest:'LPCS',model:'ATR 72-600',reg:'CS-RDP11',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3012',airline:'RDP',origin:'OPO',dest:'LPBG',model:'ATR 72-600',reg:'CS-RDP12',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3013',airline:'RDP',origin:'OPO',dest:'LPCB',model:'Cessna 208 Caravan',reg:'CS-RDP13',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3014',airline:'RDP',origin:'OPO',dest:'LPCH',model:'Cessna 208 Caravan',reg:'CS-RDP14',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3015',airline:'RDP',origin:'OPO',dest:'LPCO',model:'Cessna 208 Caravan',reg:'CS-RDP15',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3016',airline:'RDP',origin:'OPO',dest:'LPEV',model:'ATR 72-600',reg:'CS-RDP16',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3017',airline:'RDP',origin:'OPO',dest:'LPSO',model:'Cessna 208 Caravan',reg:'CS-RDP17',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3018',airline:'RDP',origin:'OPO',dest:'LPPM',model:'ATR 72-600',reg:'CS-RDP18',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3019',airline:'RDP',origin:'OPO',dest:'LPVR',model:'ATR 72-600',reg:'CS-RDP19',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3020',airline:'RDP',origin:'OPO',dest:'LPVZ',model:'ATR 72-600',reg:'CS-RDP20',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3021',airline:'RDP',origin:'PDL',dest:'LPCR',model:'Cessna 208 Caravan',reg:'CS-RDP21',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3022',airline:'RDP',origin:'PDL',dest:'LPGR',model:'Cessna 208 Caravan',reg:'CS-RDP22',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3023',airline:'RDP',origin:'PDL',dest:'LPPI',model:'ATR 72-600',reg:'CS-RDP23',type:'Regional',status:'No solo',pilot:'IA'},
 {flight:'RDP3024',airline:'RDP',origin:'PDL',dest:'LPSJ',model:'Cessna 208 Caravan',reg:'CS-RDP24',type:'Regional',status:'No solo',pilot:'Bot'},
 {flight:'RDP3025',airline:'RDP',origin:'FNC',dest:'LPPS',model:'ATR 72-600',reg:'CS-RDP25',type:'Regional',status:'No solo',pilot:'IA'}
];
const RD_MAP_AIRPORTS_V21={SDRS:['Resende / RJ',-22.478,-44.480],GRU:['Guarulhos / SP',-23.435,-46.473],GIG:['Galeão / RJ',-22.809,-43.250],SDU:['Santos Dumont / RJ',-22.910,-43.164],REC:['Recife / PE',-8.126,-34.923],OPO:['Porto / Portugal',41.242,-8.678],PDL:['Ponta Delgada / Açores',37.741,-25.698],FNC:['Madeira / Funchal',32.697,-16.774],LPPS:['Porto Santo / Madeira',33.073,-16.350],LPCS:['Cascais / Portugal',38.726,-9.355],LPBG:['Bragança / Portugal',41.857,-6.708],LPCB:['Castelo Branco / Portugal',39.849,-7.442],LPCH:['Chaves / Portugal',41.722,-7.463],LPCO:['Coimbra / Portugal',40.156,-8.469],LPEV:['Évora / Portugal',38.530,-7.892],LPSO:['Ponte de Sor / Portugal',39.195,-8.058],LPPM:['Portimão / Portugal',37.144,-8.584],LPVR:['Vila Real / Portugal',41.276,-7.720],LPVZ:['Viseu / Portugal',40.726,-7.889],LPCR:['Corvo / Açores',39.672,-31.114],LPGR:['Graciosa / Açores',39.093,-28.030],LPPI:['Pico / Açores',38.554,-28.441],LPSJ:['São Jorge / Açores',38.666,-28.175],USH:['Ushuaia / Argentina',-54.843,-68.295],KJFK:['New York / JFK',40.6413,-73.7781],FQMA:['Maputo / Moçambique',-25.9208,32.5726],FNBJ:['Luanda / Angola',-8.8584,13.2312],LSZH:['Zurich / Suíça',47.4582,8.5555],SCEL:['Santiago / Chile',-33.3930,-70.7858],LEMD:['Madrid / Espanha',40.4720,-3.5609]};
let rdLiveMapV29=null;
let rdLiveMarkersV29=[];
let rdLiveRoutesV29=[];
const RD_SIM_FLIGHT_COORDS_V29={
  SDRS:RD_MAP_AIRPORTS_V21.SDRS,GRU:RD_MAP_AIRPORTS_V21.GRU,GIG:RD_MAP_AIRPORTS_V21.GIG,SDU:RD_MAP_AIRPORTS_V21.SDU,REC:RD_MAP_AIRPORTS_V21.REC,OPO:RD_MAP_AIRPORTS_V21.OPO,PDL:RD_MAP_AIRPORTS_V21.PDL,FNC:RD_MAP_AIRPORTS_V21.FNC,LPPS:RD_MAP_AIRPORTS_V21.LPPS,LPCS:RD_MAP_AIRPORTS_V21.LPCS,LPBG:RD_MAP_AIRPORTS_V21.LPBG,LPCB:RD_MAP_AIRPORTS_V21.LPCB,LPCH:RD_MAP_AIRPORTS_V21.LPCH,LPCO:RD_MAP_AIRPORTS_V21.LPCO,LPEV:RD_MAP_AIRPORTS_V21.LPEV,LPSO:RD_MAP_AIRPORTS_V21.LPSO,LPPM:RD_MAP_AIRPORTS_V21.LPPM,LPVR:RD_MAP_AIRPORTS_V21.LPVR,LPVZ:RD_MAP_AIRPORTS_V21.LPVZ,LPCR:RD_MAP_AIRPORTS_V21.LPCR,LPGR:RD_MAP_AIRPORTS_V21.LPGR,LPPI:RD_MAP_AIRPORTS_V21.LPPI,LPSJ:RD_MAP_AIRPORTS_V21.LPSJ,
  SBCT:['Curitiba / PR',-25.528,-49.176],GVAC:['Sal / Cabo Verde',16.741,-22.949],KLAX:['Los Angeles / EUA',33.942,-118.408],KSFO:['San Francisco / EUA',37.621,-122.379],SPJC:['Lima / Peru',-12.021,-77.114],OEJN:['Jeddah / Arábia Saudita',21.679,39.156],SBBR:['Brasília / DF',-15.869,-47.921],HECA:['Cairo / Egito',30.122,31.406],FAO:['Faro / Portugal',37.014,-7.966],EGLL:['London Heathrow',51.470,-0.454],RJAA:['Tokyo Narita',35.772,140.392],CYVR:['Vancouver / Canadá',49.196,-123.181],USH:['Ushuaia / Argentina',-54.843,-68.295],KJFK:['New York / JFK',40.6413,-73.7781],FQMA:['Maputo / Moçambique',-25.9208,32.5726],FNBJ:['Luanda / Angola',-8.8584,13.2312],LSZH:['Zurich / Suíça',47.4582,8.5555],SCEL:['Santiago / Chile',-33.3930,-70.7858],LEMD:['Madrid / Espanha',40.4720,-3.5609]
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
const realRouteCacheV30=new Map();
async function fetchRealRouteV30(callsign){const key=String(callsign||'').trim().toUpperCase();if(!key)return null;const cached=realRouteCacheV30.get(key);if(cached&&Date.now()-cached.at<15*60*1000)return cached.data;try{const r=await fetch('/api/flight-route/'+encodeURIComponent(key),{cache:'no-store'});const d=await r.json();if(!r.ok)throw new Error(d.error||'HTTP '+r.status);const data=d.found?d:null;realRouteCacheV30.set(key,{at:Date.now(),data});return data;}catch(e){realRouteCacheV30.set(key,{at:Date.now(),data:null});return null;}}
async function enrichRealRoutesV30(list){const targets=(list||[]).filter(x=>x&&x.callsign&&String(x.callsign).trim()).slice(0,24);let cursor=0;const worker=async()=>{while(cursor<targets.length){const x=targets[cursor++];const route=await fetchRealRouteV30(x.callsign);if(route){x.routeOrigin=route.origin?.iata||route.origin?.icao||null;x.routeOriginICAO=route.origin?.icao||null;x.routeDestination=route.destination?.iata||route.destination?.icao||null;x.routeDestinationICAO=route.destination?.icao||null;x.routeOriginName=route.origin?.name||null;x.routeDestinationName=route.destination?.name||null;x.routeAirline=route.airline?.name||null;}}};await Promise.all([worker(),worker()]);renderRDMapV21(true);}

async function loadOpenSkyV30(force=false){
 const status=document.getElementById('openskyStatusV30');
 if(!force && Date.now()-openskyLastUpdateV30<28000)return;
 if(status)status.textContent='ADS-B: atualizando…';
 try{
   let lat=-23.4356, lon=-46.4731, dist=250;
   if(window.rdLiveMapV29 && typeof rdLiveMapV29.getCenter==='function'){
     const c=rdLiveMapV29.getCenter();
     lat=Number(c.lat)||lat; lon=Number(c.lng)||lon;
     const b=rdLiveMapV29.getBounds();
     const north=b.getNorth(), south=b.getSouth(), east=b.getEast(), west=b.getWest();
     const dlat=Math.abs(north-south)/2, dlon=Math.abs(east-west)/2;
     const approxNm=Math.max(dlat*60, dlon*60*Math.cos(lat*Math.PI/180));
     dist=Math.max(40, Math.min(250, Math.round(approxNm*1.25)));
   }
   const qs=new URLSearchParams({lat:lat.toFixed(3),lon:lon.toFixed(3),dist:String(dist)});
   const r=await fetch('/api/opensky/states?'+qs.toString(),{cache:'no-store'});
   const d=await r.json();
   if(!r.ok)throw new Error(d.error||'HTTP '+r.status);
   openskyStatesV30=Array.isArray(d.states)?d.states.map(normalizeOpenSkyStateV30).filter(x=>x.latitude!=null&&x.longitude!=null):[];
   openskyLastUpdateV30=Date.now();
   const set=[...new Set(openskyStatesV30.map(x=>x.origin_country).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
   if(set.join('|')!==openskyCountriesV30.join('|')){
     openskyCountriesV30=set; const sel=document.getElementById('mapCountryFilterV30');
     if(sel){const old=sel.value;sel.innerHTML='<option value="ALL">País ADS-B: Todos</option>'+set.map(c=>`<option value="${String(c).replace(/"/g,'&quot;')}">${c}</option>`).join(''); if(set.includes(old))sel.value=old;}
   }
   if(status)status.textContent='🔵 adsb.fi: '+openskyStatesV30.length.toLocaleString('pt-BR')+' aeronaves';
 }catch(e){if(status)status.textContent='⚠️ adsb.fi: '+e.message; openskyStatesV30=[];}
 renderRDMapV21(true);
 enrichRealRoutesV30(openskyStatesV30);
 if(rdLiveMapV29){ setTimeout(()=>{ rdLiveMapV29.invalidateSize(); renderLiveRadarV29(RD_MAP_V21.filter(x=>!x.demo),openskyStatesV30); },120); }
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
  USH:{name:'Ushuaia/Malvinas Argentinas',icao:'SAWH',runways:[2519],metar:'SAWH'},
  KJFK:{name:'New York/JFK',icao:'KJFK',runways:[4423,3460,3048,2560],metar:'KJFK'},
  FQMA:{name:'Maputo',icao:'FQMA',runways:[3660],metar:'FQMA'},
  FNBJ:{name:'Luanda',icao:'FNBJ',runways:[3716],metar:'FNBJ'},
  LSZH:{name:'Zurich',icao:'LSZH',runways:[3700,3300,2500],metar:'LSZH'},
  SCEL:{name:'Santiago',icao:'SCEL',runways:[3800,3748],metar:'SCEL'},
  LEMD:{name:'Madrid',icao:'LEMD',runways:[4100,3500,3500,4100],metar:'LEMD'},
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
 const realHtml=shownReal.slice(0,250).map(x=>`<div class="map-flight-row-v21" onclick="focusOpenSkyV30('${x.icao24||''}')"><div class="map-flight-top-v21"><div class="map-flight-brand-v22"><span style="color:#0b6b3a;font-size:18px">✈</span><b>${(x.callsign||x.icao24||'SEM CALLSIGN').trim()}</b></div><span class="map-status-v21">adsb.fi</span></div><div class="map-flight-meta-v21"><span>🛫 ${(x.routeOrigin&&x.routeDestination)?`${x.routeOrigin} → ${x.routeDestination}`:'Rota não disponível'}</span><span>🆔 ${x.icao24||'—'}</span><span>🌎 ${x.origin_country||'—'}</span><span>⬆ ${x.baro_altitude!=null?Math.round(x.baro_altitude*3.28084).toLocaleString('pt-BR')+' ft':'—'}</span><span>💨 ${x.velocity!=null?Math.round(x.velocity*1.94384)+' kt':'—'}</span></div></div>`).join('');
 const rdHtml=effectiveRows.map(x=>{const ss=x.safety;return `<div class="map-flight-row-v21 ${x.blocked?'flight-blocked-v30':''}" onclick="focusMapAirportV21('${x.origin}')"><div class="map-flight-top-v21"><div class="map-flight-brand-v22"><img class="map-airline-logo-v22" src="${airlineLogoV22(x.airline)}" onerror="this.style.display='none'" alt=""><b>✈ ${x.flight} • ${x.origin} → ${x.dest}</b></div><span class="map-status-v21 ${x.blocked?'safety-block':'safety-ok'}">${x.blocked?'🚫 SEM AERONAVE COMPATÍVEL':'🟡 RD VIRTUAL'}</span></div><div class="map-flight-meta-v21"><span>🛩️ ${x.model}</span>${x.substituted?`<span>🔄 substituído de ${x.originalModel}</span>`:''}<span>🆔 ${x.reg}</span><span>🛫 ${ss.origin.toLocaleString('pt-BR')} m</span><span>🛬 ${ss.dest.toLocaleString('pt-BR')} m</span><span>📏 mín. ${ss.need.toLocaleString('pt-BR')} m</span></div></div>`;}).join('');
 box.innerHTML=(realHtml+rdHtml)||'<div style="padding:18px;color:#999">Nenhuma aeronave encontrada com os filtros selecionados.</div>';
 renderLiveRadarV29(rdSafeRows,shownReal);
}
let rdLiveAirportLayerV30=null, rdLiveRealLayerV30=null, rdLiveVirtualLayerV30=null, rdLiveRouteLayerV30=null;
let rdBaseLayersV30=null, rdActiveBaseLayerV30=null, rdActiveMapLayerNameV30=localStorage.getItem('rdMapLayerV30')||'street';
function buildMapBaseLayersV30(){
 if(typeof L==='undefined')return null;
 const street=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors | ADS-B data: adsb.fi',maxZoom:19});
 const satellite=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'© Esri World Imagery | ADS-B data: adsb.fi',maxZoom:19});
 const labels=L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{attribution:'© Esri Reference',maxZoom:19,opacity:.85});
 const terrain=L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{attribution:'© OpenTopoMap contributors',maxZoom:17});
 const dark=L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{attribution:'© OpenStreetMap © CARTO',maxZoom:19,subdomains:'abcd'});
 return {street:[street],satellite:[satellite],hybrid:[satellite,labels],terrain:[terrain],dark:[dark]};
}
function setMapLayerV30(name){
 if(!rdLiveMapV29||typeof L==='undefined')return;
 const layers=(rdBaseLayersV30||{})[name]||(rdBaseLayersV30||{}).street;
 if(rdActiveBaseLayerV30) rdActiveBaseLayerV30.forEach(x=>{if(rdLiveMapV29.hasLayer(x))rdLiveMapV29.removeLayer(x);});
 (layers||[]).forEach(x=>x.addTo(rdLiveMapV29));
 rdActiveBaseLayerV30=layers; rdActiveMapLayerNameV30=name; localStorage.setItem('rdMapLayerV30',name);
 document.querySelectorAll('#rdMapLayersV30 [data-layer]').forEach(btn=>btn.classList.toggle('active',btn.dataset.layer===name));
 setTimeout(()=>rdLiveMapV29.invalidateSize(true),50);
}
function ensureLiveLayersV30(){
 const el=document.getElementById('rdLiveMapV29'); if(!el||typeof L==='undefined')return false;
 if(!rdLiveMapV29){
   rdLiveMapV29=L.map(el,{worldCopyJump:true,zoomControl:true,minZoom:2,maxZoom:18,preferCanvas:true,scrollWheelZoom:true,doubleClickZoom:true,touchZoom:true}).setView([-15.0,-48.0],4);
   rdBaseLayersV30=buildMapBaseLayersV30();
   setMapLayerV30(rdActiveMapLayerNameV30);
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
 if(!rdLiveMapV29||typeof L==='undefined')return;
 if(!rdLiveRealLayerV30) rdLiveRealLayerV30=L.layerGroup().addTo(rdLiveMapV29);
 rdLiveRealLayerV30.clearLayers();
 const valid=Array.isArray(realRows)?realRows.filter(x=>Number.isFinite(Number(x.latitude))&&Number.isFinite(Number(x.longitude))):[];
 const shown=realRowsForViewportV30(valid);
 shown.forEach(x=>{
   const hd=Number.isFinite(Number(x.true_track))?Number(x.true_track):0;
   const icon=L.divIcon({className:'rd-real-aircraft-icon',html:`<span style="display:block;font-size:22px;line-height:22px;color:#24a0ff;text-shadow:0 0 6px #00131f;transform:rotate(${hd}deg)">✈</span>`,iconSize:[26,26],iconAnchor:[13,13]});
   const m=L.marker([Number(x.latitude),Number(x.longitude)],{icon,zIndexOffset:2000,interactive:true});
   if(typeof setAircraftDetailPopupV30==='function') setAircraftDetailPopupV30(m,detailHtmlForRealV30(x));
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
     setAircraftDetailPopupV30(m,detailHtmlForVirtualV30({id:f.flight,reg:f.reg,model:f.model,airline:f.airline,airport:f.origin,status:'ASSIGNED',route:f.flight},null));
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
function zoomMapV30(step){if(!rdLiveMapV29)return;rdLiveMapV29.setZoom(Math.min(18,Math.max(2,rdLiveMapV29.getZoom()+step)));}function resetZoomMapV30(){if(!rdLiveMapV29)return;rdLiveMapV29.setView([-15.0,-48.0],4);}
document.addEventListener('DOMContentLoaded',()=>{renderRDMapV21();loadOpenSkyV30(true);clearInterval(openskyTimerV30);openskyTimerV30=setInterval(()=>loadOpenSkyV30(),30000);setInterval(()=>{if(rdLiveMapV29)renderRDMapV21();},10000);setTimeout(()=>{if(rdLiveMapV29){rdLiveMapV29.on('zoomend moveend',()=>refreshOpenSkyMapV30());}},700);});


const RD_WORLD_STORAGE = [
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A300-600',cat:'Airbus',reg:'N3-VCV-001',operator:'Operador simulado',status:'Armazenada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A310-300',cat:'Airbus',reg:'N3-VCV-002',operator:'Operador simulado',status:'Aposentada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A319-100',cat:'Airbus',reg:'N3-VCV-003',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A320-200',cat:'Airbus',reg:'N3-VCV-004',operator:'Operador simulado',status:'Armazenada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A321-200',cat:'Airbus',reg:'N3-VCV-005',operator:'Operador simulado',status:'Manutenção'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A330-200',cat:'Airbus',reg:'N3-VCV-006',operator:'Operador simulado',status:'Preservada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A330-300',cat:'Airbus',reg:'N3-VCV-007',operator:'Operador simulado',status:'Armazenada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A340-300',cat:'Airbus',reg:'N3-VCV-008',operator:'Operador simulado',status:'Aposentada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A350-900',cat:'Airbus',reg:'N3-VCV-009',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'A380-800',cat:'Airbus',reg:'N3-VCV-010',operator:'Operador simulado',status:'Preservada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'737-700',cat:'Boeing',reg:'N3-VCV-011',operator:'Operador simulado',status:'Armazenada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'737-800',cat:'Boeing',reg:'N3-VCV-012',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'737 MAX 8',cat:'Boeing',reg:'N3-VCV-013',operator:'Operador simulado',status:'Manutenção'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'747-400',cat:'Boeing',reg:'N3-VCV-014',operator:'Operador simulado',status:'Aposentada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'767-300ER',cat:'Boeing',reg:'N3-VCV-015',operator:'Operador simulado',status:'Armazenada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'777-200ER',cat:'Boeing',reg:'N3-VCV-016',operator:'Operador simulado',status:'Preservada'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'777-300ER',cat:'Boeing',reg:'N3-VCV-017',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'VCV',place:'Victorville / SCLA, EUA',model:'787-8',cat:'Boeing',reg:'N3-VCV-018',operator:'Operador simulado',status:'Armazenada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A319-100',cat:'Airbus',reg:'EC-TU-001',operator:'Operador simulado',status:'Preservada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A320-200',cat:'Airbus',reg:'EC-TU-002',operator:'Operador simulado',status:'Armazenada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A321-200',cat:'Airbus',reg:'EC-TU-003',operator:'Operador simulado',status:'Manutenção'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A330-200',cat:'Airbus',reg:'EC-TU-004',operator:'Operador simulado',status:'Armazenada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A330-300',cat:'Airbus',reg:'EC-TU-005',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A340-600',cat:'Airbus',reg:'EC-TU-006',operator:'Operador simulado',status:'Aposentada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A350-900',cat:'Airbus',reg:'EC-TU-007',operator:'Operador simulado',status:'Preservada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'A380-800',cat:'Airbus',reg:'EC-TU-008',operator:'Operador simulado',status:'Armazenada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'737-800',cat:'Boeing',reg:'EC-TU-009',operator:'Operador simulado',status:'Manutenção'},
 {loc:'LETL',place:'Teruel, Espanha',model:'757-200',cat:'Boeing',reg:'EC-TU-010',operator:'Operador simulado',status:'Aposentada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'767-300ER',cat:'Boeing',reg:'EC-TU-011',operator:'Operador simulado',status:'Armazenada'},
 {loc:'LETL',place:'Teruel, Espanha',model:'777-200ER',cat:'Boeing',reg:'EC-TU-012',operator:'Operador simulado',status:'Preservada'},
 {loc:'KMHV',place:'Mojave, Califórnia, EUA',model:'MD-11',cat:'Boeing',reg:'N3-MHV-001',operator:'Operador simulado',status:'Aposentada'},
 {loc:'KMHV',place:'Mojave, Califórnia, EUA',model:'DC-10',cat:'Boeing',reg:'N3-MHV-002',operator:'Operador simulado',status:'Desmontagem'},
 {loc:'KMHV',place:'Mojave, Califórnia, EUA',model:'717-200',cat:'Boeing',reg:'N3-MHV-003',operator:'Operador simulado',status:'Aposentada'},
 {loc:'KMHV',place:'Mojave, Califórnia, EUA',model:'737-400',cat:'Boeing',reg:'N3-MHV-004',operator:'Operador simulado',status:'Desmontagem'},
 {loc:'KROW',place:'Roswell, Novo México, EUA',model:'737-800',cat:'Boeing',reg:'N3-ROW-001',operator:'Operador simulado',status:'Armazenada'},
 {loc:'KROW',place:'Roswell, Novo México, EUA',model:'757-200',cat:'Boeing',reg:'N3-ROW-002',operator:'Operador simulado',status:'Preservada'},
 {loc:'KROW',place:'Roswell, Novo México, EUA',model:'767-300ER',cat:'Boeing',reg:'N3-ROW-003',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'KROW',place:'Roswell, Novo México, EUA',model:'777-200',cat:'Boeing',reg:'N3-ROW-004',operator:'Operador simulado',status:'Armazenada'},
 {loc:'YBAS',place:'Alice Springs, Austrália',model:'A320-200',cat:'Airbus',reg:'VH-BAS-001',operator:'Operador simulado',status:'Armazenada'},
 {loc:'YBAS',place:'Alice Springs, Austrália',model:'A321neo',cat:'Airbus',reg:'VH-BAS-002',operator:'Operador simulado',status:'Preservada'},
 {loc:'YBAS',place:'Alice Springs, Austrália',model:'737-800',cat:'Boeing',reg:'VH-BAS-003',operator:'Operador simulado',status:'Manutenção'},
 {loc:'YBAS',place:'Alice Springs, Austrália',model:'E190',cat:'Embraer',reg:'VH-BAS-004',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'OTHER',place:'Tarbes / Châteauroux / St Athan',model:'ATR 72-600',cat:'ATR',reg:'SIM-ATR-001',operator:'Operador simulado',status:'Armazenada'},
 {loc:'OTHER',place:'Tarbes / Châteauroux / St Athan',model:'ATR 42-500',cat:'ATR',reg:'SIM-ATR-002',operator:'Operador simulado',status:'Aposentada'},
 {loc:'OTHER',place:'Tarbes / Châteauroux / St Athan',model:'E175',cat:'Embraer',reg:'SIM-E175-001',operator:'Operador simulado',status:'Preservada'},
 {loc:'OTHER',place:'Tarbes / Châteauroux / St Athan',model:'E190-E2',cat:'Embraer',reg:'SIM-E2-001',operator:'Operador simulado',status:'Disponível para compra'},
 {loc:'OTHER',place:'Tarbes / Châteauroux / St Athan',model:'CRJ-900',cat:'Bombardier',reg:'SIM-CRJ-001',operator:'Operador simulado',status:'Aposentada'},
 {loc:'OTHER',place:'Tarbes / Châteauroux / St Athan',model:'Dash 8 Q400',cat:'Regional',reg:'SIM-Q400-001',operator:'Operador simulado',status:'Armazenada'}
];
let rdStorageLocation='ALL';
function filterStorageLocation(loc,btn){rdStorageLocation=loc;document.querySelectorAll('.storage-loc').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');renderStorage();}
function buyStoredAircraft(i){const a=RD_WORLD_STORAGE[i]; if(!a)return; rdOwned.push({...a,acquisition:'Estoque mundial',id:a.reg,status:'OPERACIONAL'}); saveOwned(); alert(a.model+' ('+a.reg+') foi incorporada à frota virtual.');}
function renderStorage(){const el=document.getElementById('stockList');if(!el)return;const status=(document.getElementById('storageStatusFilter')?.value||'ALL');const cat=(document.getElementById('storageCategoryFilter')?.value||'ALL');const q=(document.getElementById('storageSearch')?.value||'').toLowerCase();const rows=RD_WORLD_STORAGE.map((a,i)=>({...a,i})).filter(a=>(rdStorageLocation==='ALL'||a.loc===rdStorageLocation)&&(status==='ALL'||a.status===status)&&(cat==='ALL'||a.cat===cat)&&([a.model,a.reg,a.place,a.operator,a.status,a.cat].join(' ').toLowerCase().includes(q)));if(!rows.length){el.innerHTML='<div class="storage-empty">Nenhuma aeronave encontrada com esses filtros.</div>';return;}el.innerHTML=rows.map(a=>`<article class="storage-aircraft"><span class="storage-pill">${a.status}</span><h4>✈️ ${a.model}</h4><div class="storage-meta"><span><b>Pátio:</b> ${a.loc}</span><span><b>Local:</b> ${a.place}</span><span><b>Matrícula:</b> ${a.reg}</span><span><b>Fabricante:</b> ${a.cat}</span><span><b>Operador:</b> ${a.operator}</span><span><b>Origem:</b> catálogo virtual</span></div>${a.status==='Disponível para compra'?`<button onclick="buyStoredAircraft(${a.i})">Incorporar à frota</button>`:'<button disabled>Indisponível para compra</button>'}</article>`).join('');}

const V20_STATUS_CLASS={'Disponível para compra':'buy','Armazenada':'store','Preservada':'pres','Manutenção':'maint','Desmontagem':'scrap','Aposentada':'ret'};
function v20ExpandedRows(){let base=RD_WORLD_STORAGE.slice();let rows=[];for(let i=0;i<5;i++)rows=rows.concat(base.map((a,j)=>({...a,reg:a.reg+'-'+String(i+1).padStart(2,'0'),simId:i*base.length+j})));return rows;}
const V20_ROWS=v20ExpandedRows();
function selectV20Yard(loc){document.getElementById('storageLocationV20').value=loc;filterStorageLocation(loc,null);renderV20Yard();}
function v20MarkerClick(row){const box=document.getElementById('v20Detail');const cls=V20_STATUS_CLASS[row.status]||'store';const photo=(row.cat==='Boeing'?'assets/fleet-3.jpg':row.cat==='Airbus'?'assets/fleet-1.jpg':'assets/fleet-7.jpg');const idx=RD_WORLD_STORAGE.findIndex(x=>x.reg===row.reg.split('-').slice(0,3).join('-'));box.innerHTML=`<img src="${photo}" alt="${row.model}"><h3>${row.model}</h3><p><b>Matrícula:</b> ${row.reg}</p><p><b>Fabricante:</b> ${row.cat}</p><p><b>Operador:</b> ${row.operator}</p><p><b>Status:</b> <span class="st-${cls}">● ${row.status}</span></p><p><b>Localização:</b> ${row.place}</p><p><b>Origem:</b> catálogo virtual</p>${row.status==='Disponível para compra'&&idx>=0?`<button class="v20-buy" onclick="buyStoredAircraft(${idx})">✈️ Incorporar à frota</button>`:''}`;}
function renderV20Yard(){
 const wrap=document.getElementById('v20Markers'),counts=document.getElementById('v20StatusCounts'),thumbs=document.getElementById('v20Thumbs');
 if(!wrap)return;
 const loc=document.getElementById('storageLocationV20').value||'ALL',status=document.getElementById('storageStatusV20').value||'ALL',cat=document.getElementById('storageCategoryV20').value||'ALL',q=(document.getElementById('storageSearchV20').value||'').toLowerCase();
 let rows=V20_ROWS.filter(a=>(loc==='ALL'||a.loc===loc)&&(status==='ALL'||a.status===status)&&(cat==='ALL'||a.cat===cat)&&[a.model,a.reg,a.operator,a.place,a.status,a.cat].join(' ').toLowerCase().includes(q));
 if(!rows.length){wrap.innerHTML='<div style=\"position:absolute;z-index:9;left:50%;top:50%;transform:translate(-50%,-50%);background:#000d;padding:15px;border:1px solid #d7b64a;border-radius:8px\">Nenhuma aeronave encontrada.</div>';return;}
 const sample=rows.slice(0,260);
 wrap.innerHTML=sample.map((a,i)=>{let x=5+((i*37)%90),y=9+((i*61)%82);return `<button type=\"button\" class=\"v20-marker ${V20_STATUS_CLASS[a.status]||'store'}\" style=\"left:${x}%;top:${y}%\" title=\"${a.model} • ${a.reg}\" data-v20-id=\"${i}\"></button>`}).join('');
 wrap.querySelectorAll('[data-v20-id]').forEach(btn=>btn.addEventListener('click',()=>v20MarkerClick(sample[Number(btn.dataset.v20Id)])));
 const stat={};sample.forEach(a=>stat[a.status]=(stat[a.status]||0)+1);counts.innerHTML=Object.entries(stat).map(([k,v])=>`<div class=\"st-${V20_STATUS_CLASS[k]||'store'}\">● ${k}: <b>${v}</b></div>`).join('');
 thumbs.innerHTML=sample.slice(0,7).map((a,i)=>{const ph=a.cat==='Boeing'?'assets/fleet-3.jpg':a.cat==='Airbus'?'assets/fleet-1.jpg':'assets/fleet-7.jpg';return `<button type=\"button\" class=\"v20-thumb\" data-v20-thumb=\"${i}\"><img src=\"${ph}\"><b>${a.reg}</b><br>${a.model}<br><span class=\"st-${V20_STATUS_CLASS[a.status]||'store'}\">● ${a.status}</span></button>`}).join('');
 thumbs.querySelectorAll('[data-v20-thumb]').forEach(btn=>btn.addEventListener('click',()=>v20MarkerClick(sample[Number(btn.dataset.v20Thumb)])));
 if(!document.getElementById('v20Detail')?.dataset.initialized){v20MarkerClick(sample[0]);document.getElementById('v20Detail').dataset.initialized='1';}
}
window.addEventListener('DOMContentLoaded',()=>{renderStorage();renderV20Yard();});


/* V23 — Mundo Global de Aviação: funcionários e frotas são simulados. */
const V23_FLEETS={
RD:['A350-900','A350-1000','A320neo','A321XLR','A330neo','A380-800','E195-E2','ATR 72-600'],RDP:['A350-900','A330neo','A320neo','A321XLR','E195-E2','ATR 72-600'],
G3:['737-800','737 MAX 8','E195-E2'],AD:['A320neo','A321neo','E195-E2','ATR 72-600'],LA:['787-9','777-300ER','A350-900','A320neo'],AA:['737-8','787-9','777-300ER','A321neo'],UA:['737 MAX 9','787-9','777-300ER','A350-900'],DL:['A321neo','A330-900','A350-900','767-400ER'],
EK:['A380-800','A350-900','777-300ER'],QR:['A350-1000','777-300ER','787-9','A380-800'],TP:['A320neo','A321neo','A330-900','A321LR'],BA:['A320neo','A350-1000','787-9','777-300ER'],LH:['A320neo','A350-900','747-8','787-9'],AF:['A220-300','A350-900','777-300ER'],KL:['737-800','787-10','777-300ER','A321neo'],SQ:['A350-900','A380-800','777-300ER','787-10'],CX:['A350-1000','777-300ER','A321neo'],JL:['A350-900','787-9','777-300ER'],NH:['A321neo','787-9','777-300ER','A350-900'],QF:['A350-1000','787-9','737-800'],ET:['787-9','777-300ER','A350-900'],SA:['A330-300','A340-300','A350-900'],AV:['A320neo','A321neo','787-8'],CM:['737 MAX 9','737-800'],AM:['737 MAX 8','787-9'],FR:['737-800','737 MAX 8'],U2:['A320neo','A321neo'],W6:['A320neo','A321neo'],TK:['A321neo','A350-900','787-9'],AI:['A350-900','787-9','777-300ER'],AC:['A220-300','A321XLR','787-9','777-300ER']};
const V23_ROLES=['Piloto','Comissário','Mecânico','Despachante','Solo'];
const V23_FIRST=['Lucas','Rafael','Carlos','André','Marcos','Bruno','Felipe','Daniel','Thiago','Henrique','João','Pedro','Mateus','Gabriel','Diego','Eduardo','Victor','Gustavo','Renato','Alex'];
const V23_LAST=['Silva','Costa','Santos','Oliveira','Almeida','Martins','Pereira','Ribeiro','Carvalho','Mendes','Rodrigues','Ferreira','Vieira','Gomes','Lopes','Souza','Barbosa','Castro'];
let V23_STATE=JSON.parse(localStorage.getItem('rd_v23_staff')||'null');
function v23Salary(role,i){return role==='Piloto'?14000+(i%7)*1800:role==='Comissário'?5200+(i%6)*650:role==='Mecânico'?7600+(i%5)*850:role==='Despachante'?6500+(i%5)*700:4200+(i%5)*450;}
function initV23(){if(V23_STATE)return;let idx=0;V23_STATE={employees:[],hired:[]};RD_AIRLINE_LOGOS_V22.forEach((a,ai)=>{let code=a[0],name=a[1];for(let k=0;k<5;k++){let role=V23_ROLES[k],id=code+'-'+k;V23_STATE.employees.push({id,name:V23_FIRST[(ai*3+k)%V23_FIRST.length]+' '+V23_LAST[(ai+k*2)%V23_LAST.length],role,airline:code,airlineName:name,region:a[2],salary:v23Salary(role,ai+k),hours:role==='Piloto'?1200+(ai*137+k*210):0,level:role==='Piloto'?(ai%4)+2:1});}});localStorage.setItem('rd_v23_staff',JSON.stringify(V23_STATE));}
function saveV23(){localStorage.setItem('rd_v23_staff',JSON.stringify(V23_STATE));}
function v23Logo(code){return (code==='RD'||code==='RDP')?'assets/rd-logo.png':'https://images.kiwi.com/airlines/64/'+encodeURIComponent(code)+'.png';}
function v23Fleet(code){return V23_FLEETS[code]||['A320neo','A321neo','737-800'];}
function renderGlobalOpsV23(){initV23();let q=(document.getElementById('globalSearchV23')?.value||'').toLowerCase(),reg=document.getElementById('globalRegionV23')?.value||'ALL',role=document.getElementById('globalRoleV23')?.value||'ALL';let companies=RD_AIRLINE_LOGOS_V22.filter(a=>reg==='ALL'||a[2]===reg).filter(a=>{let people=V23_STATE.employees.filter(e=>e.airline===a[0]);return [a[0],a[1],a[2],...people.map(e=>e.name+' '+e.role)].join(' ').toLowerCase().includes(q)});let hired=V23_STATE.hired.length, pilots=V23_STATE.employees.filter(e=>e.role==='Piloto').length;document.getElementById('globalSummaryV23').innerHTML=`<div><b>${RD_AIRLINE_LOGOS_V22.length}</b><span>Companhias no universo</span></div><div><b>${V23_STATE.employees.length}</b><span>Profissionais virtuais</span></div><div><b>${pilots}</b><span>Pilotos virtuais</span></div><div><b>${hired}</b><span>Contratações da RD</span></div>`;document.getElementById('globalAirlineGridV23').innerHTML=companies.map(a=>{let ppl=V23_STATE.employees.filter(e=>e.airline===a[0]),fl=v23Fleet(a[0]);return `<article class="global-airline-card-v23" onclick="openGlobalCompanyV23('${a[0]}')"><img class="glogo" src="${v23Logo(a[0])}" onerror="this.onerror=null;this.src='assets/rd-logo.png'"><h4>${a[1]}</h4><small>${a[0]} • ${a[2]}</small><div class="gstats"><span>👨‍✈️ ${ppl.filter(x=>x.role==='Piloto').length} pilotos</span><span>👩‍✈️ ${ppl.filter(x=>x.role==='Comissário').length} comissários</span><span>🔧 ${ppl.filter(x=>x.role==='Mecânico').length} técnicos</span><span>✈️ ${fl.length} tipos de frota</span></div></article>`}).join('');}
function openGlobalCompanyV23(code){initV23();let a=RD_AIRLINE_LOGOS_V22.find(x=>x[0]===code),ppl=V23_STATE.employees.filter(e=>e.airline===code),fl=v23Fleet(code),panel=document.getElementById('globalPanelV23');panel.innerHTML=`<h3>${a[1]}</h3><p><b>${a[0]}</b> • ${a[2]} • ${a[3]}</p><div class="global-fleet-v23">${fl.map(x=>`<span>${x}</span>`).join('')}</div><h4>Equipe virtual</h4>${ppl.map(e=>`<div class="global-person-v23"><b>${e.name}</b><small>${e.role}${e.role==='Piloto'?' • '+e.hours.toLocaleString('pt-BR')+' h • nível '+e.level:''}</small><span class="salary">R$ ${e.salary.toLocaleString('pt-BR')}/mês</span><button onclick="recruitV23('${e.id}')">💼 Fazer proposta para a RD</button></div>`).join('')}`;}
function showGlobalRecruitmentV23(){initV23();let pool=V23_STATE.employees.filter(e=>e.airline!=='RD'&&e.airline!=='RDP').sort((a,b)=>b.level-a.level||b.salary-a.salary).slice(0,18),panel=document.getElementById('globalPanelV23');panel.innerHTML='<h3>💼 Mercado mundial</h3><p>Profissionais disponíveis para propostas da RD AIRLINES.</p>'+pool.map(e=>`<div class="global-person-v23"><b>${e.name}</b><small>${e.role} • ${e.airlineName} • ${e.region}${e.role==='Piloto'?' • '+e.hours.toLocaleString('pt-BR')+' h':''}</small><span class="salary">Salário atual: R$ ${e.salary.toLocaleString('pt-BR')}/mês</span><button onclick="recruitV23('${e.id}')">✈️ Oferecer R$ ${Math.round(e.salary*1.12).toLocaleString('pt-BR')}/mês</button></div>`).join('');}
function recruitV23(id){initV23();let e=V23_STATE.employees.find(x=>x.id===id);if(!e||e.airline==='RD'){alert('Este profissional já pertence à RD AIRLINES.');return;}let offer=Math.round(e.salary*1.12);if(offer<e.salary*1.08){alert('A proposta não foi suficiente.');return;}let old=e.airlineName;e.airline='RD';e.airlineName='RD AIRLINES';e.salary=offer;V23_STATE.hired.push({id,name:e.name,role:e.role,from:old,salary:offer,date:new Date().toLocaleDateString('pt-BR')});saveV23();publishRecruitmentNewsV30({name:e.name,role:e.role,from:old,to:'RD AIRLINES',salary:offer});alert('✈️ Contratação realizada! '+e.name+' saiu de '+old+' e entrou na RD AIRLINES por R$ '+offer.toLocaleString('pt-BR')+'/mês.');renderGlobalOpsV23();openGlobalCompanyV23('RD');}


/* V24 — concorrência por passageiros + voos automáticos das companhias. */
const V24_HUBS={RD:['GRU','GIG','SDRS','REC'],RDP:['OPO'],G3:['GRU','GIG','REC'],AD:['VCP','CNF','REC'],LA:['GRU','SCL','LIM','BOG'],AA:['KDFW','KMIA','KJFK','KLAX'],UA:['KORD','KDEN','KSFO','KIAH'],DL:['KATL','KJFK','KMSP','KLAX'],EK:['OMDB','OMDW'],QR:['OTHH'],TP:['LPPR','LPPT','REC'],BA:['EGLL'],LH:['EDDF','EDDM'],AF:['LFPG','LFPO'],KL:['EHAM'],SQ:['WSSS'],CX:['VHHH'],JL:['RJAA'],NH:['RJTT'],QF:['YSSY'],ET:['HAAB'],SA:['FAOR'],AV:['SKBO'],CM:['MPTO'],AM:['MMMX'],FR:['EIDW'],U2:['EGLL'],W6:['LHBP'],TK:['LTFM'],AI:['VIDP'],AC:['CYYZ']};
const V24_PAIRS=[['GRU','OPO'],['GRU','LIS'],['GRU','SCL'],['GIG','MIA'],['REC','LIS'],['GRU','JFK'],['GRU','LAX'],['GRU','LIM'],['OPO','LIS'],['OPO','LHR'],['OPO','REC'],['OPO','CAI'],['JFK','LHR'],['LAX','NRT'],['DXB','LHR'],['DXB','GRU'],['DOH','LHR'],['DOH','GRU'],['CDG','JFK'],['FRA','JFK'],['AMS','JFK'],['SYD','LAX'],['SIN','NRT']];
let V24_STATE=JSON.parse(localStorage.getItem('rd_v24_competition')||'null');
function v24Name(code){let a=RD_AIRLINE_LOGOS_V22.find(x=>x[0]===code);return a?a[1]:code;}
function v24Logo(code){return (code==='RD'||code==='RDP')?'assets/rd-logo.png':'https://images.kiwi.com/airlines/64/'+encodeURIComponent(code)+'.png';}
function initV24(){if(V24_STATE)return;V24_STATE={flights:[],demand:{},stats:{}};let comps=RD_AIRLINE_LOGOS_V22.map(x=>x[0]).filter(c=>V24_HUBS[c]);comps.forEach((c,ci)=>{let hubs=V24_HUBS[c];for(let k=0;k<3;k++){let pair=V24_PAIRS[(ci*2+k)%V24_PAIRS.length];let o=hubs[k%hubs.length],d=pair[1];if(o===d)d=pair[0];V24_STATE.flights.push({id:c+'-V24-'+k,airline:c,flight:c+(1000+ci*10+k),origin:o,dest:d,model:v23Fleet(c)[k%v23Fleet(c).length],status:['Em voo','No solo','Chegando'][(ci+k)%3],passengers:Math.round(110+((ci*17+k*23)%170)),capacity:180+(k%2)*50});V24_STATE.stats[c]={passengers:0,flights:0,score:50+(ci%30)};}});saveV24();}
function saveV24(){localStorage.setItem('rd_v24_competition',JSON.stringify(V24_STATE));}
function tickV24(){initV24();V24_STATE.flights.forEach((f,i)=>{if(f.status==='No solo')f.status='Em voo';else if(f.status==='Em voo'&&i%3===0)f.status='Chegando';else if(f.status==='Chegando')f.status='No solo';let demand=120+Math.floor(Math.random()*170);f.passengers=Math.min(f.capacity,Math.max(35,demand+((f.airline==='RD'||f.airline==='RDP')?20:0)));let s=V24_STATE.stats[f.airline]||{passengers:0,flights:0,score:50};s.passengers+=f.passengers;s.flights+=1;s.score=Math.max(1,Math.min(99,Math.round(s.score+(f.passengers/f.capacity-.7)*2)));V24_STATE.stats[f.airline]=s;});V24_STATE.lastTick=new Date().toISOString();saveV24();if(document.getElementById('competition')&&document.getElementById('competition').style.display!=='none')renderCompetitionV24();}
function renderCompetitionV24(){initV24();let sel=document.getElementById('competitionAirlineV24'),status=document.getElementById('competitionStatusV24')?.value||'ALL',q=(document.getElementById('competitionSearchV24')?.value||'').toLowerCase();if(sel&&sel.options.length===1){RD_AIRLINE_LOGOS_V22.forEach(a=>{if(V24_HUBS[a[0]]){let o=document.createElement('option');o.value=a[0];o.textContent=a[1]+' ('+a[0]+')';sel.appendChild(o);}})}let al=sel?.value||'ALL';let rows=V24_STATE.flights.filter(f=>(al==='ALL'||f.airline===al)&&(status==='ALL'||f.status===status)&&[f.airline,f.flight,f.origin,f.dest,f.model].join(' ').toLowerCase().includes(q));let totalP=rows.reduce((n,f)=>n+f.passengers,0);let rdP=V24_STATE.flights.filter(f=>f.airline==='RD'||f.airline==='RDP').reduce((n,f)=>n+f.passengers,0);let compP=V24_STATE.flights.filter(f=>f.airline!=='RD'&&f.airline!=='RDP').reduce((n,f)=>n+f.passengers,0);let market=rdP+compP||1;document.getElementById('competitionSummaryV24').innerHTML='<div><b>'+rows.length+'</b><span>Voos exibidos</span></div><div><b>'+totalP.toLocaleString('pt-BR')+'</b><span>Passageiros nos voos</span></div><div><b>'+Math.round(rdP/market*100)+'%</b><span>Participação RD</span></div><div><b>'+Math.round(compP/market*100)+'%</b><span>Participação concorrentes</span></div>';
document.getElementById('competitorFlightsV24').innerHTML=rows.slice(0,80).map(f=>'<div class="competition-flight-v24"><div><img src="'+v24Logo(f.airline)+'" onerror="this.style.display=\'none\'" alt=""><b>'+v24Name(f.airline)+'</b><br><small>'+f.flight+' • '+f.model+'</small></div><div>📍 '+f.origin+' → '+f.dest+'</div><div class="competition-status-v24">● '+f.status+'</div><div>👥 '+f.passengers+'/'+f.capacity+'</div><div>📈 '+Math.round(f.passengers/f.capacity*100)+'% ocupação</div></div>').join('')||'<div class="card">Nenhum voo encontrado.</div>';
let demand=V24_PAIRS.slice(0,8).map((p,i)=>{let base=160+((i*41)%190),rd=Math.round(base*(.22+((i%3)*.04))),comp=base-rd;return '<div class="demand-v24"><b>'+p[0]+' → '+p[1]+'</b><strong>'+base+' passageiros</strong><small>RD AIRLINES: '+rd+' • concorrentes: '+comp+'</small></div>';}).join('');document.getElementById('passengerDemandV24').innerHTML=demand;
let ranking=Object.entries(V24_STATE.stats).sort((a,b)=>b[1].score-a[1].score).slice(0,20);document.getElementById('competitionRankingV24').innerHTML='<div class="ranking-v24"><b>#</b><b>Companhia</b><b>Passageiros</b><b>Índice</b></div>'+ranking.map((r,i)=>'<div class="ranking-v24"><span>'+(i+1)+'</span><span><b>'+v24Name(r[0])+'</b> ('+r[0]+')</span><span>'+r[1].passengers.toLocaleString('pt-BR')+'</span><span>'+Math.round(r[1].score)+'/100</span></div>').join('');}
setTimeout(()=>{initV24();setInterval(tickV24,20000);},2000);


const V26_ROUTES=[
{code:'RD1001',route:'GRU → OPO',region:'Internacional',price:3290,demand:86,promo:'-12% lançamento',promoPct:12,aircraft:'A350-900'},
{code:'RD1003',route:'REC → GVAC',region:'Internacional',price:1490,demand:72,promo:'-10% férias',promoPct:10,aircraft:'A320neo'},
{code:'RD1004',route:'SDRS → SBCT',region:'Brasil',price:420,demand:78,promo:'-8% regional',promoPct:8,aircraft:'E195-E2'},
{code:'RD1005',route:'GRU → LAX',region:'Internacional',price:3890,demand:91,promo:'',promoPct:0,aircraft:'A350-1000'},
{code:'RD1007',route:'GRU → LIM',region:'Internacional',price:1790,demand:83,promo:'-15% conexão',promoPct:15,aircraft:'A321XLR'},
{code:'RD1012',route:'GRU → MAO',region:'Brasil',price:690,demand:81,promo:'',promoPct:0,aircraft:'A320neo'},
{code:'RD1013',route:'SDRS → BSB',region:'Brasil',price:510,demand:75,promo:'-10% corporativo',promoPct:10,aircraft:'A320ceo'},
{code:'RD1018',route:'GRU → REC',region:'Brasil',price:890,demand:88,promo:'-12% fim de semana',promoPct:12,aircraft:'A321neo'},
{code:'RD1019',route:'GRU → YVR',region:'Internacional',price:4290,demand:69,promo:'',promoPct:0,aircraft:'A350-900'},
{code:'RDP2002',route:'OPO → LIS',region:'Portugal',price:390,demand:92,promo:'-10% ponte aérea',promoPct:10,aircraft:'A320neo'},
{code:'RDP2007',route:'OPO → LHR',region:'Internacional',price:1190,demand:89,promo:'',promoPct:0,aircraft:'A321XLR'},
{code:'RDP2014',route:'OPO → REC',region:'Internacional',price:2790,demand:74,promo:'-14% verão',promoPct:14,aircraft:'A330neo'}];
const V26_EVENTS=[
{id:1,title:'Aumento de demanda',level:'good',desc:'Um grande evento turístico elevou a procura nesta região.',effect:'+12% demanda por 24h'},
{id:2,title:'Atraso operacional',level:'critical',desc:'Uma aeronave sofreu manutenção não programada.',effect:'-8% capacidade por 12h'},
{id:3,title:'Promoção agressiva de concorrente',level:'critical',desc:'Uma concorrente reduziu preços em uma rota disputada.',effect:'-10% demanda RD por 24h'},
{id:4,title:'Manutenção preventiva',level:'critical',desc:'Uma aeronave entrou em manutenção preventiva.',effect:'-5% capacidade por 8h'},
{id:5,title:'Boa avaliação dos passageiros',level:'good',desc:'A reputação da RD AIRLINES melhorou após uma onda de avaliações positivas.',effect:'+6% demanda por 24h'},
{id:6,title:'Aeroporto congestionado',level:'critical',desc:'Congestionamento provoca redução temporária de slots.',effect:'-7% capacidade por 10h'}];
function renderRouteMarketV26(){let reg=document.getElementById('routeRegionV26')?.value||'Todos',pr=document.getElementById('routePromoV26')?.value||'Todos';let a=V26_ROUTES.filter(x=>(reg==='Todos'||x.region===reg)&&(pr==='Todos'||(pr==='Promoções ativas'?x.promoPct>0:x.promoPct===0)));let grid=document.getElementById('routeMarketGridV26');if(!grid)return;grid.innerHTML=a.map(x=>{let final=x.price*(1-x.promoPct/100);return `<article class="route-market-card"><small>${x.code} • ${x.region}</small><h3>${x.route}</h3><div class="price-big">R$ ${Math.round(final).toLocaleString('pt-BR')}</div><small>tarifa média virtual</small>${x.promo?`<div class="promo">${x.promo}</div>`:'<div style="height:28px"></div>'}<p>👥 Demanda: <b>${x.demand}%</b><br>✈️ ${x.aircraft}</p><button onclick="buyV26('${x.code}')">Reservar voo</button></article>`}).join('');let promos=V26_ROUTES.filter(x=>x.promoPct>0).length;document.getElementById('promoCountV26').textContent=promos;document.getElementById('routeDemandV26').textContent=Math.round(V26_ROUTES.reduce((s,x)=>s+x.demand,0)/V26_ROUTES.length)+'%';document.getElementById('routeRevenueV26').textContent='R$ '+Math.round(V26_ROUTES.reduce((s,x)=>s+x.price*x.demand/100,0)).toLocaleString('pt-BR');}
function buyV26(code){let x=V26_ROUTES.find(r=>r.code===code);if(x)alert(`Reserva virtual criada!\n\n${x.code} — ${x.route}\nTarifa: R$ ${Math.round(x.price*(1-x.promoPct/100)).toLocaleString('pt-BR')}`)}
function renderEventsV26(){let list=document.getElementById('eventsListV26');if(!list)return;let active=JSON.parse(localStorage.getItem('rdV26Events')||'[]');if(!active.length){list.innerHTML='<div class="card">Nenhum evento ativo. Gere um evento para iniciar uma ocorrência na simulação.</div>';return}list.innerHTML=active.map((e,i)=>`<div class="event-card event-${e.level}"><h3>${e.title}</h3><p>${e.desc}</p><b>${e.effect}</b><div class="event-actions"><button onclick="resolveEventV26(${i})">Resolver</button><button onclick="ignoreEventV26(${i})">Ignorar</button></div></div>`).join('')}
function generateEventV26(){let e=V26_EVENTS[Math.floor(Math.random()*V26_EVENTS.length)],a=JSON.parse(localStorage.getItem('rdV26Events')||'[]');a.unshift({...e,createdAt:new Date().toISOString()});localStorage.setItem('rdV26Events',JSON.stringify(a.slice(0,8)));document.getElementById('eventStatusV26').textContent='Novo evento criado';renderEventsV26()}
function resolveEventV26(i){let a=JSON.parse(localStorage.getItem('rdV26Events')||'[]');a.splice(i,1);localStorage.setItem('rdV26Events',JSON.stringify(a));renderEventsV26()}
function ignoreEventV26(i){resolveEventV26(i)}
function resolveAllEventsV26(){localStorage.removeItem('rdV26Events');document.getElementById('eventStatusV26').textContent='Todos os eventos resolvidos';renderEventsV26()}


function hangarEnsureV30(){
  if(typeof buildVirtualFleet100V30==='function') buildVirtualFleet100V30();
  const a=document.getElementById('hangarAirportV30');
  if(a && !a.options.length){
    const arr=(typeof RD_VIRTUAL_FLEET_AIRPORTS_V30!=='undefined'?RD_VIRTUAL_FLEET_AIRPORTS_V30:['SDRS','GRU','GIG','SDU','REC','OPO']);
    a.innerHTML=arr.map(x=>`<option value="${x}">${x} — ${typeof RD_MAP_AIRPORTS_V21!=='undefined'&&RD_MAP_AIRPORTS_V21[x]?RD_MAP_AIRPORTS_V21[x][0]:x}</option>`).join('');
  }
}
function hangarMoveToGateV30(id){
  hangarEnsureV30();
  const x=rdVirtualFleet100V30.find(a=>a.id===id); if(!x)return;
  const airport=document.getElementById('hangarAirportV30')?.value||x.airport||'GRU';
  x.airport=airport; x.status='GATE'; x.route=x.route||'';
  localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));
  if(typeof renderVirtualFleet100V30==='function') renderVirtualFleet100V30();
  if(typeof renderAssignedFleetOnMapV30==='function') renderAssignedFleetOnMapV30();
  renderHangarV30();
}
function hangarReturnToStorageV30(id){
  const x=rdVirtualFleet100V30.find(a=>a.id===id); if(!x)return;
  x.status='PARKED';
  localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(rdVirtualFleet100V30));
  if(typeof renderVirtualFleet100V30==='function') renderVirtualFleet100V30();
  if(typeof renderAssignedFleetOnMapV30==='function') renderAssignedFleetOnMapV30();
  renderHangarV30();
}
function renderHangarV30(){
  hangarEnsureV30();
  rdVirtualFleet100V30=Array.isArray(rdVirtualFleet100V30)?rdVirtualFleet100V30.filter(Boolean):[];
  const list=document.getElementById('hangarListV30'); if(!list)return;
  const q=(document.getElementById('hangarSearchV30')?.value||'').toLowerCase();
  const air=document.getElementById('hangarAirlineV30')?.value||'ALL';
  const airport=document.getElementById('hangarAirportV30')?.value||'ALL';
  const rows=(rdVirtualFleet100V30||[]).filter(x=>x&&x.status==='PARKED')
    .filter(x=>air==='ALL'||x.airline===air)
    .filter(x=>airport==='ALL'||!airport||x.airport===airport)
    .filter(x=>[x.reg,x.model,x.airport,x.airline].join(' ').toLowerCase().includes(q));
  const total=(rdVirtualFleet100V30||[]).filter(x=>x&&x.status==='PARKED').length;
  const gate=(rdVirtualFleet100V30||[]).filter(x=>x&&x.status==='GATE').length;
  const airborne=(rdVirtualFleet100V30||[]).filter(x=>x&&x.status==='ASSIGNED').length;
  const t=document.getElementById('hangarTotalV30'),g=document.getElementById('hangarGateV30'),b=document.getElementById('hangarAirborneV30');
  if(t)t.textContent=total;if(g)g.textContent=gate;if(b)b.textContent=airborne;
  list.innerHTML=rows.map(x=>`<div style="display:grid;grid-template-columns:1.2fr 1.2fr .8fr .8fr auto;gap:10px;align-items:center;border-top:1px solid #262626;padding:10px 0">\
    <div><b>${x.reg}</b><br><small>${x.airline==='RDP'?'RD AIRLINES-PORTUGAL':'RD AIRLINES'}</small></div>\
    <div>${x.model}<br><small>No hangar</small></div>\
    <div>${x.airport||'—'}</div>\
    <div><span class="tag">HANGAR</span></div>\
    <div><button class="primary" onclick="hangarMoveToGateV30('${x.id}')">✈ Enviar ao gate</button></div>\
  </div>`).join('') || '<div style="padding:18px;color:#999">Nenhuma aeronave no hangar para este filtro.</div>';
}
document.addEventListener('DOMContentLoaded',()=>{setTimeout(renderHangarV30,300);});


/* ===== RD GLOBAL MARKET — SIMULAÇÃO VIRTUAL ===== */
const RD_GLOBAL_MARKET_CATALOG = [
  // Brasil
  ['RD','RD AIRLINES','AIRLINE','Brasil','Brasil',100.00],['RDP','RD AIRLINES-PORTUGAL','AIRLINE','Portugal','Europa',92.00],['G3','GOL Linhas Aéreas','AIRLINE','Brasil','Brasil',18.40],['AD','Azul Linhas Aéreas','AIRLINE','Brasil','Brasil',27.60],['LA','LATAM Airlines','AIRLINE','Brasil','América Latina',42.80],['TP','TAP Air Portugal','AIRLINE','Portugal','Europa',7.82],['JJ','LATAM Brasil','AIRLINE','Brasil','Brasil',21.30],['M3','MANTIQUEIRA AIRLINES (SIM.)','AIRLINE','Brasil','Brasil',14.20],['QL','Qatar-style Brazil Virtual','AIRLINE','Brasil','Brasil',9.70],
  // Americas
  ['AA','American Airlines','AIRLINE','EUA','América do Norte',41.20],['UA','United Airlines','AIRLINE','EUA','América do Norte',55.30],['DL','Delta Air Lines','AIRLINE','EUA','América do Norte',61.80],['AS','Alaska Airlines','AIRLINE','EUA','América do Norte',37.20],['B6','JetBlue','AIRLINE','EUA','América do Norte',16.10],['WN','Southwest Airlines','AIRLINE','EUA','América do Norte',34.60],['AC','Air Canada','AIRLINE','Canadá','América do Norte',29.40],['WS','WestJet','AIRLINE','Canadá','América do Norte',21.60],['AM','Aeroméxico','AIRLINE','México','América Latina',31.10],['CM','Copa Airlines','AIRLINE','Panamá','América Latina',24.50],['AV','Avianca','AIRLINE','Colômbia','América Latina',19.40],['H2','SKY Airline','AIRLINE','Chile','América Latina',14.70],['JA','JetSMART','AIRLINE','Chile','América Latina',11.80],['Y4','Volaris','AIRLINE','México','América Latina',18.90],['VB','Viva Aerobus','AIRLINE','México','América Latina',12.40],['AR','Aerolíneas Argentinas','AIRLINE','Argentina','América Latina',17.70],['LA2','LATAM Airlines Chile','AIRLINE','Chile','América Latina',23.50],['JJ2','Azul Cargo Express (SIM.)','AIRLINE','Brasil','Brasil',8.90],
  // Europe
  ['BA','British Airways','AIRLINE','Reino Unido','Europa',58.20],['IB','Iberia','AIRLINE','Espanha','Europa',28.60],['AF','Air France','AIRLINE','França','Europa',49.30],['KL','KLM','AIRLINE','Países Baixos','Europa',44.10],['LH','Lufthansa','AIRLINE','Alemanha','Europa',46.80],['LX','SWISS','AIRLINE','Suíça','Europa',32.40],['OS','Austrian Airlines','AIRLINE','Áustria','Europa',21.80],['SN','Brussels Airlines','AIRLINE','Bélgica','Europa',17.20],['SK','SAS','AIRLINE','Escandinávia','Europa',22.70],['AZ','ITA Airways','AIRLINE','Itália','Europa',24.40],['UX','Air Europa','AIRLINE','Espanha','Europa',18.70],['FR','Ryanair','AIRLINE','Irlanda','Europa',26.80],['U2','easyJet','AIRLINE','Reino Unido','Europa',19.90],['W6','Wizz Air','AIRLINE','Hungria','Europa',15.80],['VY','Vueling','AIRLINE','Espanha','Europa',13.40],['VS','Virgin Atlantic','AIRLINE','Reino Unido','Europa',27.10],['FI','Icelandair','AIRLINE','Islândia','Europa',16.50],['DY','Norwegian','AIRLINE','Noruega','Europa',14.80],['LO','LOT Polish Airlines','AIRLINE','Polônia','Europa',18.60],['A3','Aegean Airlines','AIRLINE','Grécia','Europa',20.50],['TK','Turkish Airlines','AIRLINE','Turquia','Europa',52.10],['JU','Air Serbia','AIRLINE','Sérvia','Europa',12.40],['RO','TAROM','AIRLINE','Romênia','Europa',9.80],['S7','S7 Airlines','AIRLINE','Rússia','Europa',11.40],['SU','Aeroflot','AIRLINE','Rússia','Europa',35.20],
  // Middle East & Africa
  ['EK','Emirates','AIRLINE','Emirados Árabes Unidos','Oriente Médio',72.40],['EY','Etihad Airways','AIRLINE','Emirados Árabes Unidos','Oriente Médio',51.60],['QR','Qatar Airways','AIRLINE','Catar','Oriente Médio',64.80],['SV','Saudia','AIRLINE','Arábia Saudita','Oriente Médio',29.20],['WY','Oman Air','AIRLINE','Omã','Oriente Médio',21.10],['GF','Gulf Air','AIRLINE','Bahrein','Oriente Médio',15.60],['FZ','flydubai','AIRLINE','Emirados Árabes Unidos','Oriente Médio',13.80],['RJ','Royal Jordanian','AIRLINE','Jordânia','Oriente Médio',12.90],['KQ','Kenya Airways','AIRLINE','Quênia','África',11.90],['ET','Ethiopian Airlines','AIRLINE','Etiópia','África',23.30],['AT','Royal Air Maroc','AIRLINE','Marrocos','África',18.40],['MS','EgyptAir','AIRLINE','Egito','África',16.90],['SA','South African Airways','AIRLINE','África do Sul','África',14.70],['WB','RwandAir','AIRLINE','Ruanda','África',10.90],['MK','Air Mauritius','AIRLINE','Maurício','África',12.20],['ET2','Ethiopian Cargo','AIRLINE','Etiópia','África',9.10],
  // Asia-Pacific
  ['SQ','Singapore Airlines','AIRLINE','Singapura','Ásia-Pacífico',68.40],['CX','Cathay Pacific','AIRLINE','Hong Kong','Ásia-Pacífico',47.20],['JL','Japan Airlines','AIRLINE','Japão','Ásia-Pacífico',51.40],['NH','All Nippon Airways','AIRLINE','Japão','Ásia-Pacífico',55.90],['QF','Qantas','AIRLINE','Austrália','Oceania',58.30],['MH','Malaysia Airlines','AIRLINE','Malásia','Ásia-Pacífico',19.80],['TG','Thai Airways','AIRLINE','Tailândia','Ásia-Pacífico',24.60],['KE','Korean Air','AIRLINE','Coreia do Sul','Ásia-Pacífico',49.20],['OZ','Asiana Airlines','AIRLINE','Coreia do Sul','Ásia-Pacífico',28.90],['CI','China Airlines','AIRLINE','Taiwan','Ásia-Pacífico',26.40],['BR','EVA Air','AIRLINE','Taiwan','Ásia-Pacífico',33.50],['CA','Air China','AIRLINE','China','Ásia-Pacífico',37.20],['MU','China Eastern','AIRLINE','China','Ásia-Pacífico',29.70],['CZ','China Southern','AIRLINE','China','Ásia-Pacífico',31.60],['AI','Air India','AIRLINE','Índia','Ásia-Pacífico',34.20],['6E','IndiGo','AIRLINE','Índia','Ásia-Pacífico',26.80],['NZ','Air New Zealand','AIRLINE','Nova Zelândia','Oceania',21.50],['PR','Philippine Airlines','AIRLINE','Filipinas','Ásia-Pacífico',18.70],['GA','Garuda Indonesia','AIRLINE','Indonésia','Ásia-Pacífico',17.40],['SQ2','Scoot','AIRLINE','Singapura','Ásia-Pacífico',12.90],['VN','Vietnam Airlines','AIRLINE','Vietnã','Ásia-Pacífico',20.60],['OD','Batik Air','AIRLINE','Indonésia','Ásia-Pacífico',13.60],
  // Manufacturers — major global brands
  ['AIR','Airbus','MANUFACTURER','França/EUA/Europa','Europa',118.00],['BOE','Boeing','MANUFACTURER','EUA','América do Norte',136.00],['EMB','Embraer','MANUFACTURER','Brasil','Brasil',49.00],['BD','Bombardier','MANUFACTURER','Canadá','América do Norte',61.00],['ATR','ATR','MANUFACTURER','França/Itália','Europa',29.00],['DST','Dassault Aviation','MANUFACTURER','França','Europa',73.00],['TXT','Textron Aviation','MANUFACTURER','EUA','América do Norte',52.00],['GULF','Gulfstream Aerospace','MANUFACTURER','EUA','América do Norte',88.00],['HON','Honda Aircraft','MANUFACTURER','Japão/EUA','Ásia-Pacífico',31.00],['COMAC','COMAC','MANUFACTURER','China','Ásia-Pacífico',42.00],['AVIC','AVIC','MANUFACTURER','China','Ásia-Pacífico',27.00],['MHI','Mitsubishi Heavy Industries','MANUFACTURER','Japão','Ásia-Pacífico',35.00],['SUK','Sukhoi/United Aircraft','MANUFACTURER','Rússia','Europa',24.00],['UAC','United Aircraft Corporation','MANUFACTURER','Rússia','Europa',28.00],['LEON','Leonardo','MANUFACTURER','Itália','Europa',54.00],['SAAB','Saab','MANUFACTURER','Suécia','Europa',46.00],['KAI','Korea Aerospace Industries','MANUFACTURER','Coreia do Sul','Ásia-Pacífico',39.00],['DELE','De Havilland Canada','MANUFACTURER','Canadá','América do Norte',22.00],['PILA','Pipistrel','MANUFACTURER','Eslovênia','Europa',11.00],['CIRR','Cirrus Aircraft','MANUFACTURER','EUA','América do Norte',18.00],['DIAM','Diamond Aircraft','MANUFACTURER','Áustria','Europa',16.00],['TEC2','Tecnam','MANUFACTURER','Itália','Europa',14.00]
];

const RD_GLOBAL_MARKET_STATE_KEY='rdGlobalMarketStateV1';
let rdGlobalMarketState={};
let rdMarketSelected='RD';
function rdMarketSeed(name){let h=0;for(let i=0;i<name.length;i++)h=((h<<5)-h)+name.charCodeAt(i)|0;return Math.abs(h);} 
function initRDGlobalMarket(){
  try{rdGlobalMarketState=JSON.parse(localStorage.getItem(RD_GLOBAL_MARKET_STATE_KEY)||'{}')||{};}catch{rdGlobalMarketState={};}
  const now=Date.now();
  for(const [code,name,type,country,region,price] of RD_GLOBAL_MARKET_CATALOG){
    const base=Number(price);
    const seed=rdMarketSeed(code);
    const prev=rdGlobalMarketState[code]||{};
    const safePrice=Number.isFinite(Number(prev.price)) && Number(prev.price)>0 ? Number(prev.price) : base;
    const safeHist=Array.isArray(prev.hist) ? prev.hist.map(Number).filter(Number.isFinite).slice(-48) : [];
    if(!safeHist.length) safeHist.push(base);
    rdGlobalMarketState[code]={
      price:safePrice,
      hist:safeHist,
      change:Number.isFinite(Number(prev.change)) ? Number(prev.change) : 0,
      updated:Number.isFinite(Number(prev.updated)) ? Number(prev.updated) : now
    };
  }
  // Remove stale/corrupted entries that are no longer part of the catalog.
  const validCodes=new Set(RD_GLOBAL_MARKET_CATALOG.map(x=>x[0]));
  Object.keys(rdGlobalMarketState).forEach(k=>{if(!validCodes.has(k)) delete rdGlobalMarketState[k];});
  saveRDGlobalMarket();
  renderRDGlobalMarket();
  renderRDGlobalMarketChart();
  setInterval(stepRDGlobalMarket,8000);
}
function saveRDGlobalMarket(){localStorage.setItem(RD_GLOBAL_MARKET_STATE_KEY,JSON.stringify(rdGlobalMarketState));}
function stepRDGlobalMarket(){
  const now=Date.now();
  for(const [code,,type,,,,baseRaw] of RD_GLOBAL_MARKET_CATALOG){
    const base=Number(baseRaw);
    const st=rdGlobalMarketState[code]||{price:base,hist:[]};
    const old=Number.isFinite(Number(st.price)) && Number(st.price)>0 ? Number(st.price) : base;
    const wave=Math.sin(now/7000 + rdMarketSeed(code)%31)*0.0022;
    const noise=((Math.random()-0.5)*0.0032);
    const sector=type==='MANUFACTURER'?0.0004:0;
    const next=old*(1+wave+noise+sector);
    st.price=Number.isFinite(next) ? Math.max(base*0.35,next) : base;
    st.change=Number.isFinite(old) && old>0 ? ((st.price/old)-1)*100 : 0;
    const hist=Array.isArray(st.hist)?st.hist.map(Number).filter(Number.isFinite):[];
    st.hist=hist.concat([st.price]).slice(-48);
    if(!st.hist.length) st.hist=[base];
    st.updated=now;
    rdGlobalMarketState[code]=st;
  }
  saveRDGlobalMarket();
  renderRDGlobalMarket();
  renderRDGlobalMarketChart();
}
function rdMarketFormat(v){const n=Number(v);return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);}
function rdMarketFiltered(){
  const q=(document.getElementById('rdMarketSearch')?.value||'').toLowerCase();
  const type=document.getElementById('rdMarketType')?.value||'ALL';
  const region=document.getElementById('rdMarketRegion')?.value||'ALL';
  return RD_GLOBAL_MARKET_CATALOG.filter(x=>(type==='ALL'||x[2]===type)&&(region==='ALL'||x[4]===region)&&x.slice(0,5).join(' ').toLowerCase().includes(q));
}
function renderRDGlobalMarket(){
  const rows=rdMarketFiltered();
  const list=document.getElementById('rdGlobalMarketList');
  const count=document.getElementById('rdMarketCount'),br=document.getElementById('rdMarketBrazilCount'),mk=document.getElementById('rdMarketMakersCount'),up=document.getElementById('rdMarketLastUpdate');
  if(count)count.textContent=RD_GLOBAL_MARKET_CATALOG.length;
  if(br)br.textContent=RD_GLOBAL_MARKET_CATALOG.filter(x=>x[3]==='Brasil').length+' empresas brasileiras';
  if(mk)mk.textContent=RD_GLOBAL_MARKET_CATALOG.filter(x=>x[2]==='MANUFACTURER').length;
  if(up)up.textContent=new Date().toLocaleTimeString('pt-BR');
  if(!list)return;
  list.innerHTML=rows.map(x=>{const st=rdGlobalMarketState[x[0]]||{price:x[5],change:0};const upv=st.change>=0;return `<article class="card tile rd-market-card" onclick="selectRDMarket('${x[0]}')" style="cursor:pointer"><div style="display:flex;justify-content:space-between;gap:8px"><h3>${x[1]}</h3><span class="tag">${x[2]==='AIRLINE'?'CIA. AÉREA':'FABRICANTE'}</span></div><p><b>${x[0]}</b> • ${x[3]}</p><p class="rd-market-price">${rdMarketFormat(st.price)}</p><p style="font-weight:800;color:${upv?'#34d399':'#fb7185'}">${upv?'▲':'▼'} ${Math.abs(st.change||0).toFixed(2)}%</p><button class="primary" onclick="event.stopPropagation();trade('${x[1]}')">Investir / Comprar</button></article>`}).join('')||'<div class="card">Nenhuma empresa encontrada.</div>';
}
function selectRDMarket(code){rdMarketSelected=code;renderRDGlobalMarketChart();}
function renderRDGlobalMarketChart(){
  const wrap=document.getElementById('rdGlobalMarketChart');if(!wrap)return;
  const entry=RD_GLOBAL_MARKET_CATALOG.find(x=>x[0]===rdMarketSelected)||RD_GLOBAL_MARKET_CATALOG[0];
  const base=Number(entry[5]);
  const st=rdGlobalMarketState[entry[0]]||{price:base,hist:[base]};
  const hist=(Array.isArray(st.hist)?st.hist.map(Number).filter(Number.isFinite):[]);
  if(!hist.length) hist.push(Number.isFinite(Number(st.price))?Number(st.price):base);
  const w=980,h=260,p=28;
  const min=Math.min(...hist),max=Math.max(...hist);
  const span=(Number.isFinite(max-min)&&max-min!==0)?(max-min):1;
  const pts=hist.map((v,i)=>{const x=p+(i/(Math.max(hist.length-1,1)))*(w-p*2);const y=h-p-((v-min)/span)*(h-p*2);return [x,y,v];});
  const line=pts.map(p=>`${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const fill=`${p},${h-p} ${line} ${w-p},${h-p}`;
  const color=(st.change||0)>=0?'#22c55e':'#ef4444';
  const title=document.getElementById('rdMarketChartTitle');if(title)title.textContent=`📊 ${entry[1]} — ${entry[2]==='AIRLINE'?'Companhia aérea':'Fabricante'}`;
  const sub=document.getElementById('rdMarketChartSubtitle');if(sub)sub.textContent=`${entry[3]} • cotação virtual ${rdMarketFormat(st.price)} • atualização automática`;
  wrap.innerHTML=`<svg viewBox="0 0 ${w} ${h}" width="100%" height="260" role="img" aria-label="Gráfico virtual ${entry[1]}"><rect x="0" y="0" width="${w}" height="${h}" rx="16" fill="rgba(0,0,0,.16)"/><path d="M${p} ${h-p}H${w-p}" stroke="rgba(255,255,255,.15)"/><polyline points="${line}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><polygon points="${fill}" fill="${color}" opacity=".08"/></svg>`;
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(initRDGlobalMarket,50));


window.addEventListener('load',()=>{
  try{
    if(typeof buildVirtualFleet100V30==='function') buildVirtualFleet100V30();
    if(typeof initVirtualFleet100V30==='function') initVirtualFleet100V30();
    if(typeof renderVirtualFleet100V30==='function') renderVirtualFleet100V30();
    if(typeof renderHangarV30==='function') renderHangarV30();
  }catch(e){console.error('RD AIRLINES init:',e);}
});


/* V30.7 — Todas as rotas + PDF SimBrief para piloto IA / fixos */
(function(){
  function routePoolV30(){
    const out=[]; const seen=new Set();
    const add=(r)=>{
      if(!r) return;
      const flight=String(r.flight??r[0]??'').trim();
      const origin=String(r.origin??r[1]??'').trim().toUpperCase();
      const dest=String(r.dest??r[2]??'').trim().toUpperCase();
      if(!flight||!origin||!dest||seen.has(flight)) return;
      seen.add(flight);
      out.push({
        flight, airline:r.airline||((flight.startsWith('RDP'))?'RDP':'RD'), origin, dest,
        model:r.model||r.aircraft||r[5]||'', type:r.type||'Comercial',
        status:r.status||'Programada', pilot:r.pilot||'IA', dep:r[3]||r.dep||'', arr:r[4]||r.arr||''
      });
    };
    (Array.isArray(window.RD_MAP_V21)?window.RD_MAP_V21:[]).forEach(add);
    (Array.isArray(window.rdFlightRoutes)?window.rdFlightRoutes:[]).forEach(add);
    (Array.isArray(window.RD_SIMBRIEF_FLIGHTS)?window.RD_SIMBRIEF_FLIGHTS:[]).forEach(add);
    return out;
  }
  window.getAllAvailableRoutesV30=routePoolV30;
  window.fleetRouteLabelV30=function(r){return `${r.flight} • ${r.origin} → ${r.dest}${r.dep?' • '+r.dep:''}${r.model?' • '+r.model:''}`;};

  function refreshRouteSelectV30(selected){
    const el=document.getElementById('v30Fleet100Route'); if(!el) return;
    const routes=routePoolV30();
    el.innerHTML='<option value="">Selecionar rota</option>'+routes.map(r=>`<option value="${r.flight}">${window.fleetRouteLabelV30(r)}</option>`).join('');
    if(selected && routes.some(r=>r.flight===selected)) el.value=selected;
  }
  window.refreshRouteSelectV30=refreshRouteSelectV30;

  window.routeObjForFleetV30=function(x){
    if(!x?.route) return null;
    const r=routePoolV30().find(y=>y.flight===String(x.route));
    if(!r) return null;
    return {...r, model:r.model||x.model||'A350-900'};
  };

  function makeCrewSimBriefCardV30(){
    const form=document.querySelector('.v30-fleet100-form');
    if(!form || document.getElementById('v30SimBriefPilotBox')) return;
    const box=document.createElement('div');
    box.id='v30SimBriefPilotBox';
    box.style.cssText='margin-top:14px;padding:12px;border:1px solid rgba(240,202,88,.35);border-radius:12px;background:rgba(240,202,88,.05)';
    box.innerHTML=`
      <h4 style="color:#f0ca58;margin:0 0 8px">📄 SimBrief → Piloto IA / FIXOS</h4>
      <p style="margin:0 0 8px;color:#bbb;font-size:12px">Importe o PDF OFP/briefing gerado pelo SimBrief. Os fixos identificados ficam vinculados à aeronave e à rota selecionadas para a IA seguir na simulação.</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
        <input id="v30SimBriefPdf" type="file" accept="application/pdf,.pdf" style="max-width:290px">
        <button type="button" class="primary" onclick="importSimBriefPdfForPilotV30()">📥 Enviar PDF ao piloto IA</button>
        <button type="button" onclick="openSelectedFleetSimBriefV30()">🛫 Abrir SimBrief da rota</button>
      </div>
      <label style="display:flex;gap:7px;align-items:center;margin-top:9px;font-size:12px"><input id="v30PilotUseFixes" type="checkbox" checked> Piloto IA usar os fixos do PDF na navegação simulada</label>
      <div id="v30SimBriefPdfStatus" style="margin-top:8px;color:#f0ca58;font-weight:700;font-size:12px"></div>
      <div id="v30SimBriefFixList" style="margin-top:6px;color:#aaa;font-size:12px"></div>`;
    form.appendChild(box);
  }

  function selectedFleetV30(){
    const id=document.getElementById('v30Fleet100Aircraft')?.value;
    return (Array.isArray(window.rdVirtualFleet100V30)?window.rdVirtualFleet100V30:[]).find(x=>x.id===id);
  }
  function selectedRouteV30(){
    const id=document.getElementById('v30Fleet100Route')?.value;
    return routePoolV30().find(r=>r.flight===id);
  }
  function simbriefKeyV30(){
    const x=selectedFleetV30(); const r=selectedRouteV30();
    return x&&r?`${x.id}::${r.flight}`:'';
  }

  window.openSelectedFleetSimBriefV30=function(){
    const r=selectedRouteV30();
    if(!r){ alert('Selecione uma rota primeiro.'); return; }
    if(typeof openSimBriefForRDFlight==='function') openSimBriefForRDFlight(r.flight);
    else alert('SimBrief ainda não está carregado.');
  };

  function restorePdfInfoV30(){
    const key=simbriefKeyV30(); const status=document.getElementById('v30SimBriefPdfStatus'); const fixes=document.getElementById('v30SimBriefFixList');
    if(!status||!fixes) return;
    const data=key?JSON.parse(localStorage.getItem('rdSimBriefPdfAssignmentsV30')||'{}'):{};
    const x=key?data[key]:null;
    if(!x){status.textContent='Nenhum PDF SimBrief vinculado a esta aeronave/rota.';fixes.textContent='';return;}
    status.textContent=`✓ PDF vinculado: ${x.fileName} • ${x.at?new Date(x.at).toLocaleString('pt-BR'):''}`;
    fixes.innerHTML=x.fixes?.length?`<b>FIXOS (${x.fixes.length}):</b> ${x.fixes.join(' • ')}`:'Nenhum fixo identificado no texto do PDF.';
    const cb=document.getElementById('v30PilotUseFixes');if(cb)cb.checked=x.useFixes!==false;
  }
  window.restorePdfInfoV30=restorePdfInfoV30;

  function extractFixesV30(text){
    const blacklist=new Set(['TITLE','FLIGHT','ORIGIN','DESTINATION','AIRCRAFT','CLIMB','DESCENT','CRUISE','TAKEOFF','LANDING','SIMBRIEF','NAVLOG','WEATHER','ATIS','RUNWAY','TOTAL','FUEL','SPEED','ALTIT','ROUTE','MILES','TIME','DATE','UTC','NORTH','SOUTH','EAST','WEST','ENTER','EXIT','REPORT','TRACK','WIND','LEVEL','AIRWAY','COST','INDEX','PLAN','VALID']);
    const tokens=(String(text||'').match(/\b[A-Z]{5}\b/g)||[]);
    const unique=[]; for(const t of tokens){ if(!blacklist.has(t)&&!unique.includes(t)) unique.push(t); }
    return unique.slice(0,80);
  }

  window.importSimBriefPdfForPilotV30=async function(){
    const input=document.getElementById('v30SimBriefPdf'); const file=input?.files?.[0]; const x=selectedFleetV30(); const r=selectedRouteV30();
    const status=document.getElementById('v30SimBriefPdfStatus'); const fixesBox=document.getElementById('v30SimBriefFixList');
    if(!file){alert('Selecione o PDF OFP do SimBrief primeiro.');return;}
    if(file.type!=='application/pdf' && !file.name.toLowerCase().endsWith('.pdf')){alert('Selecione um arquivo PDF.');return;}
    if(!x||!r){alert('Selecione a aeronave e a rota antes de enviar o PDF.');return;}
    if(status)status.textContent='⏳ Lendo PDF e identificando fixos...';
    let text='';
    try{
      if(!window.pdfjsLib){
        const mod=await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.min.mjs');
        window.pdfjsLib=mod;
        if(window.pdfjsLib.GlobalWorkerOptions) window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.min.mjs';
      }
      const buf=await file.arrayBuffer();
      const pdf=await window.pdfjsLib.getDocument({data:buf}).promise;
      for(let pno=1;pno<=pdf.numPages;pno++){
        const page=await pdf.getPage(pno); const tc=await page.getTextContent();
        text+='\n'+tc.items.map(i=>i.str||'').join(' ');
      }
    }catch(err){
      console.warn('PDF SimBrief não pôde ser lido:',err);
      if(status)status.textContent='⚠️ PDF anexado, mas não foi possível extrair os fixos automaticamente. O piloto ainda recebe o documento como briefing desta missão.';
    }
    const fixes=extractFixesV30(text);
    const key=simbriefKeyV30();
    const data=JSON.parse(localStorage.getItem('rdSimBriefPdfAssignmentsV30')||'{}');
    data[key]={fileName:file.name,size:file.size,at:new Date().toISOString(),flight:r.flight,aircraft:x.reg,route:`${r.origin} → ${r.dest}`,fixes,useFixes:document.getElementById('v30PilotUseFixes')?.checked!==false};
    localStorage.setItem('rdSimBriefPdfAssignmentsV30',JSON.stringify(data));
    try{x.simBriefPdf=file.name;x.simBriefFixes=fixes;x.useSimBriefFixes=data[key].useFixes;localStorage.setItem('rdVirtualFleet100V30',JSON.stringify(window.rdVirtualFleet100V30));}catch(e){}
    if(status)status.textContent=`✓ PDF enviado ao piloto IA: ${file.name} • ${fixes.length} fixo(s) identificado(s).`;
    if(fixesBox)fixesBox.innerHTML=fixes.length?`<b>FIXOS:</b> ${fixes.join(' • ')}`:'Nenhum fixo identificado automaticamente.';
  };

  function injectAllRoutesAndUiV30(){
    makeCrewSimBriefCardV30();
    refreshRouteSelectV30(document.getElementById('v30Fleet100Route')?.value||'');
    restorePdfInfoV30();
  }

  // Substitui as inicializações do formulário para mostrar TODAS as rotas disponíveis.
  const oldInit=window.initVirtualFleet100V30;
  window.initVirtualFleet100V30=function(){
    if(typeof oldInit==='function') oldInit.apply(this,arguments);
    refreshRouteSelectV30(document.getElementById('v30Fleet100Route')?.value||'');
    makeCrewSimBriefCardV30();
    restorePdfInfoV30();
  };
  const oldPopulate=window.populateVirtualFleetFormV30;
  window.populateVirtualFleetFormV30=function(id){
    if(typeof oldPopulate==='function') oldPopulate.apply(this,arguments);
    refreshRouteSelectV30(document.getElementById('v30Fleet100Route')?.value||'');
    makeCrewSimBriefCardV30(); restorePdfInfoV30();
  };
  const oldSelect=window.selectVirtualFleet100V30;
  window.selectVirtualFleet100V30=function(id){
    if(typeof oldSelect==='function') oldSelect.apply(this,arguments);
    refreshRouteSelectV30(document.getElementById('v30Fleet100Route')?.value||'');
    makeCrewSimBriefCardV30(); restorePdfInfoV30();
  };

  document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(injectAllRoutesAndUiV30,400);
    const route=document.getElementById('v30Fleet100Route');
    const aircraft=document.getElementById('v30Fleet100Aircraft');
    route?.addEventListener('change',restorePdfInfoV30);
    aircraft?.addEventListener('change',restorePdfInfoV30);
  });
})();
