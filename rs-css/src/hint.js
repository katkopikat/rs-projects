/* eslint-disable linebreak-style */
import { display, hint } from './variables';

export default function showHint() {
  const picturePlanets = [...display.children];

  picturePlanets.forEach((item) => {
    const namePlanet = item.classList[1].substr(0, item.classList[1].length - 4);
    const thisHoverPlanet = document.querySelector(`.code--${namePlanet}`);
    item.addEventListener('mouseover', () => {
      hint.style.opacity = 1;
      hint.innerText = thisHoverPlanet.innerText;

      thisHoverPlanet.classList.add('code-line');
      [...thisHoverPlanet.children].forEach((ch) => { ch.classList.add('code-line'); });
    });
    item.addEventListener('mouseleave', () => {
      hint.style.opacity = 0;
      thisHoverPlanet.classList.remove('code-line');
      [...thisHoverPlanet.children].forEach((ch) => { ch.classList.remove('code-line'); });
    });
  });
}
