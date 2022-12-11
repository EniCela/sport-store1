const html=document.getElementById("produkte");
const subtotalEL=document.getElementById("totalprice");
const quantityprod=document.getElementById("quantityproduct");
const numberproduct=document.querySelector(".eni span");


 const sproducts = [
    { id:1001,  name:'adidas#1',   price:150,     image:"img/product1.jpg",   category:'shoes', amount:1},
    { id:1002,  name:'adidas#2',   price:130,     image:"img/product2.jpg",   category:'shoes', amount:1},
    { id:1003,  name:'nike#3',     price:120,     image:"img/product3.jpg",   category:'shoes', amount:1},
    { id:1004,  name:'adidas#4',   price:150,     image:"img/product4.jpg",   category:'shoes', amount:1},
    { id:1005,  name:'adidas#1',   price:250,     image:"img/product5.jpg",   category:'shoes', amount:1},
    { id:1006,  name:'adidas#2',   price:100,     image:"img/product6.jpg",   category:'shoes', amount:1},
    { id:1007,  name:'nike#2',     price:180,     image:"img/product7.jpg",   category:'shoes', amount:1},
    { id:1008,  name:'adidas#4',   price:150,     image:"img/tshirt1.jpg",    category:'shoes', amount:1},
    { id:1009,  name:'adidas#1',   price:150,     image:"img/tshirt2.jpg",    category:'shoes', amount:1},
    { id:1011,  name:'adidas#2',   price:150,     image:"img/tshirt3.jpg",    category:'shoes', amount:1},
    { id:1012,  name:'nike3',      price:150,     image:"img/tshirt4.jpg",    category:'shoes', amount:1},
    { id:1013,  name:'adidas#4',   price:150,     image:"img/tshirt5.jpg",    category:'shoes', amount:1}
]

sproducts.forEach( product => {
    const print =
    `
    <div class="card">
    <img class="foto" src="${product.image}">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h5 class="card-title">ID:${product.id}</h5>
      <p class="card-text">${product.category}</p>
      <p class="card-text"> price:${product.price}</p>
      <a href="#" id="button" class="btn btn-primary" onclick="addtocart(${product.id})">BUY</a>
      </div>
  </div>

    `
    html.innerHTML += print   
});

localStorage.setItem('myproducts',JSON.stringify(sproducts));

function addtocart(id){
    const selectedProduct = sproducts.find( (product) => product.id===id );
    let products;
    let items = localStorage.getItem('products')
    let productnumber=parseInt(items);
    if(!items){
      items = []
    //   localStorage.setItem('products',1);
    // numberproduct.textContent=1;
    }
    else{
      items = JSON.parse(items)
      // localStorage.setItem('products',productnumber+1);
      // numberproduct.textContent=productnumber + 1;
    }
    items.push(selectedProduct)
    products = JSON.stringify(items)
    localStorage.setItem('products', products)    
}
