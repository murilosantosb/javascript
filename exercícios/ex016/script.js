function contar(){
    var c = 1
    while(c > 0 )
    c++
   
   var inicio = document.getElementById('inic')
   var fim = document.getElementById('ifim')
   var inclemento = document.getElementById('ipas')  
   var contar = document.getElementById('conta')
   contar.innerHTML = Number(inicio.value) + Number(fim.value)
}