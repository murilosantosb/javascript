let btn_add = document.querySelector('#btn_add');
let carrinho = document.querySelector('#carrinho-lista');
let totalCarinho = document.querySelector('#total-carrinho');
let nomeProduto = document.querySelector('#inome');
let produtoPreco = document.querySelector('#ipreco');

let iconeCarrinho = document.querySelector('#icone_Carrinho')

iconeCarrinho.addEventListener('click', (evt) => {
    let carro = document.querySelector('.carrinho');

    if(carro.style.display === 'none' || carro.style.display == '' ){
        carro.style.display = 'block'
      }else{
        carro.style.display = 'none'
      }
})

let carrinhoDeCompras = [];

btn_add.addEventListener('click', (evt)=> {
    let novoProduto = document.createElement('li');
    let preco = document.createElement('p');
    preco.setAttribute('class', 'produto');
    preco.innerHTML = `Preço: ${produtoPreco.value} R$ `;
    novoProduto.setAttribute('class', 'produto');
    novoProduto.innerHTML = `Produto: ${nomeProduto.value}`;
    carrinho.appendChild(novoProduto);
    novoProduto.appendChild(preco);

    carrinhoDeCompras.push(parseFloat(produtoPreco.value)); // Converter String Para Number

    let valorTotal = carrinhoDeCompras.reduce((anterior, atual) => {
        return anterior + atual;
    }, 0);

    totalCarinho.innerHTML = ` ${valorTotal.toFixed(2)} R$`;
});




