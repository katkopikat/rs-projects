//import {pets} from './pets.js';

const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]

const burgerBtn = document.querySelector('.mobile-menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu-container'),
      mobileMenuMask = document.querySelector('.mobile-menu-wrapper'),
      overlay = document.querySelector('#overlay'),
      btnCloseModal = document.querySelector('.btn--close'),
      slider = document.querySelector('.pets-grid');
      //overlayActive = document.querySelector('.overlay overlay-active');

let modalIsOpen = false;
let menuIsOpen = false;

//BURGER MENU----------------------------------------------------
burgerBtn.addEventListener('click', () => {
    if (menuIsOpen === false) {
        mobileMenuMask.classList.add("mobile-menu-mask");
        setTimeout(openMenu, 0);
    }
    else {
        mobileMenuMask.classList.add("mobile-menu-mask");
        setTimeout(closeMenu, 0);
}
});

function openMenu(){
    menuIsOpen = true;
    //mobileMenuMask.classList.add("mobile-menu-mask");
    mobileMenu.classList.add("mobile-menu-container-anim");
    burgerBtn.classList.add("mobile-menu-btn-rotation");
    overlay.classList.add('overlay-active');
    document.body.classList.add('noscroll');
}

function closeMenu(){
    menuIsOpen = false;
   //mobileMenuMask.classList.remove("mobile-menu-mask");
    mobileMenu.classList.remove("mobile-menu-container-anim");
    burgerBtn.classList.remove("mobile-menu-btn-rotation");
    overlay.classList.remove('overlay-active');
    document.body.classList.remove('noscroll');
}


//PETS CARD--------------------------------------------------------
let fullPetsList = []; 
fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

const createPets = () => {
    slider.innerHTML += createPetsCard();
}

createPetsCard = () => {
    let str = '';
    for (let i = 0; i < pets.length; i++) {
        str += `<div class="pets-card swiper-slide card" id="${pets[i].name}">
                <img src="${ pets[i].img }" alt="${ pets[i].name }" id="${pets[i].name}">
                <span class="pet-card-name">${ pets[i].name }</span>
                <button class="btn btn--learn-more" id="${pets[i].name}">Learn more</button>
                </div>`
    }
    return str;
}

createPets(fullPetsList);

//SWIPER --------------------------------------------------------------


//MODAL--------------------------------------------------------------
const petsCards = document.querySelectorAll('.pets-card'),
      closeModalButtons = document.querySelectorAll('.btn--close'),
      modal = document.querySelector('.modal'),
      modalWindow = document.querySelector('.modal-window');

let cardClickId = 0;

function getId(e) {
    e = e || window.event;
    let el = e.target || e.srcElement;
     cardClickId = pets.findIndex(item => item.name === el.id);
     //console.log(cardClickId)
     return cardClickId;
}

petsCards.forEach(petsCard => {
    petsCard.addEventListener('click', () => {
        generateModalContent();
        openModal(modal);
    })
})

function openModal(modal) {
    modalIsOpen = true;
    modal.classList.add('modal-open');
    overlay.classList.add('overlay-active');
    document.body.classList.add('noscroll');
}

function closeModal(modal) {
    modalIsOpen = false;
    modal.classList.remove('modal-open');
    overlay.classList.remove('overlay-active');
    document.body.classList.remove('noscroll');
    clearModal(modal);
}

closeModalButtons.forEach(item => {
    item.addEventListener('click', () => {
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    if (modalIsOpen === true) closeModal(modal);
    if ( menuIsOpen === true) closeMenu();
})

overlay.addEventListener('mouseover', () => {
    btnCloseModal.classList.add('btn--close-active');
})

overlay.addEventListener('mouseout', () => {
    btnCloseModal.classList.remove('btn--close-active');
})

//Генерация контента для модального окна и создание окна
function clearModal(modal) {
    const elem = document.querySelector('.modal-window');
    elem.innerHTML = '';
}
const generateModalContent = () => {
//modalWindow.classList.add('.modal-l')
 getId();
 let i = cardClickId;
 const elem = document.querySelector('.modal-window');
    elem.innerHTML += `<img class="modal-img" src="${ pets[i].img }" alt="${ pets[i].name }">
    <div class="modal-content"> <span class="modal-name">${ pets[i].name}</span> <span class="modal-who-is-it">${ pets[i].type} - ${ pets[i].breed}</span>
        <p class="modal-description">${ pets[i].description}</p>
        <ul class="modal-list">
            <li class="modal-li"><span class="modal-li-bold">Age:</span><span class="modal-age"> ${ pets[i].age}</span></li>
            <li class="modal-li"><span class="modal-li-bold">Inoculations:</span><span class="modal-inoculations"> ${ pets[i].inoculations}</span></li>
            <li class="modal-li"><span class="modal-li-bold">Diseases:</span><span class="modal-diseases"> ${ pets[i].diseases}</span></li>
            <li class="modal-li"><span class="modal-li-bold">Parasites:</span><span class="modal-parasites"> ${ pets[i].parasites}</span></li>
        </ul>
    </div>`
}

if (document.querySelector("body").offsetWidth >= 1280) {
(function () {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 90,
      speed:500,
      
     // pagination: {
      //  el: ".swiper-pagination",
     // },
  
      navigation: {
        nextEl: ".btn--next",
        prevEl: ".btn--back",
      },
    });
  })();

 }

 if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
  // itemsPerPage = 6;
  (function () {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
      speed:500,
      navigation: {
        nextEl: ".btn--next",
        prevEl: ".btn--back",
      },
    });
  })();

 }

 if (document.querySelector("body").offsetWidth < 768) {
    // itemsPerPage = 6;
    (function () {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        speed:500,
        navigation: {
          nextEl: ".btn--next",
          prevEl: ".btn--back",
        },
      });
    })();
  
   }

  
