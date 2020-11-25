/* eslint-disable linebreak-style */
import './style.css';
import '../assets/sounds/move.mp3';
import PicturePuzzle from './PicturePuzzle';
import NumberPuzzle from './NumberPuzzle';
import createEnvironment from './environment';

let mode = '';
let size = 4;

function createNumberPuzzle() {
  const numberPuzzle = new NumberPuzzle(
    document.querySelector('.puzzle-wrapper'), 30, size, 'number',
  );
  mode = 'number';
  return mode;
}

function createPictirePuzzle() {
  const setRandomImg = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const randomImg = setRandomImg(1, 151);

  const picturePuzzle = new PicturePuzzle(
    document.querySelector('.puzzle-wrapper'),
    `https://raw.githubusercontent.com/irinainina/image-data/master/box/${randomImg}.jpg`,
    30, size, 'picture',
  );
  mode = 'picture';
  return mode;
}

function showSettings() {
  document.querySelector('.item--settings').addEventListener('click', () => {
    const settings = document.createElement('div');
    settings.classList.add('settings');

    settings.innerHTML = `<span class="corner">
            <span class="line line--horizontal"></span>
            <span class="line line--vertical"></span>
        </span>
        <h2>Settings</h2>
        <span class="type_block">
         <span class="btn__type">mode: </span>
            <span class="settings__item mode--number active_mode" data-mode="active_mode">number</span>
            <span class="settings__item mode--picture" data-mode="inactive_mode">picture</span>
        </span><br>
        <span class="size_block">
        <span class="btn__size">field: </span>
            <span class="settings__item size__item size3" data-size="inactive_size"> 3x3 </span>
            <span class="settings__item size__item size4 active_size" data-size="active_size"> 4x4 </span>
            <span class="settings__item size__item size5" data-size="inactive_size"> 5x5 </span>
            <span class="settings__item size__item size6" data-size="inactive_size"> 6x6 </span>
            <span class="settings__item size__item size7" data-size="inactive_size"> 7x7 </span>
            <span class="settings__item size__item size8" data-size="inactive_size"> 8x8 </span>
</span><br>
<span class="sound_block">
        <span class="btn__sound">sound: </span>
            <span class="settings__item sound--on active_sound " data-sound="active_sound">on</span>
            <span class="settings__item sound--off" data-sound="inactive_sound">off</span>
</span>
        <span class="btn__close close-settings">
            <span class="close__line close-line--vert"></span>
            <span class="close__line close-line--horiz"></span>
        </span>`;
    document.querySelector('.header').after(settings);

    setTimeout(() => {
      const modePicture = document.querySelector('.mode--picture');
      const modeNumber = document.querySelector('.mode--number');
      const sizes = document.querySelectorAll('.size__item');
      const soundOn = document.querySelector('.sound--on');
      const soundOff = document.querySelector('.sound--off');
      const audio = document.querySelector('.audio');

      sizes.forEach((item, index) => {
        item.addEventListener('click', () => {
          size = index + 3;
          document.querySelector('.active_size').classList.remove('active_size');
          item.classList.add('active_size');
          document.querySelector('.puzzle').remove();
          if (mode === 'number') {
            createNumberPuzzle();
          } else createPictirePuzzle();
        });
      });

      modeNumber.addEventListener('click', () => {
        mode = 'number';
        modePicture.classList.remove('active_mode');
        modeNumber.classList.add('active_mode');
        document.querySelector('.puzzle').remove();
        createNumberPuzzle();
        return mode;
      });

      modePicture.addEventListener('click', () => {
        mode = 'picture';
        modePicture.classList.add('active_mode');
        modeNumber.classList.remove('active_mode');
        document.querySelector('.puzzle').remove();
        createPictirePuzzle();
        return mode;
      });

      // sound off
      soundOff.addEventListener('click', () => {
        soundOn.classList.remove('active_sound');
        soundOff.classList.add('active_sound');
        audio.muted = true;
        // this.audioOn = false;
      });

      // sound on
      soundOn.addEventListener('click', () => {
        soundOff.classList.remove('active_sound');
        soundOn.classList.add('active_sound');
        audio.muted = false;

        // this.audioOn = true;
      });

      document.querySelector('.close-settings').addEventListener('click', () => {
        settings.remove();
      });
    }, 500);
  });
}

function newGame() {
  document.querySelector('.item--new_game').addEventListener('click', () => {
    if (mode === 'number') {
      document.querySelector('.puzzle').remove();
      createNumberPuzzle();
    } else {
      document.querySelector('.puzzle').remove();
      createPictirePuzzle();
    }
  });
}

createEnvironment();
createNumberPuzzle();
showSettings();
newGame();
