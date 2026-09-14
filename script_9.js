
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
function buyStoredAircraft(i){const a=RD_WORLD_STORAGE[i]; if(!a)return; rdOwned.push({...a,acquisition:'Estoque mundial',id:a.reg}); saveOwned(); alert(a.model+' ('+a.reg+') foi incorporada à frota virtual.');}
function renderStorage(){const el=document.getElementById('stockList');if(!el)return;const status=(document.getElementById('storageStatusFilter')?.value||'ALL');const cat=(document.getElementById('storageCategoryFilter')?.value||'ALL');const q=(document.getElementById('storageSearch')?.value||'').toLowerCase();const rows=RD_WORLD_STORAGE.map((a,i)=>({...a,i})).filter(a=>(rdStorageLocation==='ALL'||a.loc===rdStorageLocation)&&(status==='ALL'||a.status===status)&&(cat==='ALL'||a.cat===cat)&&([a.model,a.reg,a.place,a.operator,a.status,a.cat].join(' ').toLowerCase().includes(q)));if(!rows.length){el.innerHTML='<div class="storage-empty">Nenhuma aeronave encontrada com esses filtros.</div>';return;}el.innerHTML=rows.map(a=>`<article class="storage-aircraft"><span class="storage-pill">${a.status}</span><h4>✈️ ${a.model}</h4><div class="storage-meta"><span><b>Pátio:</b> ${a.loc}</span><span><b>Local:</b> ${a.place}</span><span><b>Matrícula:</b> ${a.reg}</span><span><b>Fabricante:</b> ${a.cat}</span><span><b>Operador:</b> ${a.operator}</span><span><b>Origem:</b> catálogo virtual</span></div>${a.status==='Disponível para compra'?`<button onclick="buyStoredAircraft(${a.i})">Incorporar à frota</button>`:'<button disabled>Indisponível para compra</button>'}</article>`).join('');}

const V20_STATUS_CLASS={'Disponível para compra':'buy','Armazenada':'store','Preservada':'pres','Manutenção':'maint','Desmontagem':'scrap','Aposentada':'ret'};
function v20ExpandedRows(){let base=RD_WORLD_STORAGE.slice();let rows=[];for(let i=0;i<5;i++)rows=rows.concat(base.map((a,j)=>({...a,reg:a.reg+'-'+String(i+1).padStart(2,'0'),simId:i*base.length+j})));return rows;}
const V20_ROWS=v20ExpandedRows();
function selectV20Yard(loc){document.getElementById('storageLocationV20').value=loc;filterStorageLocation(loc,null);renderV20Yard();}
function v20MarkerClick(row){const box=document.getElementById('v20Detail');const cls=V20_STATUS_CLASS[row.status]||'store';const photo=(row.cat==='Boeing'?'rdv15/assets/fleet-3.jpg':row.cat==='Airbus'?'rdv15/assets/fleet-1.jpg':'rdv15/assets/fleet-7.jpg');const idx=RD_WORLD_STORAGE.findIndex(x=>x.reg===row.reg.split('-').slice(0,3).join('-'));box.innerHTML=`<img src="${photo}" alt="${row.model}"><h3>${row.model}</h3><p><b>Matrícula:</b> ${row.reg}</p><p><b>Fabricante:</b> ${row.cat}</p><p><b>Operador:</b> ${row.operator}</p><p><b>Status:</b> <span class="st-${cls}">● ${row.status}</span></p><p><b>Localização:</b> ${row.place}</p><p><b>Origem:</b> catálogo virtual</p>${row.status==='Disponível para compra'&&idx>=0?`<button class="v20-buy" onclick="buyStoredAircraft(${idx})">✈️ Incorporar à frota</button>`:''}`;}
function renderV20Yard(){const wrap=document.getElementById('v20Markers'),counts=document.getElementById('v20StatusCounts'),thumbs=document.getElementById('v20Thumbs');if(!wrap)return;const loc=document.getElementById('storageLocationV20').value||'ALL',status=document.getElementById('storageStatusV20').value||'ALL',cat=document.getElementById('storageCategoryV20').value||'ALL',q=(document.getElementById('storageSearchV20').value||'').toLowerCase();let rows=V20_ROWS.filter(a=>(loc==='ALL'||a.loc===loc)&&(status==='ALL'||a.status===status)&&(cat==='ALL'||a.cat===cat)&&[a.model,a.reg,a.operator,a.place,a.status,a.cat].join(' ').toLowerCase().includes(q));if(!rows.length){wrap.innerHTML='<div style="position:absolute;z-index:9;left:50%;top:50%;transform:translate(-50%,-50%);background:#000d;padding:15px;border:1px solid #d7b64a;border-radius:8px">Nenhuma aeronave encontrada.</div>';return;}const sample=rows.slice(0,260);wrap.innerHTML=sample.map((a,i)=>{let x=5+((i*37)%90),y=9+((i*61)%82);return `<button class="v20-marker ${V20_STATUS_CLASS[a.status]||'store'}" style="left:${x}%;top:${y}%" title="${a.model} • ${a.reg}" onclick='v20MarkerClick(${JSON.stringify(a)})'></button>`}).join('');const stat={};sample.forEach(a=>stat[a.status]=(stat[a.status]||0)+1);counts.innerHTML=Object.entries(stat).map(([k,v])=>`<div class="st-${V20_STATUS_CLASS[k]||'store'}">● ${k}: <b>${v}</b></div>`).join('');thumbs.innerHTML=sample.slice(0,7).map((a,i)=>{const ph=a.cat==='Boeing'?'rdv15/assets/fleet-3.jpg':a.cat==='Airbus'?'rdv15/assets/fleet-1.jpg':'rdv15/assets/fleet-7.jpg';return `<div class="v20-thumb" onclick='v20MarkerClick(${JSON.stringify(a)})'><img src="${ph}"><b>${a.reg}</b><br>${a.model}<br><span class="st-${V20_STATUS_CLASS[a.status]||'store'}">● ${a.status}</span></div>`}).join('');}
window.addEventListener('DOMContentLoaded',()=>{renderStorage();renderV20Yard();});
