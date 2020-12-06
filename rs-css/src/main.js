/* eslint-disable linebreak-style */
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
  htmlText,
} from './variables';

import './style.css';
// import './../assets/highlight/styles/an-old-hope.css';
// import './../assets/highlight/highlight.pack.js';

import { levels } from './levels';
import { codeHtml } from './codeHtml';
import { planetsForDisplay } from './planetsForDisplay';
import hljs from '../assets/highlight/highlight.pack';
import { hintList } from './hint';

let menuIsOpen = false;
const menu = [...document.querySelector('.mobile-menu-list').children];
const resetBtn = document.querySelector('.reset_btn');
const display = document.querySelector('.visual__wrapper');
const burgerBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-container');
const mobileMenuMask = document.querySelector('.mobile-menu-wrapper');

let numberLevel = +loadLevelFromStorage() || 1;

// local Storage
function saveLevelInStorage(numberLevel) {
  localStorage.setItem('selectorLevel', numberLevel);
}

function loadLevelFromStorage() {
  return localStorage.getItem('selectorLevel');
}

function saveLevelStatusInStorage(level, status) {
  localStorage.setItem(`lvl-${numberLevel}`, status);
}

function getLevelStatusInStorage() {
  // let statusInStorage = new Map();
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key.match(/lvl/)) {
      document.querySelector(`[data-id="${key}"]`).firstChild.classList.add(`${localStorage.getItem(key)}`);
    }
    localStorage.getItem(`${numberLevel}`);
  }
}

// подсказка
function showHint() {
  const picturePlanets = [...display.children];
  const obj = hintList[numberLevel - 1];
  const hint = document.querySelector('.hint');

  picturePlanets.forEach((item) => {
    const whatItem = item.className;
    item.addEventListener('mouseover', () => {
      hint.style.opacity = 1;
      hint.innerText = obj[`${whatItem}`];
    });
    item.addEventListener('mouseout', () => {
      hint.style.opacity = 0;
    });
  });
}

enterBtn.addEventListener('click', () => {
  checkAnswer();
});

document.querySelector('.enter__code__input').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    checkAnswer();
  }
});

resetBtn.addEventListener('click', () => {
  // localStorage.clear();
  // generateLevel(1);
  // window['location'] = location;
});
// меню

function updateLevelInMenu(numberLevel) {
  const levelsListinMenu = [...document.querySelector('.mobile-menu-list').children];
  levelsListinMenu.forEach((item) => {
    item.classList.remove('active-level');
  });
  document.querySelector(`[data-id="lvl-${numberLevel}"]`).classList.add('active-level');
}

function clearDisplay() {
  const wrapperHtml = document.querySelector('.html_page__window');
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  while (wrapperHtml.firstChild) {
    wrapperHtml.removeChild(wrapperHtml.firstChild);
  }
}

function updateDisplay() {
  const obj = planetsForDisplay[numberLevel - 1];
  display.innerHTML = obj.displayPlanet;
}

// обновление блока с инфой
function updateDescription(numberLevel) {
  const obj = levels[numberLevel - 1];
  describeTitle.innerText = obj.helpTitle;
  doThis.innerText = obj.doThis;
  headingLevel.innerText = obj.level;
  describeHeading.innerText = obj.selectorName;
  syntax.innerText = obj.syntax;
  describeHint.innerHTML = obj.describe;
  examples.innerHTML = obj.examples;
}
// обновление блока с кодом
function updateHtmlText(numberLevel) {
  const obj = codeHtml[numberLevel - 1];
  htmlText.innerHTML = obj.htmlCode;
  hljs.initHighlightingOnLoad();
}

