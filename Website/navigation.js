// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation items and navigation items container
    const navigationItems = document.querySelectorAll('.navigationItem');
    const navigationItemsContainer = document.querySelector('.navigationItemsContainer');

    // Function to handle hover event
    function handleHover(event) {
        const target = event.target;
        const subNavigation = getSubNavigation(target.dataset.target);

        // Clear the navigation items container
        navigationItemsContainer.innerHTML = '';

        // Add sub-navigation items to the container
        if (subNavigation) {
            if (Array.isArray(subNavigation)) {
                subNavigation.forEach(function (item) {
                    const subNavItem = document.createElement('h3');
                    subNavItem.textContent = item.title;
                    subNavItem.addEventListener('click', handleNavigation);

                    // Add event listener for hover effect
                    subNavItem.addEventListener('mouseenter', function () {
                        this.style.color = '#10B35E';
                    });

                    // Add event listener for removing hover effect
                    subNavItem.addEventListener('mouseleave', function () {
                        this.style.color = ''; // Use empty string to remove inline style
                    });

                    navigationItemsContainer.appendChild(subNavItem);
                });
            } else {
                const subNavItem = document.createElement('h3');
                subNavItem.textContent = subNavigation.title;
                subNavItem.addEventListener('click', handleNavigation);
                navigationItemsContainer.appendChild(subNavItem);
            }
        }
        // Add CSS styles to sub-navigation items
        const subNavItems = navigationItemsContainer.querySelectorAll('h3');
        subNavItems.forEach(function (subNavItem) {
            // Add your desired CSS styles here
            subNavItem.style.color = '#00006A';
            // subNavItem.style.fontWeight = 'bold';
            // ... add more styles as needed
        });
    }

    // Function to handle click event
    function handleNavigation(event) {
        const target = event.target;
        const subNavigationTarget = getSubNavigation(target.dataset.target);

        // Perform navigation based on the target
        if (subNavigationTarget) {
            // Navigate to another page or perform desired action
            console.log('Navigate to', subNavigationTarget.url);
            window.location.href = subNavigationTarget.url;
        }
    }

    // Function to get sub-navigation based on target
    function getSubNavigation(target) {
        // Define your sub-navigation data here
        console.log(target);
        const subNavigationData = {
            home: { url: 'index.html' },
            company: {url: 'about.html'},
            collaboration: { url: 'partners.html'},
            // company: [
            //     { title: 'About Us', url: 'about.html' },
            //     { title: 'Collaboration', url: '/company/mission.html' },
            //     { title: 'Resources', url: '/company/team' },
            //     { title: 'Events', url: '/company/team' },
            //     { title: 'Location', url: '/company/team' }
            // ],
            industries: [
                { title: 'Industry 1', url: '/industries/1' },
                { title: 'Industry 2', url: '/industries/2' },
                { title: 'Industry 3', url: '/industries/3' }
            ],
            solution: [
                { title: 'Solution 1', url: '/solution/1' },
                { title: 'Solution 2', url: '/solution/2' },
                { title: 'Solution 3', url: '/solution/3' }
            ],
            product: [
                { title: 'Product 1', url: '/product/1' },
                { title: 'Product 2', url: '/product/2' },
                { title: 'Product 3', url: '/product/3' }
            ],
            careers: { url: 'careers.html'},
            contact: { url: 'contact.html' }
        };

        return subNavigationData[target];
    }

    // Add event listeners for hover and click events
    navigationItems.forEach(function (item) {
        item.addEventListener('mouseenter', handleHover);
        item.addEventListener('click', handleNavigation);
    });
});