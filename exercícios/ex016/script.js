function contar(){
  var inicio = document.getElementById('inic')
  var fim = document.getElementById('ifim')
  var contagem = document.getElementById('ipas')
  var res = document.getElementById('res')

 if(inic.value.length == 0 || ifim.value.length == 0 || ipas.value.length == 0 ){
   alert('[ERRO] faltam dados!')
 }else {
   res.innerHTML = 'Contando: <br>'
  let i = Number(inic.value)
  let f = Number(ifim.value)
  let p = Number(ipas.value)
  if(p <= 0){
    alert('Passo inválido! Considerando PASSO 1')
    p = 1
  }
  if(i < f){
    //Contagem crescente
    for(let c = i; c <= f; c += p){
      res.innerHTML  += ` ${c} \u{1F449}`
  }
  }else{
    //Contagem regressiva
    for(let c = i; c >= f; c -= p){
      res.innerHTML  += ` ${c} \u{1F449}`
  }
  
  
}
res.innerHTML += `\u{1F3C1}`

}}
