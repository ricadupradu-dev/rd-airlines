
window.RDExtraRoutesBR=[('GRU', 'SCIP', 'Guarulhos', 'Mataveri (Ilha de Páscoa)'), ('GRU', 'KSEA', 'Guarulhos', 'Seattle'), ('KSEA', 'RJAA', 'Seattle', 'Tokyo Narita'), ('SDRS', 'SBNF', 'Resende', 'Navegantes'), ('SDRS', 'SBPA', 'Resende', 'Porto Alegre'), ('SBRJ', 'SBSP', 'Santos Dumont', 'Congonhas'), ('SDRS', 'GRU', 'Resende', 'Guarulhos'), ('SDRS', 'SDCO', 'Resende', 'Sorocaba')];
window.RDExtraRoutesPT=[('OPO', 'LPVR', 'Porto', 'Vila Real'), ('OPO', 'LPBJ', 'Porto', 'Beja'), ('OPO', 'EGLL', 'Porto', 'Londres Heathrow'), ('OPO', 'EDDP', 'Porto', 'Leipzig/Halle')];
document.addEventListener('DOMContentLoaded',function(){
  function addRows(id,data,label){
    const t=document.getElementById(id);
    if(!t) return;
    data.forEach(r=>{const tr=document.createElement('tr');tr.innerHTML='<td class="route-code">'+r[0]+'</td><td>'+r[2]+'</td><td class="route-code">'+r[1]+'</td><td>'+r[3]+'</td><td><span class="route-badge">'+label+'</span></td>';t.appendChild(tr);});
  }
  addRows('rdRoutesBR',window.RDExtraRoutesBR,'RD AIRLINES');
  addRows('rdRoutesPT',window.RDExtraRoutesPT,'RD AIRLINES-PORTUGAL');
});
