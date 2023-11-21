const btn_adivinhar = document.querySelector('#btn_adivinhar')
const res = document.getElementById('res')

const num_secreto = parseInt(Math.random()*100)+1

btn_adivinhar.addEventListener('click',(evt)=>{
   let numero = prompt('Qual é o seu palpite?')
   let p = document.createElement('p')
    if(numero <=0 || numero > 100){
    }else if(numero == num_secreto){
    p.textContent = 'ACERTOU!'
    }else if(numero < num_secreto){
    p.textContent = 'Errou! O número é Maior'
    }else if(numero > num_secreto){
    p.textContent = 'Errou! O número é Menor'
    }
   res.appendChild(p)

   
   
   
    
})
 

/*
if(numero <=0 || numero > 100){
    }else if(numero == num_secreto){
    alert('ACERTOU!')
   }else if(numero < num_secreto){
        alert('Errou! O número é Maior')
   }else if(numero > num_secreto){
      alert('Errou! O número é Menor')
   }
   */