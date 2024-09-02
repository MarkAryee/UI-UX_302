/*
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', function() {
        alert('Login button clicked!');
		window.location.href = '../2/index.html';
    });
});
*/


// Function to trigger the slide out animation and redirect
        function slideOutAndRedirect() {
            document.body.style.animation = 'slideOut 1s forwards';
            setTimeout(function() {
                window.location.href = '../1.5/signup.html'; // Replace with your next page's filename
            }, 1000); // Wait for the slide out animation to complete
        }

        // Trigger slide out and redirect after 3 seconds
		
        //setTimeout(slideOutAndRedirect, 3000);
		
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', function() {
        setTimeout(slideOutAndRedirect, 100);
    });
});		
		
		
		
		
		
		
		