function contar(){
    let inicio = document.getElementById('inic')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipas')
    let res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Você não digitou ainda!')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Não dá para calcular!')
            p = 1
        } 
        if(i < f){
           for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
           }
        
    }else{
        for(let c = i; c >= f; c -= p){
          res.innerHTML  += ` ${c} \u{1F449}`
        }
    }
         
        
} }
