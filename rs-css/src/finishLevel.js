/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import levels from './levels';
import { input, htmlText, display } from './variables';
import { toggleCheckStatus } from './menu';
import planetsForDisplay from './planetsForDisplay';
import hljs from '../assets/highlight/highlight.pack';
import generateLevel from './generateLevel';
import { saveLevelInStorage, loadLevelFromStorage } from './storage';
import printLetter from './printLetter';
// import hljs from '../assets/highlight/highlight.pack';

export function deletePlanet() {
  document.querySelectorAll('.del').forEach((item) => {
    item.classList.add('del-anim');
  });
}

export function showWinAnimation(level) {
  toggleCheckStatus(level);
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
  printLetter(congr);
}

export function checkAnswer(level) {
  level = +loadLevelFromStorage();
  const obj = levels[level - 1];

  if (obj.selector.includes(input.value) && level === 10) {
    toggleCheckStatus(level);
    showWinAnimation();
  } else if (obj.selector.includes(input.value)) {
    toggleCheckStatus(level);
    level += 1;
    saveLevelInStorage(level);
    input.value = '';
    deletePlanet();
    setTimeout(() => {
      generateLevel();
    }, 1450);
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
