document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search-bar input');
    const serviceItems = document.querySelectorAll('.service-item');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        serviceItems.forEach(function(item) {
            const serviceName = item.querySelector('p').textContent.toLowerCase();
            if (serviceName.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems[0].addEventListener('click', function() {
        window.location.href = '../3/index.html'; // Replace with appropriate page if needed
    });

    serviceItems[1].addEventListener('click', function() {
        window.location.href = 'service-selection.html'; // Replace with appropriate page if needed
    });

    serviceItems[2].addEventListener('click', function() {
        window.location.href = 'service-selection.html'; // Replace with appropriate page if needed
    });
});
