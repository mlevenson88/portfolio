/*------------------------------------------------------------------*/
/* select the class attached to the button                          */
/*------------------------------------------------------------------*/
const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

/*------------------------------------------------------------------*/
/* shorten the var names                                            */
/*------------------------------------------------------------------*/
const containerAllStyle = containerAll.style;
const bodyClassList = document.body.classList;

/*------------------------------------------------------------------*/
/* add class .nav-is-open to the body when button is clicked        */
/*------------------------------------------------------------------*/
navToggle.addEventListener('click', function(){
    containerAllStyle.transition = 'transform 250ms ease-in-out';
    bodyClassList.toggle('nav-is-open');
})

nav.addEventListener('click', function(){
    containerAllStyle.transition = '0ms';
    bodyClassList.remove('nav-is-open')
})

/*----------------------------------------------------------------------*/
/* open modal when click 'More info', close when click 'X', + animation */
/*----------------------------------------------------------------------*/
const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
    e.preventDefault();

    const modalToggle = e.target.closest('.portfolio-link');
    if(!modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector('.modal-close');

    const modalOpen = _ => {
        modal.classList.add('is-open');
        modal.style.animation = 'modalIn 500ms forwards';
        document.body.style.overflowY = 'hidden';
    }
    
    const modalClose = _ => {
        modal.classList.remove('is-open');
        modal.removeEventListener('animationend', modalClose);
    }

    closeButton.addEventListener('click', _ => {
        modal.style.animation = 'modalOut 500ms forwards';
        modal.addEventListener('animationend', modalClose);
        document.body.style.overflowY = 'scroll';
    })

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';
        }
    })

    modalOpen();
})