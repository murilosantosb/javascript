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

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value , valores)){
       valores.push(Number(num.value))
       
       let item = document.createElement('option')
       item.text = `O valor ${num.value} foi adicionado!`
       lista.appendChild(item)
       res.innerHTML = '' // Para Limpar o res ao adicionar elementos novamente
    }else{
        alert('Valor inválido ou já encontrado na lista!')
    }
    //Comando para esvaziar a caixa de digito ao clicar nela!
    num.value = ''
    num.focus()  
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
        }

        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    }
}