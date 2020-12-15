/* eslint-disable linebreak-style */
import { input } from './variables';

const printLetter = (str, i = 0) => {
  if (i === str.length) {
    return;
  }
  setTimeout(() => {
    input.value += str[i];
    printLetter(str, i + 1);
  }, 200);
};

export { printLetter as default };
