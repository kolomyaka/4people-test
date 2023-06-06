const hamburgerButton = document.getElementById('menuButton');
const header = document.querySelector('.header');
const body = document.querySelector('body')

const toggleMenu = (event) => {
    event.stopPropagation();
    hamburgerButton.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('disable-scroll')
}

hamburgerButton.addEventListener('click', toggleMenu)