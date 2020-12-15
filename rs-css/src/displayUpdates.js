/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import {
  headingLevel, describeHeading, describeTitle, syntax, describeHint, examples, doThis,
  input, htmlText, display, hint,
} from './variables';

import codeHtml from './codeHtml';
import levels from './levels';
import planetsForDisplay from './planetsForDisplay';
import hljs from '../assets/highlight/highlight.pack';

export function clearDisplay() {
  input.value = '';
  display.innerHTML = '';
  htmlText.innerHTML = '';

  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  while (htmlText.firstChild) {
    htmlText.removeChild(htmlText.firstChild);
  }
}

export function scaleDisplay(level) {
  if (level === 10) {
    display.classList.add('visual__wrapper--scale');
  } else if (display.classList.contains('visual__wrapper--scale')) {
    display.classList.remove('visual__wrapper--scale');
  }
}

export function updateDisplay(level) {
  const obj = planetsForDisplay[level - 1];
  display.innerHTML = obj.displayPlanet;

  if (document.querySelector('.deathstar').classList.contains('deathstar--win')) {
    document.querySelector('.deathstar').classList.remove('deathstar--win');
  }
  if (display.classList.contains('visual__wrapper--win')) {
    display.classList.remove('deathstar--win');
  }
}

export function updateDescription(level) {
  const obj = levels[level - 1];
  describeTitle.innerText = obj.helpTitle;
  doThis.innerText = obj.doThis;
  headingLevel.innerText = obj.level;
  describeHeading.innerText = obj.selectorName;
  syntax.innerText = obj.syntax;
  describeHint.innerHTML = obj.describe;
  examples.innerHTML = obj.examples;
}

export function updateHtmlText(level) {
  const obj = codeHtml[level - 1];
  htmlText.innerHTML = obj.htmlCode;
}

export function lightHtmLCode() {
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
      if (document.querySelector(`.${thisPlanet}-gif`)) {
        document.querySelector(`.${thisPlanet}-gif`).style.opacity = '1';
        hint.innerText = line.innerText;
      } else {
        document.querySelector(`.${thisPlanet}-png`).style.opacity = '1';
        hint.innerText = line.innerText;
      }
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
