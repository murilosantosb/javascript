const btn_add = document.querySelector('#addCardBtn')
let produtos = document.querySelector('#product-cards')
let card = document.querySelector('.card-container')
let CardProduto = document.querySelector('#productName')
let Descricao = document.querySelector('#productDescription')


let cartoes = []

let NovosCards = cartoes.map((el)=>{
   
})

btn_add.addEventListener('click',(evt)=>{
    const produto = document.createElement('div')
    const DescricaoProduct = document.createElement('p')
    produto.setAttribute('id','productName')
    produto.setAttribute('class','cards')
    produto.textContent = `Nome do Produto:${CardProduto.value}`

    DescricaoProduct.setAttribute('id','productDescription')
    DescricaoProduct.textContent = `Descrição do Produto: <br/>${Descricao.value}`
   // DescricaoProduct.setAttribute('class','cards')


    card.appendChild(produto )
    card.appendChild(DescricaoProduct)

    cartoes.push()

})
