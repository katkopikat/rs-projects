/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import {
  enterBtn, helpBtn, input, resetBtn, menu, burgerBtn, mobileMenuMask,
} from './variables';
import showHelp from './help';
import { checkAnswer } from './finishLevel';
import generateLevel from './generateLevel';
import { saveLevelInStorage, loadLevelFromStorage } from './storage';
import { openMenu, closeMenu, menuIsOpen } from './menu';
import './style.css';
import '../assets/highlight/styles/an-old-hope.css';

(function () {
  let numberLevel = +loadLevelFromStorage() || 1;

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
    });
  });

  enterBtn.addEventListener('click', () => {
    checkAnswer(numberLevel);
  });

  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) checkAnswer(numberLevel);
  });

  resetBtn.addEventListener('click', () => {
    localStorage.clear();
    generateLevel(1);
    location.reload();
  });

  helpBtn.addEventListener('click', () => {
    showHelp(numberLevel);
  });
}());

generateLevel(1);
