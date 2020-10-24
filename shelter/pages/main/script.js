const burgerBtn = document.querySelector('.mobile-menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu-container'),
      overlay = document.querySelector('.overlay'),
      overlayActive = document.querySelector('.overlay overlay-active');

let modalIsOpen = false;
let menuIsOpen = false;

//BURGER MENU

burgerBtn.addEventListener('click', () => {
    if (menuIsOpen === false) openMenu();
    else closeMenu();
});

function openMenu(){
    menuIsOpen = true;
    mobileMenu.classList.add("mobile-menu-container-anim");
    burgerBtn.classList.add("mobile-menu-btn-rotation");
    overlay.classList.add('overlay-active');
}

function closeMenu(){
    menuIsOpen = false;
    mobileMenu.classList.remove("mobile-menu-container-anim");
    burgerBtn.classList.remove("mobile-menu-btn-rotation");
    overlay.classList.remove('overlay-active');
}

overlay.addEventListener('click', () => {
    console.log('Клик оверлей')
    if (modalIsOpen === true) closeModal();
    if ( menuIsOpen === true) closeMenu();
})
    
//MODAL

const petsCards = document.querySelectorAll('.pets-card'),
      closeModalButtons = document.querySelectorAll('.btn--close'),
      modal = document.querySelector('.modal'),
      modalWindow = document.querySelector('.modal-window');

petsCards.forEach(item => {
    item.addEventListener('click', () => {
        openModal(modal);
    })
})

closeModalButtons.forEach(item => {
    item.addEventListener('click', () => {
        closeModal(modal);
    })
})

function openModal(modal) {
    modalIsOpen = true;
    modal.classList.add('modal-open');
    overlay.classList.add('overlay-active');
}

function closeModal(modal) {
    modalIsOpen = false;
    modal.classList.remove('modal-open');
    overlay.classList.remove('overlay-active');
}



