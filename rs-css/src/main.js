/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import {
  headingLevel, describeHeading, describeTitle, syntax, describeHint, examples, doThis,
  enterBtn, helpBtn, input, htmlText, resetBtn, display, burgerBtn, mobileMenu,
  mobileMenuMask, menu, hint,
} from './variables';
import './style.css';
import '../assets/highlight/styles/an-old-hope.css';
import levels from './levels';
import codeHtml from './codeHtml';
import planetsForDisplay from './planetsForDisplay';
import hljs from '../assets/highlight/highlight.pack';
import hintList from './hint';

let menuIsOpen = false;
let numberLevel = +loadLevelFromStorage() || 1;

// UPDATE DISPLAY , HTML, ----------------------------------------------------
function clearDisplay() {
  input.value = '';
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  while (htmlText.firstChild) {
    htmlText.removeChild(htmlText.firstChild);
  }
}

function scaleDisplay() {
  if (numberLevel === 10) {
    display.style.transform = 'scale(0.7)';
    display.style.width = 'auto';
  } else {
    display.style.transform = 'scale(1)';
    display.style.width = '50%';
  }
}

function updateDisplay() {
  const obj = planetsForDisplay[numberLevel - 1];
  display.innerHTML = obj.displayPlanet;
}

function updateDescription() {
  const obj = levels[numberLevel - 1];
  describeTitle.innerText = obj.helpTitle;
  doThis.innerText = obj.doThis;
  headingLevel.innerText = obj.level;
  describeHeading.innerText = obj.selectorName;
  syntax.innerText = obj.syntax;
  describeHint.innerHTML = obj.describe;
  examples.innerHTML = obj.examples;
}

function updateHtmlText() {
  const obj = codeHtml[numberLevel - 1];
  htmlText.innerHTML = obj.htmlCode;
}

function lightHtmLCode() {
  document.querySelectorAll('.code').forEach((block) => {
    hljs.highlightBlock(block);
  });

  const displayElements = [...display.children];

  document.querySelectorAll('.code').forEach((line) => {
    line.addEventListener('mouseover', () => {
      line.classList.add('code-line');
      hint.style.opacity = '1';
      hint.innerText = line.innerText;
      [...line.children].forEach((ch) => { ch.classList.add('code-line'); });

      displayElements.forEach((item) => {
        item.style.opacity = '0.5';
      });

      const thisPlanet = line.classList[1].replace('code--', '');
      document.querySelector(`.${thisPlanet}-gif`).style.opacity = '1';
      document.querySelector(`.${thisPlanet}-png`).style.opacity = '1';
    });

    line.addEventListener('mouseleave', () => {
      hint.style.opacity = '0';

      displayElements.forEach((it) => {
        it.style.opacity = '1';
      });

      line.classList.remove('code-line');
      [...line.children].forEach((ch) => { ch.classList.remove('code-line'); });
    });
  });
}

// LOCAL STORAGE
function saveLevelInStorage(/* numberLevel */) {
  localStorage.setItem('selectorLevel', numberLevel);
}

function saveLevelStatusInStorage(level, status) {
  localStorage.setItem(`lvl-${numberLevel}`, status);
}

function getLevelStatusFromStorage() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key.match(/lvl/)) {
      document.querySelector(`[data-id="${key}"]`).firstChild.className = `${localStorage.getItem(key)}`;
    }
    localStorage.getItem(`${numberLevel}`);
  }
}

function loadLevelFromStorage() {
  return localStorage.getItem('selectorLevel');
}

// SHOW SMTH
function checkAnswer() {
  const obj = levels[numberLevel - 1];

  if (obj.selector.includes(input.value) && numberLevel === 10) {
    toggleCheckStatus();
    showWinAnimation();
  } else if (obj.selector.includes(input.value)) {
    toggleCheckStatus();
    numberLevel += 1;
    input.value = '';
    generateLevel(numberLevel);
  } else {
    input.classList.add('input__false');
    document.querySelector('.input__wrapper').classList.add('lose-animation');
    setTimeout(() => {
      document.querySelector('.input__wrapper').classList.remove('lose-animation');
      input.classList.remove('input__false');
      input.value = '';
    }, 500);
  }
}

