let num = document.querySelector('input#inum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true 
    }else{
        return false
    }
}

function inLista(n){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value , valores)){

    }else{
        alert('Valor inválido ou já encontrado na lista!')
    }
}