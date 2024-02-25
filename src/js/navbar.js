const navbar = document.getElementById('navbar');
const body = document.body;

function mobileToggle() {
    navbar.classList.toggle('active');
    body.classList.toggle('noscroll');
}
