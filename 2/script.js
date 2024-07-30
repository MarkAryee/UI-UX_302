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
