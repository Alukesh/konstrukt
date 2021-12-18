let linkburger = document.querySelector('.linksBurger');
let links = document.querySelector('.footer__info-links');

linkburger.addEventListener('click', function () {
    linkburger.classList.toggle('active');
    links.classList.toggle('active');

});

let navburger = document.querySelector('.navBurger');
let nav = document.querySelector('.header__navbar');

navburger.addEventListener('click', function () {
    navburger.classList.toggle('active');
    nav.classList.toggle('active');
});