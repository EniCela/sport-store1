const html2=document.getElementById("produkte1");
const totalprice=document.getElementById("price");
 
const products = [
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

function reduceProducts (){
    const products = JSON.parse(localStorage.getItem('products')) || []
    const acc=[]
    products.forEach(product => {
    const index = acc.findIndex(a=>a.id === product.id)
    if(index>-1){
       acc[index].amount++;
    }
    else{
        acc.push(product)
    }
    })
    return acc;
}
reduceProducts()

function rendercartitems(){
 html2.innerHTML = ``;
 let total=0;
  reduceProducts().forEach((item)=>{
    const print =
    `
    <div class="card">
    <img class="foto" onclick="remove(${item.id})" src="${item.image}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <h5 class="card-title">${item.id}</h5>
      <p class="card-text">${item.category}</p>
      <p class="card-text">${item.price}</p>
      <p>quantity:${item.amount}</p>
       <button class="btn2" onclick="remove(${item.id})">delete</button>     

      </div>
  </div>
    `
    // <button class="btn1" onclick="addtocart(${item.id})">+</button>
    // <button class="btn1" onclick="remove(${item.id})") >-</button>
   html2.innerHTML += print;
   total+=item.price*item.amount
  });
  totalprice.innerHTML =
   `
  Total = ${total.toFixed(2)}$`
} 
 rendercartitems()

const remove = (id)=>{
    let products = localStorage.getItem('products')
    products = JSON.parse(products) || []
    const index = products.findIndex(product => product.id === id)
    products[index] = null
    products = products.filter(product => product)
    products= JSON.stringify(products)
    localStorage.setItem('products', products)
    rendercartitems()
}
 remove();



console.log("eni");
console.log(5)




// function addtocart(id){
//     const selectedProduct = sproducts.find( (product) => product.id===id );
//     let prod;
//     let items = localStorage.getItem('prod')
//     if(!items){
//       items = []
//     //   localStorage.setItem('products',1);
//     // numberproduct.textContent=1;
//     }
//     else{
//       items = JSON.parse(items)
//       // localStorage.setItem('products',productnumber+1);
//       // numberproduct.textContent=productnumber + 1;
//     }
//     items.push(selectedProduct)
//     products = JSON.stringify(items)
//     localStorage.setItem('prod', prod)
//     rendercartitems();
// }
// addtocart();






//  function addtocart(id){
//     const selectedProduct = products.find( (product) => product.id===id );
//     let products;
//     let items = localStorage.getItem('products')
//     let productnumber=parseInt(items);
//     if(!items){
//       items = []
//       localStorage.setItem('products',1);
//     numberproduct.textContent=1;
//     }
//     else{
//       items = JSON.parse(items)
//       localStorage.setItem('products',productnumber+1);
//       numberproduct.textContent=productnumber + 1;
//     }
//     items.push(selectedProduct)
//     products = JSON.stringify(items)
//     localStorage.setItem('products', products)
// }
// addtocart();

//  const addToCart = (id) => {
//     const selectedProduct = products.find(product => product.id === id)
//    let items = localStorage.getItem('products')
//    let products
//    if(!items){
//         items =[]
//         items.push(selectedProduct)
//         products= JSON.stringify(items)
//         localStorage.setItem('products', products)
//     }
//     else{
//         items = JSON.parse(items)
//         items.push(selectedProduct)
//         products= JSON.stringify(items)
//         localStorage.setItem('products', products)
//         }
//         rendercartitems()
        
//     }
// addToCart()
