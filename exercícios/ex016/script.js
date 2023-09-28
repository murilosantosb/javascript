function contar(){
   var inicio = document.getElementById('inic')
   var fim = document.getElementById('ifim')
   var contagem = document.getElementById('ipas')
   var res = document.getElementById('res')

  if(inic.value.length == 0 || ifim.value.length == 0 || ipas.value.length == 0 ){
    alert('[ERRO] faltam dados!')
  }else {
    res.innerHTML = 'Contando:'
   let i = Number(inic.value)
   let f = Number(ifim.value)
   let p = Number(ipas.value)

   for(let c = i; c <= f; c += p){
     res.innerHTML  += ` ${c} `
   }
   
   
}
}
