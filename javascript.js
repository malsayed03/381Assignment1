function showAlertSignupError(){
    alert("Placeholder error message from js")
}

//check if emails match doing something like:
//if(form.field1.value == form.field2.value) {
  // values are identical
//}


document.addEventListener('DOMContentLoaded', function() {
  // Get the "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Get the cart display section
  var cartDisplay = document.getElementById('cart-display');

  // Add event listeners to each "Add to Cart" button
  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          // Get the product details
          var productName = event.target.dataset.name;
          var unitPrice = event.target.dataset.price;

          // Check if the product is already in the cart
          var existingCartItem = document.querySelector('.cart-item[data-name="' + productName + '"]');
          if (existingCartItem) {
              // If the product is already in the cart, increase the quantity by 1
              var quantityElement = existingCartItem.querySelector('.quantity');
              var quantity = parseInt(quantityElement.textContent);
              quantityElement.textContent = quantity + 1;
          } else {
              // If the product is not in the cart, create a new cart item
              var cartItem = document.createElement('div');
              cartItem.classList.add('cart-item');
              cartItem.dataset.name = productName;

              // Product name
              var nameElement = document.createElement('span');
              nameElement.textContent = productName;
              cartItem.appendChild(nameElement);

              // Unit price
              var priceElement = document.createElement('span');
              priceElement.textContent = unitPrice;
              cartItem.appendChild(priceElement);

              // Quantity
              var quantityElement = document.createElement('span');
              quantityElement.textContent = '1';
              quantityElement.classList.add('quantity');
              cartItem.appendChild(quantityElement);

              // Remove button
              var removeButton = document.createElement('button');
              removeButton.textContent = 'Remove';
              removeButton.classList.add('remove-button');
              removeButton.addEventListener('click', function() {
                  var quantity = parseInt(quantityElement.textContent);
                  if (quantity > 1) {
                      quantityElement.textContent = quantity - 1;
                  } else {
                      cartDisplay.removeChild(cartItem);
                  }
              });
              removeButton.addEventListener('mouseenter', function() {
                  removeButton.style.backgroundColor = '#ff0000';
              });
              removeButton.addEventListener('mouseleave', function() {
                  removeButton.style.backgroundColor = '';
              });
              cartItem.appendChild(removeButton);

              // Add the cart item to the cart display section
              cartDisplay.appendChild(cartItem);
          }

          // Show an alert confirming that the product has been added to the cart
          alert('Product added to cart: ' + productName);
      });
  });
});
