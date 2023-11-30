const Selecao_Principal = document.querySelector('#Selecao_Principal')
const todoProdutos = document.querySelector('#todoProdutos')




const divNova = document.createElement('div')
divNova.setAttribute('id','todoProdutos')
divNova.innerHTML = `
<div class="Produto">
<img src="./img/product-1.jpg" alt="">
<p >Camisa Larga com Bolsos</p>
<p>70,00R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho">  shopping_cart </span>
</div>

<div>
<img src="./img/product-2.jpg" alt="">
<p>Casaco Reto com Lã</p>
<p>185,00R$</p>
<span class="material-symbols-outlined s"  id="adicionar_ao_carrinho">  shopping_cart </span>
</div>
<div>
<img src="./img/product-3.jpg" alt="">
<p>Jaqueta com Efeito</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-4.jpg" alt="">
<p>Sobretudo em Mescla de Lã</p>
<p>159,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-5.jpg" alt="">
<p>Camisa Larga Acolchoada de Veludo</p>
<p>79,99R$</p>
<span class="material-symbols-outlined"  id="adicionar_ao_carrinho">  shopping_cart </span>
</div>
<div>
<img src="./img/product-6.jpg" alt="">
<p>Camiseta Casaco de Lã com Boltões</p>
<p>199,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-7.jpg" alt="">
<p>Casaco Fino</p>
<p>79,99R$</p>
<span class="material-symbols-outlined" id="adicionar_ao_carrinho" >  shopping_cart </span>
</div>
<div>
<img src="./img/product-8.jpg" alt="">
<p>Casaco</p>
<p>149,99R$</p>
<span class="material-symbols-outlined"  id="adicionar_ao_carrinho">  shopping_cart </span>`

Selecao_Principal.appendChild(divNova)

const btn_carinho = [...document.querySelectorAll('#adicionar_ao_carrinho')]

btn_carinho.map((el)=>{
   el.addEventListener('click',(evt)=>{
    alert('ddd')
   })
})


