document.addEventListener('DOMContentLoaded', function() {
    const confirmCheckoutButton = document.querySelector('.checkout-button');
    confirmCheckoutButton.addEventListener('click', function() {
        alert('Checkout confirmed! Click OK to be redirected back to Home Page');
		window.location.href = '../2/index.html';
    });
});