//SLIDER-------------------------------------------------
// let currentItem = 0;
// let isEnabled = true;

// function changeCurrentItem(n) {
// 	currentItem = (n + petsCards.length) % petsCards.length;
// }

// function hideItem(direction) {
// 	isEnabled = false;
// 	petsCards[currentItem].classList.add(direction);
// 	petsCards[currentItem].addEventListener('animationend', function() {
// 		this.classList.remove('active', direction);
// 	});
// }

// function showItem(direction) {
// 	petsCards[currentItem].classList.add('next', direction);
// 	petsCards[currentItem].addEventListener('animationend', function() {
// 		this.classList.remove('next', direction);
// 		this.classList.add('active');
// 		isEnabled = true;
// 	});
// }

// function nextItem(n) {
// 	hideItem('to-left');
// 	changeCurrentItem(n + 1);
// 	showItem('from-right');
// }

// function previousItem(n) {
// 	hideItem('to-right');
// 	changeCurrentItem(n - 1);
// 	showItem('from-left');
// }

// document.querySelector('.btn--back').addEventListener('click', function() {
//         if (isEnabled) {
//             previousItem(currentItem);
//         }
// });
    
// document.querySelector('.btn--next').addEventListener('click', function() {
//         if (isEnabled) {
//             nextItem(currentItem);
//         }
// });


// const swipedetect = (el) => {
  
// 	let surface = el;
// 	let startX = 0;
// 	let startY = 0;
// 	let distX = 0;
// 	let distY = 0;
// 	let startTime = 0;
// 	let elapsedTime = 0;

// 	let threshold = 150;
// 	let restraint = 100;
// 	let allowedTime = 300;

// 	surface.addEventListener('mousedown', function(e){
// 		startX = e.pageX;
// 		startY = e.pageY;
// 		startTime = new Date().getTime();
// 		e.preventDefault();
// 	}, false);

// 	surface.addEventListener('mouseup', function(e){
// 		distX = e.pageX - startX;
// 		distY = e.pageY - startY;
// 		elapsedTime = new Date().getTime() - startTime;
// 		if (elapsedTime <= allowedTime){
// 			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
// 				if ((distX > 0)) {
// 					if (isEnabled) {
// 						previousItem(currentItem);
// 					}
// 				} else {
// 					if (isEnabled) {
// 						nextItem(currentItem);
// 					}
// 				}
// 			}
// 		}
// 		e.preventDefault();
// 	}, false);

// 	surface.addEventListener('touchstart', function(e){
// 		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
// 			if (e.target.classList.contains('left')) {
// 				if (isEnabled) {
// 					previousItem(currentItem);
// 				}
// 			} else {
// 				if (isEnabled) {
// 					nextItem(currentItem);
// 				}
// 			}
// 		}
// 			var touchobj = e.changedTouches[0];
// 			startX = touchobj.pageX;
// 			startY = touchobj.pageY;
// 			startTime = new Date().getTime();
// 			e.preventDefault();
// 	}, false);

// 	surface.addEventListener('touchmove', function(e){
// 			e.preventDefault();
// 	}, false);

// 	surface.addEventListener('touchend', function(e){
// 			var touchobj = e.changedTouches[0];
// 			distX = touchobj.pageX - startX;
// 			distY = touchobj.pageY - startY;
// 			elapsedTime = new Date().getTime() - startTime;
// 			if (elapsedTime <= allowedTime){
// 					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
// 							if ((distX > 0)) {
// 								if (isEnabled) {
// 									previousItem(currentItem);
// 								}
// 							} else {
// 								if (isEnabled) {
// 									nextItem(currentItem);
// 								}
// 							}
// 					}
// 			}
// 			e.preventDefault();
// 	}, false);
// }

// var el = document.querySelector('.carousel');
// swipedetect(el);


