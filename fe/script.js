/* ////////////////////////////////PAGAR*/
let productList = [];
let carrito = [];
let total = 0;
///este es mio
function add(productId,price){

  const product = productList.find(p => p.id === productId);
  product.stock--;

  console.log(productId,price);
  carrito.push(productId);
  total = total + price;
  document.querySelector("#checkout").innerHTML = `pagar $${total}`
  displayProducts();
}

async function pay() {
  try{
      const productList = await (await fetch("/api/pay",{
          method: "post",
          body: JSON.stringify(carrito),
          headers: {
              "Content-Type": "application/json"
          }
      })).json();
  }
  catch {
      window.alert("Sin stock");
  }

  carrito = [];
  total = 0;
  await fetchProducts();
  document.querySelector("#checkout").innerHTML = `Pagar $${total}`
}
//---------------------------------------------------------------------------------------------------------

function displayProducts(){

  let productsHTML = '';
  productList.forEach(p => {

      let buttonHTML = `<button class="button menu__button" onclick="add(${p.id},${p.price})">
      <i class='bx bx-cart-alt'></i>
  </button>`;

  if(p.stock <= 0){
    buttonHTML = `<button disable class="button menu__button" onclick="add(${p.id},${p.price})">
      <i class='bx bxs-x-circle'></i>
  </button>`;
  };

    productsHTML +=
      `<div class="tienda__content">
                <img src="${p.image}" alt="" class="tienda__img">
                <h3 class="tienda__nombre"> ${p.name}</h3>
                <span class="tienda__detail">Hecha de algodon</span>
                <span class="tienda_precio">$ ${p.price}</span>
                ${buttonHTML}
      </div> `
  });

  document.querySelector('#page-content').innerHTML = productsHTML;

}

async function fetchProducts(){
  productList = await (await fetch("/api/products")).json();
  displayProducts(); 
}

window.onload = async() => {
   
    await fetchProducts();
  }
