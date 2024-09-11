/*document.addEventListener('DOMContentLoaded', function() {
    const confirmCheckoutButton = document.querySelector('.checkout-button');
    confirmCheckoutButton.addEventListener('click', function() {
        alert('Checkout confirmed! Click OK to be redirected back to Home Page');
		window.location.href = '../2/index.html';
    });
});
*/

function slideOutAndRedirect() {
    document.body.style.animation = 'slideOut 1s forwards';
    setTimeout(function() {
        window.location.href = '../2/index.html'; // Replace with your next page's filename
    }, 100); // Wait for the slide out animation to complete
}

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.checkout-button');
    loginButton.addEventListener('click', function() {
		alert('Checkout confirmed! Click OK to be redirected back to Home Page');
        setTimeout(slideOutAndRedirect, 50);
    });
});