const addImagem = document.querySelector('.imagens')
const btn_Todos = document.querySelector('#Todos')
const btn_Natureza = document.querySelector('#Natureza')
const btn_Cidade = document.querySelector('#Cidades')
const array = [...document.querySelectorAll('.filter-btn')]


const novaImagem = document.createElement('img')
novaImagem.setAttribute('data-category','cidade')
novaImagem.src = 'cidade2.jpg'
addImagem.appendChild(novaImagem)


btn_Todos.addEventListener('click',(evt)=>{
    if(btn_Natureza === '' || category === imageCategory)
})