var menu = document.querySelector('#mobile-menu')
var menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    loop: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});