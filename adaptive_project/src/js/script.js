// jshint esversion:6

window.addEventListener('DOMContentLoaded', () => {
    const navbarItem = document.querySelector('.navbar_item'),
        navbarLink = document.querySelectorAll('.navbar_link'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navbarItem.classList.toggle('navbar_item_active');
    });

    navbarLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            navbarItem.classList.toggle('navbar_item_active');
        });
    });
});