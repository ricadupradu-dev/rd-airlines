
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
