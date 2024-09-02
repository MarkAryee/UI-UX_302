document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', function() {
        alert('Checkout button clicked!');
		window.location.href = '../5/index.html';
    });
});
