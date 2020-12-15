/* eslint-disable linebreak-style */

import {
  clearDisplay, scaleDisplay, updateDisplay, updateDescription, updateHtmlText, lightHtmLCode,
} from './displayUpdates';

import { saveLevelInStorage, getLevelStatusFromStorage, loadLevelFromStorage } from './storage';
import { updateLevelInMenu } from './menu';
import showHint from './hint';

// let numberLevel = +loadLevelFromStorage() || 1;

export default function generateLevel() {
  const numberLevel = +loadLevelFromStorage() || 1;
  saveLevelInStorage(numberLevel);
  getLevelStatusFromStorage(numberLevel);
  clearDisplay(numberLevel);
  updateDisplay(numberLevel);
  updateDescription(numberLevel);
  updateHtmlText(numberLevel);
  updateLevelInMenu(numberLevel);
  saveLevelInStorage(numberLevel);
  showHint();
  lightHtmLCode();
  scaleDisplay(numberLevel);
}
