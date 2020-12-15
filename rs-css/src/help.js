/* eslint-disable linebreak-style */

import { input } from './variables';
import levels from './levels';
import { saveLevelStatusInStorage, loadLevelFromStorage } from './storage';
import printLetter from './printLetter';

export default function showHelp(level) {
  const numberLevel = +loadLevelFromStorage() || 1;
  input.value = '';
  const selector = levels[numberLevel - 1].selector[0];

  printLetter(selector);

  const check = document.querySelector('.active-level').firstChild;
  if (check.classList.contains('check-undone')) {
    check.classList.remove('check-undone');
  }
  check.classList.add('check-done-with-hint');

  saveLevelStatusInStorage(level, check.className);
}
