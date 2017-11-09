/* select the class attached to the button */
const navToggle = document.querySelector('.menu-button');

/* add class .nav-is-open to the body when button is clicked */
navToggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-is-open');
})