  const products = [
            { id: 1, image: "images/image-baklava-desktop.jpg", name: "corn", desc: "waffle with berries", numOfStock: 5, price: 5.5 },
            { id: 2, image: "images/image-panna-cotta-tablet.jpg", name: "pap", desc: "waffle with berries", numOfStock: 7, price: 6.5 },
            { id: 3, image: "images/image-waffle-desktop.jpg", name: "waffle", desc: "waffle with berries", numOfStock: 4, price: 4.5 },
            { id: 4, image: "images/image-baklava-desktop.jpg", name: "waffle", desc: "waffle with berries", numOfStock: 3, price: 6.5 },
            { id: 5, image: "images/image-baklava-desktop.jpg", name: "orange", desc: "waffle with berries", numOfStock: 9, price: 2.5 },
            { id: 6, image: "images/image-waffle-desktop.jpg", name: "waffle", desc: "waffle with berries", numOfStock: 5, price: 7.5 }
        ];

        const cart = [];

        function renderProducts() {
            const container = document.getElementById("product-list");
            container.innerHTML = "";
            products.forEach(prod => {
                container.innerHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <img src="${prod.image}" alt="${prod.name}" class="card-img-top product-img">
                            <div class="card-body text-center">
                                <p class="card-text text-muted">${prod.name}</p>
                                <h5 class="card-title">${prod.desc}</h5>
                                <h6 class="text-danger">$${prod.price}</h6>
                                <button class="cart-btn w-100 mt-2" onclick="addToCart(${prod.id})">
                                    <img src="images/icon-add-to-cart.svg" alt="cart icon">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        function addToCart(id) {
            if (cart.some(item => item.id === id)) {
                changenum('plus', id);
            } else {
                const prod = products.find(item => item.id === id);
                cart.push({ ...prod, numOfItem: 1 });
            }
            updatecart();
        }

        function changenum(action, id) {
            cart.forEach(item => {
                if (item.id === id) {
                    if (action === "plus" && item.numOfItem < item.numOfStock) item.numOfItem++;
                    if (action === "minus" && item.numOfItem > 1) item.numOfItem--;
                }
            });
            updatecart();
        }

        function removeItem(id) {
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) cart.splice(index, 1);
            updatecart();
        }

        function updatecart() {
            const cartItems = document.getElementById("cart-items");
            const numOfItem = document.querySelector(".numofitem");
            const totalPricee = document.querySelector(".totalprice");

            cartItems.innerHTML = "";
            let totalGoods = 0;
            let totalPrice = 0;

            cart.forEach(item => {
                totalGoods += item.numOfItem;
                totalPrice += item.price * item.numOfItem;

                cartItems.innerHTML += `
                    <div class="cart-item d-flex justify-content-between align-items-center">
                        <div>
                            <h6>${item.name}</h6>
                            <div class="d-flex align-items-center gap-3">
                                <small>${item.numOfItem}x @$${item.price}</small>
                                <strong>$${(item.numOfItem * item.price).toFixed(2)}</strong>
                                <div class="btn-group">
                                    <button class="btn btn-sm btn-outline-danger" onclick="changenum('minus', ${item.id})">-</button>
                                    <button class="btn btn-sm btn-outline-dark" disabled>${item.numOfItem}</button>
                                    <button class="btn btn-sm btn-outline-success" onclick="changenum('plus', ${item.id})">+</button>
                                </div>
                            </div>
                        </div>
                        <img src="images/icon-remove-item.svg" alt="remove" class="remove-btn" onclick="removeItem(${item.id})">
                    </div>
                `;
            });

            numOfItem.innerHTML = `Items: ${totalGoods}`;
            totalPricee.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
        }

        window.onload = () => {
            renderProducts();
        };