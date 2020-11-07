import './style.css';
import PicturePuzzle from './PicturePuzzle';
import NumberPuzzle from './NumberPuzzle';
import createEnvironment from './environment';

createEnvironment();
let mode = 'numberMode';

const setRandomImg = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
let randomImg = setRandomImg(1, 151);


if (mode === 'numberMode') {
    const numberPuzzle = new NumberPuzzle(
        document.querySelector('#puzzle-wrapper'), 600);
}

if (mode === 'pictureMode') {
    const picturePuzzle = new PicturePuzzle(
        document.querySelector('#puzzle-wrapper'),
        `https://raw.githubusercontent.com/irinainina/image-data/master/box/${randomImg}.jpg`,
        600
    );
}