
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
