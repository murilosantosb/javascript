const Selecao_Principal = document.querySelector('#Selecao_Principal')
const todoProdutos = document.querySelector('#todoProdutos')





const divNova = document.createElement('div')
divNova.setAttribute('id','todoProdutos')
divNova.innerHTML = `
<div class="Produto">
<img src="./img/product-1.jpg" alt="">
<p >Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho">  shopping_cart </span>
</div>

<div>
<img src="./img/product-2.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined"  id="adicionar_ao_carrinho">  shopping_cart </span>
</div>
<div>
<img src="./img/product-3.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-4.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-5.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined"  id="adicionar_ao_carrinho">  shopping_cart </span>
</div>
<div>
<img src="./img/product-6.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-7.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-8.jpg" alt="">
<p>Camiseta Branca</p>
<p>79,99R$</p>
<span class="material-symbols-outlined"  id="adicionar_ao_carrinho">  shopping_cart </span>`

Selecao_Principal.appendChild(divNova)




