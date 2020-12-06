import  { level, describeHeading, describeTitle, syntax, examples, 
    doThis, enterBtn, helpBtn, input, htmlText, modalHelp } from './variables.js';

import levels from './levels.js';
import help from './help.js';
import codeHtml from './codeHtml.js';


function generateLevel(){
    updateDescription();
    updateHtmlText();
    updateHelp();
    updateDisplay();
}

function updateDisplay(){

}
//обновление блока с инфой
function updateDescription(numberLevel){
    let obj = levels[numberLevel - 1];
    describeTitle.innerText = obj.helpTitle;
    doThis.innerText = obj.doThis;
    level.innerText = obj.levels;
    describeHeading.innerText =
    syntax.innerText = obj.syntax;
    examples.innerText  = obj.examples;
     // console.log(levels[numberLevel - 1]);
} 

//обновление блока с кодом
function updateHtmlText(numberLevel){
    let obj = levels[numberLevel - 1];
    htmlText.innerHTML = obj.htmlCode;
} 

//отправить ответ enter или нажатие на кнопку
function sendAnwser(){
    if (e.keyCode == 13) checkAnswer();
    enterBtn.addEventListener('click', () => {
        checkAnswer();
    })
} 
//проверить ответ с введенным
function checkAnswer(){
    let obj = levels[numberLevel - 1];
    if (input.value === obj.selector) {
        //winAnimation();
       // generateLevel();
    } else {
        loseAnimation()
    }
}

function winAnimation(){

}

function loseAnimation(){
    
}

function pushHelpBtn(){
    helpBtn.addEventListener('click', () => {
        showHepl();
    })
} 

function showHelp(){
    modalIsOpen = true;
    modal.classList.add('modal-open');
    overlay.classList.add('overlay-active');
}

function closeHelp(){
    modal.classList.remove('modal-open');
    overlay.classList.remove('overlay-active');
}

// overlay.addEventListener('click', () => {
//     if (modalIsOpen === true) closeModal(modal);
//     if ( menuIsOpen === true) {
//       mobileMenuMask.classList.remove("mobile-menu-mask");
//       setTimeout(closeMenu, 0);}
// })

// overlay.addEventListener('mouseover', () => {
//     btnCloseModal.classList.add('btn--close-active');
    
// })

// overlay.addEventListener('mouseout', () => {
//     btnCloseModal.classList.remove('btn--close-active');
// })

// function clearModal(modal) {
//     const elem = document.querySelector('.modal-window');
//     elem.innerHTML = '';
// }

function updateHelp(){
    //modalWindow.classList.add('.modal-l')
     //getId();
     let i = numberLevel;
     const modal = document.querySelector('.modal-help');
     modal.innerText += ``
    }

updateDescription();
updateHtmlText();