function showHelp() {
  input.value = '';
  const selector = levels[numberLevel - 1].selector[0];

  const printChar = (select, i = 0) => {
    if (i === selector.length) return;
    setTimeout(() => {
      input.value += selector[i];
      printChar(select, i + 1);
    }, 300);
  };
  printChar(selector);

  const check = document.querySelector('.active-level').firstChild;
  if (check.classList.contains('check-undone')) {
    check.classList.remove('check-undone');
  }
  check.classList.add('check-done-with-hint');

  saveLevelStatusInStorage(numberLevel, check.className);
}

function showHint() {
  const picturePlanets = [...display.children];
  const obj = hintList[numberLevel - 1];

  picturePlanets.forEach((item) => {
    const whatItem = item.classList[0];
    item.addEventListener('mouseover', () => {
      hint.style.opacity = 1;
      hint.innerText = obj[`${whatItem}`];
    });
    item.addEventListener('mouseout', () => {
      hint.style.opacity = 0;
    });
  });
}

function showWinAnimation() {
  toggleCheckStatus();
  const congr = 'You did it!';
  display.innerHTML = planetsForDisplay[10].congratulations;
  document.querySelector('.deathstar').classList.add('deathstar--win');
  input.value = '';
  input.classList.add('enter__code__input--win');
  display.classList.add('visual__wrapper--win');
  htmlText.innerHTML = `<pre class="language-html"><code class="code">&lt;div class="youUnderestimateMyPower"&gt;
<p>You destroyed the Universe and defeated css-selectors!</p>&lt;/div&gt;</code></pre>`;
  document.querySelector('.heading__task').innerHTML = 'The Universe is destroyed!';
  document.querySelectorAll('.code').forEach((block) => {
    hljs.highlightBlock(block);
  });
  const printChar = (select, i = 0) => {
    if (i === congr.length) return;
    setTimeout(() => {
      input.value += congr[i];
      printChar(select, i + 1);
    }, 300);
  };
  printChar(congr);
}

// MENU AND CHECK STATUS ----------------------------------------------------
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

function toggleCheckStatus() {
  const check = document.querySelector('.active-level').firstChild;
  if (check.classList.contains('check-undone')) {
    check.classList.remove('check-undone');
  }
  check.classList.add('check-done');
  saveLevelStatusInStorage(numberLevel, check.className);
}

function updateLevelInMenu() {
  const levelsListinMenu = [...document.querySelector('.mobile-menu-list').children];
  levelsListinMenu.forEach((item) => {
    item.classList.remove('active-level');
  });
  document.querySelector(`[data-id="lvl-${numberLevel}"]`).classList.add('active-level');
}

// GENERATE LEVEL  ----------------------------------------------------
function generateLevel() {
  getLevelStatusFromStorage();
  clearDisplay(numberLevel);
  updateDisplay();
  updateDescription(numberLevel);
  updateHtmlText(numberLevel);
  updateLevelInMenu(numberLevel);
  saveLevelInStorage(numberLevel);
  showHint();
  lightHtmLCode();
  scaleDisplay();
}

(function () {
  burgerBtn.addEventListener('click', () => {
    if (menuIsOpen === false) {
      mobileMenuMask.classList.add('mobile-menu-mask');
      setTimeout(openMenu, 0);
    } else {
      mobileMenuMask.classList.remove('mobile-menu-mask');
      setTimeout(closeMenu, 0);
    }
  });

  menu.forEach((item, index) => {
    item.addEventListener('click', () => {
      generateLevel(index + 1);
      if (index < 10) {
        saveLevelInStorage(index + 1);
      }
      numberLevel = index + 1;
    });
  });

  enterBtn.addEventListener('click', () => {
    checkAnswer();
  });

  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) checkAnswer();
  });

  resetBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  helpBtn.addEventListener('click', () => {
    showHelp();
  });
}());

generateLevel(1);
