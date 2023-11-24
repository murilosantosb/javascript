const addImagem = document.querySelector('.imagens')
const btn_Todos = document.querySelector('#Todos')
const btn_Natureza = document.querySelector('#Natureza')
const btn_Cidade = document.querySelector('#Cidades')
const array = document.querySelector('.filter-btn')



const novaImagem = document.createElement('img')
novaImagem.setAttribute('data-category','cidade')
novaImagem.setAttribute('id','city')
novaImagem.src = 'cidade2.jpg'
addImagem.appendChild(novaImagem)



    
   
    
 

/*
if(btn_Natureza == nat){
        nat.display.style = 'block'
    }else if(btn_Natureza != nat){
        nat.display.style = 'none'
    } */