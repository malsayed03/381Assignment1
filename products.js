function addToCart(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the product name and price from the clicked product
    const productName = event.target.parentElement.querySelector('.product-name').textContent;
    const productPrice = parseFloat(event.target.parentElement.querySelector('.price').textContent.replace('$', ''));

    // Check if the product is already in the cart
    const cartItem = document.querySelector(`.cart-items li[data-name="${productName}"]`);

    if (cartItem) {
        const quantityElement = cartItem.querySelector('.quantity');
        const currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
    } else {
        const cartItems = document.querySelector('.cart-items');
        const li = document.createElement('li');
        li.dataset.name = productName;
        li.innerHTML = `
            ${productName} - ${productPrice.toFixed(2)} - <span class="quantity">1</span>
            <button class="remove-btn">Remove</button>
        `;
        cartItems.appendChild(li);

        // Add event listener to the remove button
        const removeButton = li.querySelector('.remove-btn');
        removeButton.addEventListener('click', removeFromCart);
    }
    // Show an alert confirming that the product has been added to the cart
    alert(`${productName} has been added to the cart.`);
}

function removeFromCart(event) {
    // Get the parent list element of the clicked remove button
    const cartItem = event.target.parentElement;

    // Get the quantity element
    const quantityElement = cartItem.querySelector('.quantity');

    // Decrement the quantity by one
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity--;

    if (currentQuantity === 0) {
        cartItem.remove();
    } else {
        quantityElement.textContent = currentQuantity;
    }

}
