import './style.css';
import PicturePuzzle from './PicturePuzzle';
import NumberPuzzle from './NumberPuzzle';
import createEnvironment from './environment';

createEnvironment();

// function CSSLoad(file) {
//     var link = document.createElement("link");
//     link.setAttribute("rel", "stylesheet");
//     link.setAttribute("type", "text/css");
//     link.setAttribute("href", file);
//     document.getElementsByTagName("head")[0].appendChild(link);
// }

//if (mode === 'numberMode') {
//CSSLoad('style8.css');


let mode = 'number',
    size = 4;

createNumberPuzzle() 
showSettings();

function createNumberPuzzle() {
const numberPuzzle = new NumberPuzzle(
        document.querySelector('#puzzle-wrapper'), 36, size, 'number');
}

function createPictirePuzzle() {
    const setRandomImg = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);};
        let randomImg = setRandomImg(1, 151);

 const picturePuzzle = new PicturePuzzle (
        document.querySelector('#puzzle-wrapper'),
        `https://raw.githubusercontent.com/irinainina/image-data/master/box/${randomImg}.jpg`,
        36, size, 'picture')
}

function showSettings() {
    document.querySelector('.item--settings').addEventListener('click', () => {
        let settings = document.createElement('div');
        settings.classList.add('settings');

        settings.innerHTML =
            `<span class="corner">
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
        <span class="btn__close">
            <span class="close__line close-line--vert"></span>
            <span class="close__line close-line--horiz"></span>
        </span>`;
        document.querySelector('.header').after(settings);


        setTimeout(() => {
            let mode_picture = document.querySelector('.mode--picture'),
                mode_number = document.querySelector('.mode--number'),
                sizes = document.querySelectorAll('.size__item');

            sizes.forEach((item, index) => {
                item.addEventListener('click', () => {
                    size = index + 3;
                    document.querySelector('.puzzle').remove();
                    if(mode == 'number'){
                        createNumberPuzzle();
                    } else createPictirePuzzle();
                })
            })

            mode_number.addEventListener('click', () => {
                mode = 'number';
                mode_picture.classList.remove('active_mode');
                mode_number.classList.add('active_mode');
                document.querySelector('.puzzle').remove(); 
                createNumberPuzzle();
                return mode;
            })

            mode_picture.addEventListener('click', () => {
                mode = 'picture';
                mode_picture.classList.add('active_mode');
                mode_number.classList.remove('active_mode');
                document.querySelector('.puzzle').remove();
                createPictirePuzzle();
                return mode;
            })

            document.querySelector('.btn__close').addEventListener('click', () => {
                    settings.remove();

               
            }, 500);
        })
    })
}

// const picturePuzzle = new PicturePuzzle(
//         document.querySelector('#puzzle-wrapper'),
//         `https://raw.githubusercontent.com/irinainina/image-data/master/box/${randomImg}.jpg`,
//         36, size, 'picture')
// })

//close settings