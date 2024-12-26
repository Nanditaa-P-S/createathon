let cart = [];
let cartCounter = document.getElementById('cart-counter');
let cartModal = document.getElementById('cart-modal');
let cartItemsContainer = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');

function addToCart(productName, productPrice)
{
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function updateCart() {
    cartCounter.innerText = cart.length;
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = ${item.name} - ${item.price};
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });
    totalPriceElement.innerText = ${totalPrice};
}

function closeCart() {
    cartModal.style.display = 'none';
}

function checkout() {
    alert('Proceeding to checkout...');
    cart = [];
    updateCart();
    closeCart();
}

function buyNow(productName) {
    alert(Proceeding to buy: ${productName});
}
