// script.js
/*
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
*/


// Function to trigger the slide out animation and redirect
        function slideOutAndRedirect() {
            document.body.style.animation = 'slideOut 1s forwards';
            setTimeout(function() {
                window.location.href = '../2/index.html'; // Replace with your next page's filename
            }, 1000); // Wait for the slide out animation to complete
        }

        // Trigger slide out and redirect after 3 seconds
		
        //setTimeout(slideOutAndRedirect, 3000);
		

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 12);
			setTimeout(slideOutAndRedirect, 100);
        });
    });
});	
		
		
		
		
		
		
		
