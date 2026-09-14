
const rdRoutesBR="[('GRU', 'OPO', 'Guarulhos', 'Porto'), ('REC', 'GVAC', 'Recife', 'Sal, Cabo Verde'), ('SDRS', 'SBCT', 'Resende', 'Curitiba'), ('GRU', 'KLAX', 'Guarulhos', 'Los Angeles'), ('GIG', 'KSFO', 'Galeão', 'San Francisco'), ('GRU', 'SPJC', 'Guarulhos', 'Lima'), ('GRU', 'OEJN', 'Guarulhos', 'Jeddah'), ('GRU', 'UUEE', 'Guarulhos', 'Moscow'), ('REC', 'GOBD', 'Recife', 'Senegal'), ('REC', 'DTTA', 'Recife', 'Tunis'), ('GRU', 'SOCA', 'Guarulhos', 'Cayenne'), ('GRU', 'SBEG', 'Guarulhos', 'Manaus'), ('SDRS', 'SBBR', 'Resende', 'Brasília'), ('SDRS', 'SBSJ', 'Resende', 'São José dos Campos'), ('SDRS', 'SBKP', 'Resende', 'Campinas'), ('GIG', 'GRU', 'Galeão', 'Guarulhos'), ('SDRS', 'GIG', 'Resende', 'Galeão'), ('GRU', 'REC', 'Guarulhos', 'Recife'), ('GRU', 'CYVR', 'Guarulhos', 'Vancouver')]";
const rdRoutesPT="[('OPO', 'HECA', 'Porto', 'Cairo'), ('OPO', 'LIS', 'Porto', 'Lisboa'), ('OPO', 'FAO', 'Porto', 'Faro'), ('OPO', 'VGO', 'Porto', 'Vigo'), ('OPO', 'CBW', 'Porto', 'Castelo Branco'), ('OPO', 'HAAB', 'Porto', 'Adis Abeba'), ('OPO', 'LTFM', 'Porto', 'Istambul'), ('OPO', 'CYVR', 'Porto', 'Vancouver'), ('OPO', 'RJAA', 'Porto', 'Tokyo Narita'), ('OPO', 'EDDB', 'Porto', 'Berlin'), ('OPO', 'REC', 'Porto', 'Recife'), ('OPO', 'SBBR', 'Porto', 'Brasília')]";
function renderRDRouteTable(){
 const row=r=>`<tr><td class="route-code">${r[0]}</td><td>${r[2]}</td><td class="route-code">${r[1]}</td><td>${r[3]}</td><td><span class="route-badge">RD AIRLINES</span></td></tr>`;
 const br=document.getElementById('rdRoutesBR'),pt=document.getElementById('rdRoutesPT');
 if(br)br.innerHTML=rdRoutesBR.map(row).join('');
 if(pt)pt.innerHTML=rdRoutesPT.map(r=>`<tr><td class="route-code">${r[0]}</td><td>${r[2]}</td><td class="route-code">${r[1]}</td><td>${r[3]}</td><td><span class="route-badge">RD AIRLINES-PORTUGAL</span></td></tr>`).join('');
}
function filterRDRoutes(inputId,tableId){
 const q=(document.getElementById(inputId).value||'').toLowerCase();
 document.querySelectorAll('#'+tableId+' tr').forEach((tr,i)=>{if(i===0)return;tr.style.display=tr.textContent.toLowerCase().includes(q)?'':'none';});
}
document.addEventListener('DOMContentLoaded',renderRDRouteTable);
