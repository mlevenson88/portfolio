/* select the class attached to the button */
const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

/* shorten the var names */
const containerAllStyle = containerAll.style;
const bodyClassList = document.body.classList;

/* add class .nav-is-open to the body when button is clicked */
navToggle.addEventListener('click', function(){
    containerAllStyle.transition = 'transform 250ms ease-in-out';
    bodyClassLis.toggle('nav-is-open');
})

nav.addEventListener('click', function(){
    containerAllStyle.transition = '0ms';
    bodyClassLis.remove('nav-is-open')
})