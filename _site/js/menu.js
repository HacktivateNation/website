const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('.menu-item');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Toggle 'hidden' class for all elements with class 'menu-item'
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })
});