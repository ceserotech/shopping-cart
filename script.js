
const container = document.querySelector(".items-container")

const items = document.querySelector(".items")


// displaying products avaliable
for (let i = 0; i < products.length; i++) {

    const goods = container.innerHTML += `
            <div class="items">
                <div class="imgs">
                    <img src="${products[i].image}" alt="">
                    <button class="my-cart-btn" onclick="addToCart(${products[i].id})">
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

// cart
const cart = [];
// adding to cart
function addToCart(id) {

    if (cart.some((item) => item.id === id)) {

        changenum('plus', id)
    } else {
        const prod = products.find((item) => item.id === id)

        cart.push({
            ...prod,
            numOfItem: 1,
        })
    }
    updatecart()
}

// cart update function
function updatecart() {
    add()
    updatePrice()
}

// displaying items in cart
function add() {
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = ""
    cart.forEach((items) => {
        cartItems.innerHTML += `
     <div class="cart-details">
                    <div class="item-name">
                        <h4>${items.name}</h4>
                        <div class="details">
                            <h5>${items.numOfItem}x</h5>
                            <p>@$${items.price}</p>
                            <p>$5.5</p>
                             <div class="my-btn">
                                <div class="decr" onclick="changenum('minus', ${items.id})">
                                    <img src="images/icon-decrement-quantity.svg" alt="">
                                </div>
                                <p>${items.numOfItem}</p>
                                <div class="decr" onclick="changenum('plus', ${items.id})">
                                    <img src="images/icon-increment-quantity.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rem-icon" onclick="removeItem(${items.id})">
                        <img src="images/icon-remove-item.svg" alt="">
                    </div> 
                </div>
    `
    })
}

// removing item from cart with button
function removeItem(ids) {
    carts = cart.filter((item) => item.id !== ids)
    console.log(carts)
    updatecart()
   
}

// udating number of goods in the cart
function changenum(action, id) {


    cart.map((item) => {
        let numOfItems = item.numOfItem
        if (item.id == id) {
            if (action === "plus" && item.numOfItem < item.numOfStock) {
                item.numOfItem++
            } else if (item.numOfStock > 1 && action === "minus") {
                item.numOfItem--
            }
        }
        return {
            ...item,
            numOfItems,
        }
    })

    updatecart()
}

function updatePrice() {
    const numOfItem = document.querySelector(".numofitem");
    const totalPricee = document.querySelector(".totalprice");
    let totalPrice = 0
    let totalGoods = 0
    cart.forEach((item) => {
        totalGoods += item.numOfItem;
        totalPrice += item.price * item.numOfItem
    })
    numOfItem.innerHTML = "numver of item= " + totalGoods
    totalPricee.innerHTML = "total price = $" + totalPrice
}


