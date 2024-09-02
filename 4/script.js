/*document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', function() {
        alert('Checkout button clicked!');
		window.location.href = '../5/index.html';
    });
});
*/

function slideOutAndRedirect() {
    document.body.style.animation = 'slideOut 1s forwards';
    setTimeout(function() {
        window.location.href = '../5/index.html'; // Replace with your next page's filename
    }, 1000); // Wait for the slide out animation to complete
}

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.checkout-button');
    loginButton.addEventListener('click', function() {
        setTimeout(slideOutAndRedirect, 100);
    });
});
