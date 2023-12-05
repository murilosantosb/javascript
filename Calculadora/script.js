const display = document.querySelector('#display')
const chaves = document.querySelector('.keys')
const Operadores = document.querySelector('.operator')
const btn_calcular = document.querySelector('#btn_calcular')

const teclas = [...document.querySelectorAll('.teclas')]



const arrayTeclas = teclas.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const p = document.createElement('p')
        p.setAttribute('class','numeros')
        p.innerHTML = el.value
        display.appendChild(p)

      
        
        
       
    })
})


function calculate() {
    var result = eval(document.getElementById('display').innerText);
    document.getElementById('display').innerText = result;
}