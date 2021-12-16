
  window.addEventListener('DOMContentLoaded', () => {
    const navbarHiddenItem = document.querySelector('.navbar-hidden_item'),
        navbarHiddenLink = document.querySelectorAll('.navbar-hidden_link'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navbarHiddenItem.classList.toggle('navbar-hidden_item_active');
    });

    navbarHiddenLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            navbarHiddenItem.classList.toggle('navbar-hidden_item_active');
        });
    });
});