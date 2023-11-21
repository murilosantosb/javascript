let Numero = document.getElementById('inum')

const btn_verificar = document.querySelector('#btn_verificar')
let res = document.getElementById('res')


btn_verificar.addEventListener('click',(evt)=>{
    
    if(Numero.value <= 0){
        alert('Erro')
    }

    for(n = 2; n <= Numero.value ; n++){
        if(Numero.value % n === 0){
            
        }
    }
})