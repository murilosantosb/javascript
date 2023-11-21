let Numero = document.getElementById('inum')

const btn_verificar = document.querySelector('#btn_verificar')
let res = document.getElementById('res')


btn_verificar.addEventListener('click',(evt)=>{
    
    if(Numero.value <= 0){
        alert('Erro')
    }else if(Numero.value % 2 === 1){
        res.innerHTML = 'Número Primo'
    }else{
        res.innerHTML = 'Esse número não é primo'
    } 

})
   


