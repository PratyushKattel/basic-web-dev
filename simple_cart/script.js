const products = [
   { name: "iphone", desc: "a very good mobile phone", price: 10000 },
   { name: "laptop", desc: "A budget but efficient gaming laptop", price: 100000 }
];

const selected_products = document.querySelector('.selected-products');
const total = document.querySelector('.total-info');
const products_div = document.querySelector(".all-products");

let cart = {};   // stores items with quantity

// Render products
products.forEach((product, index) => {
    let div = document.createElement('div');

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p><strong>Price:</strong> Rs ${product.price}</p>
        <button class="add-btn" data-index="${index}">Add to Cart</button>
    `;

    products_div.appendChild(div);
});

// Add to cart (with quantity handling)
products_div.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-btn')) {

        const index = e.target.dataset.index;
        const product = products[index];

        if (cart[product.name]) {
            cart[product.name].quantity += 1;
        } else {
            cart[product.name] = {
                price: product.price,
                quantity: 1
            };
        }

        renderCart();
    }
});

function renderCart() {
    selected_products.innerHTML = "";

    let totalPrice = 0;
    let totalItems = 0;

    for (let item in cart) {
        let { price, quantity } = cart[item];

        totalPrice += price * quantity;
        totalItems += quantity;

        let div = document.createElement('div');
        div.innerHTML = `
            <p>${item} - Rs ${price} × ${quantity}</p>
        `;
        selected_products.appendChild(div);
    }

    total.innerHTML = `
        <p>Total Items: ${totalItems}</p>
        <p>Total Price: Rs ${totalPrice}</p>
    `;
}
