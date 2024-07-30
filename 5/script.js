document.addEventListener('DOMContentLoaded', function() {
    const confirmCheckoutButton = document.querySelector('.checkout-button');
    confirmCheckoutButton.addEventListener('click', function() {
        alert('Checkout confirmed!');
    });
});
