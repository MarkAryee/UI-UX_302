document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.order-button');
    orderButton.addEventListener('click', function() {
        alert('Order button clicked!');
		window.location.href = '../4/index.html';
    });
});
