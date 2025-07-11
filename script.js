console.log(products)
const container = document.querySelector(".items-container")
const items = document.querySelector(".items")

for (let i = 0; i < products.length; i++) {
    
    const goods = container.innerHTML += `
                <div class="items">
                   <div class="imgs">
                        <img src="${products[i].image}" alt="">
                        <button onclick="addToCart(${products[i].id})">
                            <img src="images/icon-add-to-cart.svg" alt="">
                            Add to Cart
                        </button>

                    </div>
                    <p>${products[i].name}</p>
                    <h4>${products[i].desc}</h4>
                    <h3>$${products[i].price}</h3>
                </div>
    `
    
}

const cart =[];

function addToCart(id){
    const prod = products.find((item) => item.id === id)
    console.log(prod);
    cart.push(prod)
    console.log(cart)
    dd()
}

function dd(){


cart.forEach((items)=>{
    
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML += `
     <div class="cart-details">
                    <div class="item-name">
                        <h4>${items.name}</h4>
                        <div class="details">
                            <h5>1x</h5>
                            <p>@$${items.price}</p>
                            <p>$5.5</p>
                        </div>
                    </div>
                    <div class="rem-icon">
                        <img src="images/icon-remove-item.svg" alt="">
                    </div> 
                </div>
    `
})
}
// container.append(goods)

// products.forEach((item)=>{
//     const goods = `<div>
//                    <div class="imgs">
//                         <img src="${item.image}" alt="">
//                         <button>
//                             <img src="images/icon-add-to-cart.svg" alt="">
//                             Add to Cart
//                         </button>

//                     </div>
//                     <p>${item.name}</p>
//                     <h4>${item.desc}</h4>
//                     <h3>$${item.price}</h3>
//                     </div>
//     `
//     container.append(goods)
// })

