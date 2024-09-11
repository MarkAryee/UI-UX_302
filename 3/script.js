/*document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.order-button');
    orderButton.addEventListener('click', function() {
        alert('Order button clicked!');
		window.location.href = '../4/index.html';
    });
});
*/

function slideOutAndRedirect() {
    document.body.style.animation = 'slideOut 1s forwards';
    setTimeout(function() {
        window.location.href = '../4/index.html'; 
    }, 100); // Wait for the slide out animation to complete
}

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.order-button');
    loginButton.addEventListener('click', function() {
        setTimeout(slideOutAndRedirect, 10);
    });
});