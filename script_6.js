
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
  ["RD1019","GRU","CYVR","21:30","07:00+1","A359"], ["RDP2001","OPO","HECA","07:00","13:00","A359"],
  ["RDP2002","OPO","LIS","10:00","11:00","A20N"], ["RDP2003","OPO","FAO","14:00","15:00","A20N"],
  ["RDP2004","OPO","VGO","16:00","17:00","A20N"], ["RDP2005","OPO","LPVR","09:00","10:00","AT72"],
  ["RDP2006","OPO","LPBJ","13:00","14:00","AT72"], ["RDP2007","OPO","EGLL","11:00","13:30","A20N"],
  ["RDP2008","OPO","EDDP","15:00","18:00","A20N"], ["RDP2009","OPO","HAAB","22:00","06:30+1","A359"],
  ["RDP2010","OPO","LTFM","20:00","02:00+1","A359"], ["RDP2011","OPO","CYVR","23:00","10:00+1","A359"],
  ["RDP2012","OPO","RJAA","13:00","10:00+1","A359"], ["RDP2013","OPO","EDDB","17:00","20:30","A20N"],
  ["RDP2014","OPO","REC","12:00","15:00+1","A359"], ["RDP2015","OPO","SBBR","09:00","15:00","A359"]
];
const RD_SIMBRIEF_AIRCRAFT={A359:'A350-900',A35K:'A350-1000',A20N:'A320neo',A320:'A320-200',A21N:'A321neo',A321:'A321-200',A333:'A330-300',A339:'A330-900',A343:'A340-300',A346:'A340-600',A388:'A380-800',E295:'E195-E2',AT72:'ATR 72-600',C208:'Cessna 208 Caravan'};
function initSimBrief(){const f=document.getElementById('simbriefFlightSelect'),a=document.getElementById('simbriefAircraftSelect');if(!f||!a)return;f.innerHTML=RD_SIMBRIEF_FLIGHTS.map((x,i)=>`<option value="${i}">${x[0]} • ${x[1]} → ${x[2]} • ${x[3]}</option>`).join('');a.innerHTML=Object.entries(RD_SIMBRIEF_AIRCRAFT).map(([k,v])=>`<option value="${k}">${k} — ${v}</option>`).join('');a.value=RD_SIMBRIEF_FLIGHTS[0][5];renderSimBriefSelection();}
function renderSimBriefSelection(){const f=document.getElementById('simbriefFlightSelect'),a=document.getElementById('simbriefAircraftSelect'),box=document.getElementById('simbriefSelectedCard');if(!f||!a||!box)return;const x=RD_SIMBRIEF_FLIGHTS[Number(f.value)||0];if(!x)return;if(!a.dataset.manual)a.value=x[5];a.dataset.manual='1';box.innerHTML=`<h3>${x[0]} • ${x[1]} → ${x[2]}</h3><p><b>Horário:</b> ${x[3]} → ${x[4]}</p><p><b>Aeronave:</b> ${a.value} — ${RD_SIMBRIEF_AIRCRAFT[a.value]||a.value}</p><p><b>Campos SimBrief:</b> ORIG <span class="tag">${x[1]}</span> DEST <span class="tag">${x[2]}</span> TYPE <span class="tag">${a.value}</span></p>`;}
function simBriefData(){const f=document.getElementById('simbriefFlightSelect'),a=document.getElementById('simbriefAircraftSelect'),x=RD_SIMBRIEF_FLIGHTS[Number(f.value)||0];return `RD AIRLINES\nFlight: ${x[0]}\nOrigin: ${x[1]}\nDestination: ${x[2]}\nDeparture: ${x[3]}\nArrival: ${x[4]}\nAircraft ICAO: ${a.value}\nAircraft: ${RD_SIMBRIEF_AIRCRAFT[a.value]||a.value}`;}
async function copySimBriefData(){try{await navigator.clipboard.writeText(simBriefData());document.getElementById('simbriefCopyStatus').textContent='✓ Dados copiados. Agora abra o SimBrief e preencha ORIG / DEST / TYPE.';}catch(e){alert(simBriefData());}}
function openSimBrief(){window.open('https://dispatch.simbrief.com/options/new','_blank','noopener');}
document.addEventListener('DOMContentLoaded',initSimBrief);
