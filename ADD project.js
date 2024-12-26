let cart = [];
let cartCounter = document.getElementById('cart-counter');
let cartModal = document.getElementById('cart-modal');
let cartItemsContainer = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart array
    cart.push({ name: productName, price: parseFloat(productPrice) });
    updateCart();
}

// Function to toggle the cart modal visibility
function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

// Function to update the cart UI and total price
function updateCart() {
    // Update the cart counter
    cartCounter.innerText = cart.length;
    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    let totalPrice = 0;

    // Loop through cart items to display them in the cart modal
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;  // Use ₹ for price formatting
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

    // Update the total price in the cart modal
    totalPriceElement.innerText = `₹${totalPrice.toFixed(2)}`;
}

// Function to close the cart modal
function closeCart() {
    cartModal.style.display = 'none';
}

// Function to simulate checkout process
function checkout() {
    alert('Proceeding to checkout...');
    cart = []; // Empty the cart
    updateCart(); // Update the UI
    closeCart(); // Close the cart modal
}

// Function for "Buy Now" action
function buyNow(productName) {
    alert(`Proceeding to buy: ${productName}`);
}