function showWinAnimation() {
  const congr = 'You did it!';
  display.innerHTML = planetsForDisplay[10].congratulations;
  document.querySelector('deathstar').classList.add('deathstar--win');
  input.value = '';
  input.classList.add('enter__code__input--win');
  display.classList.add('visual__wrapper--win');
  htmlText.innerHTML = `<pre class="language-html"><code>&lt;div class="youUnderestimateMyPower"&gt; 
                        <p>You destroyed the Universe <br>and defeated css-selectors!</p>&lt;/div&gt;</code></pre>`;
  const printChar = (select, i = 0) => {
    if (i === congr.length) return;
    setTimeout(() => {
      input.value += congr[i];
      printChar(select, i + 1);
    }, 300);
  };
  printChar(congr);
}
// проверить ответ с введенным
function checkAnswer() {
  const obj = levels[numberLevel - 1];
  const check = document.querySelector('.active-level').firstChild;

  if (input.value === obj.selector && numberLevel === 10) {
    check.classList.remove('check-undone');
    check.classList.add('check-done');
    saveLevelStatusInStorage(numberLevel, check.className);
    console.log('win');
    showWinAnimation();
  } else if (input.value === obj.selector) {
    check.classList.remove('check-undone');
    check.classList.add('check-done');
    saveLevelStatusInStorage(numberLevel, check.className);
    document.querySelectorAll(obj.selector).forEach((item) => {
      console.log(item);
    });
    numberLevel += 1;
    input.value = '';
    generateLevel(numberLevel);
  } else {
    document.querySelector('.enter__code__input').classList.add('input__false');
    document.querySelector('.input__wrapper').classList.add('lose-animation');
    setTimeout(() => {
      document.querySelector('.input__wrapper').classList.remove('lose-animation');
      document.querySelector('.enter__code__input').classList.remove('input__false');
      input.value = '';
    }, 500);
  }
  // winAnimation();
  //        // generateLevel();
  //     } else {
  //         loseAnimation()
  //     }
  // return numberLevel;
}

// function winAnimation() {
// }

// function loseAnimation() {
// }

function showHelp() {
  input.value = '';
  const selector = levels[numberLevel - 1];
  const printChar = (select, i = 0) => {
    if (i === selector.length) return;
    setTimeout(() => {
      input.value += selector[i];
      printChar(select, i + 1);
    }, 300);
  };
  printChar(selector);
  const check = document.querySelector('.active-level').firstChild;
  check.classList.remove('check-undone');
  check.classList.add('check-done-with-hint');

  saveLevelStatusInStorage(numberLevel, check.className);
}

helpBtn.addEventListener('click', () => {
  showHelp();
});

// BURGER MENU----------------------------------------------------

function openMenu() {
  menuIsOpen = true;
  mobileMenuMask.classList.add('mobile-menu-mask');
  mobileMenu.classList.add('mobile-menu-container-anim');
  burgerBtn.classList.add('mobile-menu-btn-rotation');
}

function closeMenu() {
  menuIsOpen = false;
  mobileMenu.classList.remove('mobile-menu-container-anim');
  burgerBtn.classList.remove('mobile-menu-btn-rotation');
  mobileMenuMask.classList.remove('mobile-menu-mask');
  mobileMenuMask.classList.remove('mobile-menu-mask');
}

burgerBtn.addEventListener('click', () => {
  if (menuIsOpen === false) {
    mobileMenuMask.classList.add('mobile-menu-mask');
    setTimeout(openMenu, 0);
  } else {
    mobileMenuMask.classList.remove('mobile-menu-mask');
    setTimeout(closeMenu, 0);
  }
});
function addListenerToMenu() {
  menu.forEach((item, index) => {
    item.addEventListener('click', () => {
      generateLevel(index + 1);
      saveLevelInStorage(index + 1);
      numberLevel = index + 1;
    });
  });
  return numberLevel;
}

generateLevel(numberLevel);

function generateLevel(numberLevel) {
  addListenerToMenu();
  getLevelStatusInStorage();
  clearDisplay(numberLevel);
  updateDisplay();
  updateDescription(numberLevel);
  updateHtmlText(numberLevel);
  hljs.initHighlightingOnLoad();
  updateLevelInMenu(numberLevel);
  saveLevelInStorage(numberLevel);
  showHint();
  // sendAnwser();
}
