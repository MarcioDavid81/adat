const btnMenu = document.querySelector('.btn-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay-menu');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('active');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});


const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
