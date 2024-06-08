// js/scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('js-navbar-toggle');
    const menu = document.getElementById('js-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});
