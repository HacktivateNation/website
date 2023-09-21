const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

// Function to toggle the menu
const toggleMenu = () => {
    menu.classList.toggle('hidden');
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('flex-col');

        menu.classList.add('space-x-4');
    }
};


// Toggle menu visibility on button click
menuButton.addEventListener('click', toggleMenu);


// Close the menu when clicking outside the menu or on a menu item, only if the hamburger menu is visible
document.addEventListener('click', (e) => {
    if (!menuButton.classList.contains('hidden') && !menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.add('hidden');
        menu.classList.remove('flex-col');
        menu.classList.add('space-x-4');
    }
});


// Close the menu when a menu item is clicked, only if in hamburger mode
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && !menuButton.classList.contains('hidden')) {

        menu.classList.add('space-x-4');
    }
});


// Update menu layout based on screen size
const updateMenuLayout = () => {
    if (window.innerWidth >= 1024) {
        menu.classList.remove('hidden', 'flex-col');
        menu.classList.add('flex', 'space-x-4');
        menuButton.classList.add('hidden');
    } else {
        menu.classList.add('hidden');
        menuButton.classList.remove('hidden');
    }
};


window.addEventListener('resize', updateMenuLayout);


// Initial setting based on screen size
updateMenuLayout();