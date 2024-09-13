
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', function() {
        window.location.href = '../2/index.html';;
    });
});	

//SIGN UP BUTTON
function slideOutAndRedirect2() {
            document.body.style.animation = 'slideOut 1s forwards';
            setTimeout(function() {
                window.location.href = '../2/index.html'; // Replace with your next page's filename
            }, 100); // Wait for the slide out animation to complete
        }	
		
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.signup-button');
    loginButton.addEventListener('click', function() {
        setTimeout(slideOutAndRedirect2, 10);
    });
});		
	
		
	
		
		
		
		
		
		
