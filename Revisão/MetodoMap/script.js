const btn_add = document.querySelector('#addCardBtn')
let produtos = document.querySelector('#product-cards')
let card = document.querySelector('.card-container')
let CardProduto = document.querySelector('#productName')
let Descricao = document.querySelector('#productDescription')
let btn_concluir = document.querySelector('#btn_concluir')




let cartoes = []

let NovosCards = cartoes.map((el)=>{
   
})

btn_add.addEventListener('click',(evt)=>{
    const produto = document.createElement('div')
    const DescricaoProduct = document.createElement('p')
    const botaoConcluir = document.createElement('span')
    produto.setAttribute('id','productName')
    produto.setAttribute('class','cards')
    produto.innerHTML = `Lembrete:<br/> ${CardProduto.value}`

    DescricaoProduct.setAttribute('id','productDescription')
    DescricaoProduct.innerHTML = `Descrição : <br/>${Descricao.value}`
    DescricaoProduct.setAttribute('class','descricao')

   
    

    

    botaoConcluir.innerHTML = `<span id="btn_concluir"  class="material-symbols-outlined ok">
    check_circle
    </span>`
    botaoConcluir.setAttribute('class','ok')
    
    botaoConcluir.addEventListener('click',(evt)=>{
        const classe = document.querySelector('.cards')
        
    })

    


    card.appendChild(produto)
    produto.appendChild(DescricaoProduct)
    produto.appendChild(botaoConcluir)
    

    cartoes.push()

})

btn_add.addEventListener('click',(evt)=>{
    let Imagem = document.querySelector('#novaImagem')

    let NovaImagem = document.createElement('img')
   // novaImagem.setAttribute('id','novaImagem')
    NovaImagem.setAttribute('class','NovaImagem')
    NovaImagem.src = "astronauta2.jpeg"
    
    Imagem.appendChild(NovaImagem)
    
    //Imagem.style.display = "none"
    NovaImagem.style.display = "block";

    

   document.body.style.background = '#FFE4AF'

})


