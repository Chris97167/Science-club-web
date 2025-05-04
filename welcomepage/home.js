// This JavaScript file will handle the toggle menu functionality (if needed).

// Example: Toggle navigation menu visibility for mobile devices
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show-menu');
};

// Attach toggleMenu function to a button or icon
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
