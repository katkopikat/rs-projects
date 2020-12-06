import {
    headingLevel,
    describeHeading,
    describeTitle,
    syntax,
    describeHint,
    examples,
    doThis,
    enterBtn,
    helpBtn,
    input,
    htmlText
} from './variables.js';

import './style.css';
//import './../assets/highlight/styles/an-old-hope.css';
//import './../assets/highlight/highlight.pack.js';

import {levels} from './levels.js';
import {codeHtml} from './codeHtml.js';
import {planetsForDisplay} from './planetsForDisplay.js';
import hljs from './../assets/highlight/highlight.pack.js';
import {hintList} from './hint.js';

let numberLevel = +loadLevelFromStorage() || 1;
generateLevel(numberLevel);


function generateLevel(numberLevel) {
    clearDisplay();
    updateDescription(numberLevel);
    updateHtmlText(numberLevel);
    hljs.initHighlightingOnLoad()
    updateDisplay();
    updateLevelInMenu(numberLevel);
    saveLevelInStorage(numberLevel);
    showHint();
    //sendAnwser();
}
//local Storage
function saveLevelInStorage() {
    localStorage.setItem('selectorLevel', numberLevel);
}

function loadLevelFromStorage() {
    return localStorage.getItem('selectorLevel');
}

//подсказка
function showHint() {
    const picturePlanets = [...document.querySelector('.visual__wrapper').children];
    let obj = hintList[numberLevel - 1];
    const hint = document.querySelector('.hint');

    picturePlanets.forEach(item => {
        let whatItem = item.className;
        item.addEventListener('mouseover', (e) => {
            console.log(whatItem);
            hint.style.opacity = 1;
            hint.innerText = obj[`${whatItem}`];
     })
     item.addEventListener('mouseout', (e) => {
        hint.style.opacity = 0;
 })
})
}

enterBtn.addEventListener('click', () => {
    checkAnswer();
})

helpBtn.addEventListener('click', () => {
    showHelp();
})

document.querySelector('.enter__code__input').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        checkAnswer();
    }
});

//меню
function updateLevelInMenu(numberLevel) {
    const levelsListinMenu= [...document.querySelector('.mobile-menu-list').children];

    levelsListinMenu.forEach(item => {
        item.classList.remove('active-level');
     })
    document.querySelector(`[data-id="lvl-${numberLevel}"]`).classList.add('active-level');
}

function clearDisplay() {
    const wrapper = document.querySelector('.visual__wrapper');
    const wrapperHtml = document.querySelector('.html_page__window');
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    while (wrapperHtml.firstChild) {
        wrapperHtml.removeChild(wrapperHtml.firstChild);
    }
}

function updateDisplay() {
    let obj = planetsForDisplay[numberLevel - 1];
    document.querySelector('.visual__wrapper').innerHTML = obj.displayPlanet;
}
//обновление блока с инфой
function updateDescription(numberLevel) {
    let obj = levels[numberLevel - 1];
    describeTitle.innerText = obj.helpTitle;
    doThis.innerText = obj.doThis;
    headingLevel.innerText = obj.level;
    describeHeading.innerText = obj.selectorName;
    syntax.innerText = obj.syntax;
    describeHint.innerHTML = obj.describe;
    examples.innerHTML = obj.examples;
}

//обновление блока с кодом
function updateHtmlText(numberLevel) {
    let obj = codeHtml[numberLevel - 1];
    htmlText.innerHTML = obj.htmlCode;
    hljs.initHighlightingOnLoad()
}

//проверить ответ с введенным
function checkAnswer() {
    let obj = levels[numberLevel - 1];
    if (input.value === obj.selector) {
        document.querySelector('.active-level').firstChild.classList.remove('check-undone')
        document.querySelector('.active-level').firstChild.classList.add('check-done')
        numberLevel += 1;
        generateLevel(numberLevel)
    } else {
    }
    //winAnimation();
    //        // generateLevel();
    //     } else {
    //         loseAnimation()
    //     }
    //return numberLevel;
}

function winAnimation() {
}

function loseAnimation() {
}

function pushHelpBtn() {
    helpBtn.addEventListener('click', () => {
        showHepl();
    })
}

function showHelp() {
    let selector = levels[numberLevel - 1].selector;
    const printChar = (select, i = 0) => {
        if (i === selector.length) return;
        setTimeout(() => {
            input.value += selector[i];
            printChar(select, i + 1);
        }, 300);
    };
    printChar(selector);
    document.querySelector('.active-level').firstChild.classList.remove('check-undone')
    document.querySelector('.active-level').firstChild.classList.add('check-done-with-hint')
}

let menuIsOpen = false;
const burgerBtn = document.querySelector('.mobile-menu-btn'),
    mobileMenu = document.querySelector('.mobile-menu-container'),
    mobileMenuMask = document.querySelector('.mobile-menu-wrapper');

//BURGER MENU----------------------------------------------------
burgerBtn.addEventListener('click', () => {
    if (menuIsOpen === false) {
        mobileMenuMask.classList.add("mobile-menu-mask");
        setTimeout(openMenu, 0);
    } else {
        mobileMenuMask.classList.remove("mobile-menu-mask");
        setTimeout(closeMenu, 0);
    }
});

function openMenu() {
    menuIsOpen = true;
    mobileMenuMask.classList.add("mobile-menu-mask");
    mobileMenu.classList.add("mobile-menu-container-anim");
    burgerBtn.classList.add("mobile-menu-btn-rotation");
}

function closeMenu() {
    menuIsOpen = false;
    mobileMenu.classList.remove("mobile-menu-container-anim");
    burgerBtn.classList.remove("mobile-menu-btn-rotation");
    mobileMenuMask.classList.remove("mobile-menu-mask");
    mobileMenuMask.classList.remove("mobile-menu-mask")
}