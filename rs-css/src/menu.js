/* eslint-disable linebreak-style */

import {
  burgerBtn, mobileMenuMask, mobileMenu,
} from './variables';
import { saveLevelStatusInStorage } from './storage';

export let menuIsOpen = false;

export function openMenu() {
  menuIsOpen = true;
  mobileMenuMask.classList.add('mobile-menu-mask');
  mobileMenu.classList.add('mobile-menu-container-anim');
  burgerBtn.classList.add('mobile-menu-btn-rotation');
}

export function closeMenu() {
  menuIsOpen = false;
  mobileMenu.classList.remove('mobile-menu-container-anim');
  burgerBtn.classList.remove('mobile-menu-btn-rotation');
  mobileMenuMask.classList.remove('mobile-menu-mask');
  mobileMenuMask.classList.remove('mobile-menu-mask');
}

export function toggleCheckStatus(level) {
  const check = document.querySelector('.active-level').firstChild;
  if (check.classList.contains('check-undone')) {
    check.classList.remove('check-undone');
  }
  check.classList.add('check-done');
  saveLevelStatusInStorage(level, check.className);
}

export function updateLevelInMenu(level) {
  const levelsListinMenu = [...document.querySelector('.mobile-menu-list').children];
  levelsListinMenu.forEach((item) => {
    item.classList.remove('active-level');
  });
  document.querySelector(`[data-id="lvl-${level}"]`).classList.add('active-level');
}

export function addListenerForMenu() {
  burgerBtn.addEventListener('click', () => {
    if (menuIsOpen === false) {
      mobileMenuMask.classList.add('mobile-menu-mask');
      setTimeout(openMenu, 0);
    } else {
      mobileMenuMask.classList.remove('mobile-menu-mask');
      setTimeout(closeMenu, 0);
    }
  });
}
