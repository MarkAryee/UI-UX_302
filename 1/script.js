document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', function() {
        alert('Login button clicked!');
		window.location.href = '../2/index.html';
    });
});