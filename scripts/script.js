document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.icon-menu');
    const container = document.querySelector('.container');
    const close = document.querySelector('.icon-close');

    hamburger.addEventListener('click', function() {
        container.classList.toggle('menu-open');
    });
    close.addEventListener('click', function() {
        container.classList.remove('menu-open')
    })
});