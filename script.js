
let carrinho = [];

const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function render(){

document.getElementById("grid").innerHTML =
produtos.map((p,i)=>`
<div class="card">
<img src="${p.img}">
<h3>${p.nome}</h3>
<p>R$ ${p.preco}</p>
<button class="add" onclick="add(${i})">+</button>
</div>
`).join("");

renderCart();
}

function add(i){

let item = carrinho.find(c=>c.nome===produtos[i].nome);

if(item){
item.qtd++;
}else{
carrinho.push({...produtos[i],qtd:1});
}

renderCart();
}

function plus(i){
carrinho[i].qtd++;
renderCart();
}

function minus(i){
carrinho[i].qtd--;

if(carrinho[i].qtd<=0){
carrinho.splice(i,1);
}

renderCart();
}

function renderCart(){

document.getElementById("cart").innerHTML =
carrinho.map((c,i)=>`
<div class="item">
<span>${c.nome} x${c.qtd}</span>

<div>
<button class="btn plus" onclick="plus(${i})">+</button>
<button class="btn minus" onclick="minus(${i})">-</button>
</div>

</div>
`).join("");
}

render();