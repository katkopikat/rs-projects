import * as storage from './storage.js';
import create from './utils/create.js';
import language from './layouts/layouts.js'; //{en, ru}
import Key from './Key.js';

const main = document.querySelector('main');

export default class Keyboard {
    constructor(rowsOrder) {
        this.rowsOrder = rowsOrder;
        this.keyPressed = {};
        this.isCaps = false;
        this.soundOn = true;
        this.speech = false;
    }

    init(langCode) { //ru, en
        this.keyBase = language[langCode];
        this.output = create('textarea', 'output', null, main,
            ['placeholder', 'Click here...'],
            ['rows', 5],
            ['cols', 50],
            ['spellcheck', false],
            ['autocorrect', 'off']);
        this.container = create('div', 'keyboard', null, main, ['language', langCode]);
        document.body.prepend(main);
        return this;
    }

    generateLayout() {
        this.keyButtons = [];
        this.rowsOrder.forEach((row, i) => {
            const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i + 1])
            /*создать div с классом keyboard__row, 
              сразу добавить к нему родителя container и записать в переменную
              data-row  - это просто номер строки 1,2,3,4,5
              итерируемся по рядам:*/
            rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
            //итерируемся по кодам кнопок:
            row.forEach((code) => { //
                const keyObj = this.keyBase.find((key) => key.code === code);
                if (keyObj) {
                    const keyButton = new Key(keyObj);
                    this.keyButtons.push(keyButton);
                    rowElement.appendChild(keyButton.div)
                }
            })
        });
        document.addEventListener('keydown', this.handleEvent);
        document.addEventListener('keyup', this.handleEvent);
        this.container.onmousedown = this.preHandleEvent;
        this.container.onmouseup = this.preHandleEvent;

        document.querySelector('[data-code="Sound"]').innerHTML = '<div class="sub"></div><div class="letter"><i class="fas fa-volume-down"></i></div>';
        document.querySelector('[data-code="Voice"]').innerHTML = '<div class="sub"></div><div class="letter"><i class="fas fa-microphone-slash"></i></div>';
        document.querySelector('[data-code="ok"]').innerHTML = '<div class="sub"></div><div class="letter"><i class="far fa-check-circle"></i></div>';

    }

    //функция-подготовка к событию, которая берет код нажатого элемента у контейнера кнопки
    preHandleEvent = (e) => {
        e.stopPropagation();
        const keyDiv = e.target.closest('.keyboard__key'); //ищет ближайший контейнер кнопки
        const {
            dataset: {
                code
            }
        } = keyDiv; //деструктиуризация, замена consr code = keyDiv.dataset.code 
        //выбрали код кнопки
        keyDiv.addEventListener('mouseleave', this.resetButtonState);
        this.handleEvent({
            code,
            type: e.type
        });
    };

    //если зажалии кнопку и увели - снять выделение
    resetButtonState = ({
        target: {
            dataset: {
                code
            }
        }
    }) => {
        const keyObj = this.keyButtons.find((key) => key.code === code);
        if (!code.match(/CapsLock|Shift|Voice/)) {
            keyObj.div.classList.remove('active');
            keyObj.div.removeEventListener('mouseleave', this.resetButtonState);
        }
    };



    handleEvent = (e) => {
        if (e.stopPropagation) e.stopPropagation(); //отменяем дефолтное событие 
        const {
            code,
            type
        } = e; //деструктурируем объект, обращаясь к полям объекта
        const keyObj = this.keyButtons.find((key) => key.code === code);
        if (!keyObj) return;
        this.output.focus();

        /*ищем кнопку, которая нажата на клавитуре, чтобы подсветить её на вирт.клаве
        после каждого нажатия на кнопку фокус переключается на отпут и появляется каретка.*/

        if (type.match(/keydown|mousedown/)) {
            if (type.match(/key/)) e.preventDefault(); //откл стандартное поведение кнопок навешиваем класс:
            if (code.match(/Control|Alt|Caps/) && e.repeat) return;
            if (code.match(/Language/)) this.switchLanguage();

            document.querySelector('.output').addEventListener('click', () => {
                document.querySelector('.keyboard').classList.remove('keyboard--hidden');
            })

            //Звуки
            const audioRu = document.querySelector('.audioRu'),
                audioEn = document.querySelector('.audioEn'),
                audioFn = document.querySelector('.audioFn'),
                audioEnter = document.querySelector('.audioEnter'),
                audioSpace = document.querySelector('.audioSpace'),
                audioBackspace = document.querySelector('.audioBackspace'),
                audioOk = document.querySelector('.showKeyboard'),
                audioCaps = document.querySelector('.audioCaps');

            //Отключение звука
            if (code.match(/Sound/) && !this.soundOn) this.soundOn = true;
            else if (code.match(/Sound/) && this.soundOn) this.soundOn = false;

            //Звуки для разных кнопок
            if (this.soundOn) {
                document.querySelector('[data-code="Sound"]').innerHTML = '<div class="sub"></div><div class="letter"><i class="fas fa-volume-down"></i></div>';
                if (code.match(/ok/)) {
                    audioOk.muted = false;
                    audioOk.play();
                }
                if (code.match(/Backspace/)) {
                    audioBackspace.muted = false;
                    audioBackspace.play();
                }
                if (code.match(/Enter/)) {
                    audioEnter.muted = false;
                    audioEnter.play();
                }
                if (code.match(/Space/)) {
                    audioSpace.muted = false;
                    audioSpace.play();
                }
                if (code.match(/Caps/)) {
                    audioCaps.muted = false;
                    audioCaps.play();
                }
                if (keyObj.isFuncKey && !code.match(/Backspace|Enter|Space|Caps|ok/)) {
                    audioFn.muted = false;
                    audioFn.play();
                }
                if (this.container.dataset.language === 'ru') {
                    audioRu.muted = false;
                    audioRu.play();
                }
                if (this.container.dataset.language === 'en') {
                    audioEn.muted = false;
                    audioEn.play();
                }

            } else if (!this.soundOn) {
                document.querySelectorAll("audio").forEach((audio) => {
                    document.querySelector('[data-code="Sound"]').innerHTML = '<div class="sub"></div><div class="letter"><i class="fas fa-volume-mute"></i></div>';
                    audio.pause();
                    audio.muted = true;
                })
            }

            keyObj.div.classList.add('active');

            //Нажимаем на капс
            if (code.match(/Caps/) && !this.isCaps) {
                this.isCaps = true;
                this.switchUpperCase(true);

            } else if (code.match(/Caps/) && this.isCaps) {
                this.isCaps = false;
                this.switchUpperCase(false);
                keyObj.div.classList.remove('active');
            }

            //Нажимаем на shift
            if (code.match(/Shift/) && !this.shiftKey) {
                this.shiftKey = true;
                this.switchUpperCase(true);
                keyObj.div.classList.add('active');

            } else if (code.match(/Shift/) && this.shiftKey) {
                this.shiftKey = false;
                this.switchUpperCase(false);
                keyObj.div.classList.remove('active');
            }

            if (!this.isCaps && !this.shiftKey) {
                this.printToOutput(keyObj, this.shiftKey ? keyObj.shift : keyObj.small); //нажати ли шифт (нужно ли печатать большую или маленькую)
            } else if (this.isCaps || this.shiftKey) {
                if (this.shiftKey) {
                    this.printToOutput(keyObj, keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
                } else {
                    this.printToOutput(keyObj, !keyObj.sub.innerHTML ? keyObj.shift : keyObj.small)
                }
            }

            //отпускаем кнопку
        } else if (e.type.match(/keyup|mouseup/)) {
            if (code.match(/Control/)) this.ctrlKey = false;
            if (code.match(/Alt/)) this.altKey = false;
            if (!code.match(/Caps/) && !code.match(/Shift/)) keyObj.div.classList.remove('active');
        }
    }
    //Переключение языка и сохранение его в localStorage
    switchLanguage = () => {
        const langAbbr = Object.keys(language);
        let langIdx = langAbbr.indexOf(this.container.dataset.language);
        this.keyBase = langIdx + 1 < langAbbr.length ?
            language[langAbbr[langIdx += 1]] :
            language[langAbbr[langIdx -= langIdx]];

        this.container.dataset.language = langAbbr[langIdx];
        storage.set('kbLang', langAbbr[langIdx]);

        this.keyButtons.forEach((button) => { //проходим по всем кнопкам и "переписываем" их
            const keyObj = this.keyBase.find((key) => key.code === button.code);
            if (!keyObj) return;
            button.shift = keyObj.shift;
            button.small = keyObj.small;
            if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) { //если находит символ
                button.sub.innerHTML = keyObj.shift;
            } else { //для русского шрифта заходит сюда
                button.sub.innerHTML = '';
            }
            button.letter.innerHTML = keyObj.small;
        });
        if (this.isCaps) this.switchUpperCase(true);
    }

    switchUpperCase(isTrue) { //isTrue - флаг, чтобы понимать, опустить регистр или поднять
        if (isTrue) {
            this.keyButtons.forEach((button) => {
                if (button.sub) { //Смотрим, есть ли срецсимвол но кнопке
                    // Если только это не капс, тогда поднимаем у спецсимволов
                    if (this.shiftKey) {
                        button.sub.classList.add('sub-active');
                        button.letter.classList.add('sub-inactive');
                    }
                }
                // Не трогаем функциональные кнопки
                if (!button.isFuncKey && this.isCaps && !this.shiftKey && !button.sub.innerHTML) {
                    button.letter.innerHTML = button.shift;
                    /*Если буквенная кнопка без символа и нажат именно капс - 
                    поднимаем регистр основного символа letter*/
                } else if (!button.isFuncKey && this.isCaps && this.shiftKey) {
                    button.letter.innerHTML = button.small;
                    /*Если капс + shift опускаем  letter до маленького начертания*/
                } else if (!button.isFuncKey && !button.sub.innerHTML) {
                    button.letter.innerHTML = button.shift;
                    /*Если это просто shift - поднимаем*/
                }
            })
        } else {
            /*Опускаем регистр в обратном порядке*/
            this.keyButtons.forEach((button) => {
                if (button.sub.innerHTML && !button.isFuncKey) {
                    button.sub.classList.remove('sub-active');
                    button.letter.classList.remove('sub-inactive');
                    /*Не трограем функциональнее и берем кнопки с символами,
                    то возваращаем в исходное */
                    if (!this.isCaps) button.letter.innerHTML = button.small;
                    /*Если не зажат капс - то основным символам нижний регистр*/
                    else if (!this.isCaps) button.letter.innerHTML = button.shift;
                    /*???!!! если капс зажат - то возвращаем верхний регистр*/

                    // если это кнопка без спецсимвола + не  функциональная)     
                } else if (!button.isFuncKey) {
                    // то если зажат капс
                    if (this.isCaps) button.letter.innerHTML = button.shift;
                    // возвращаем верхний регистр
                    else button.letter.innerHTML = button.small;
                    // если отжат капс - возвращаем нижний регистр                 
                }
            });
        }
    }

    printToOutput(keyObj, symbol) {

        let cursorPosision = this.output.selectionStart;
        const left = this.output.value.slice(0, cursorPosision);
        const right = this.output.value.slice(cursorPosision);

        const fnButtonsHandler = {
            Tab: () => {
                if (right !== '') {
                    this.output.value = `${left}\t${right}`;
                    cursorPosision += 1;
                } else {
                    this.output.value = `${left}\t${right}`;
                    cursorPosision += 4;
                }
            },
            Enter: () => {
                this.output.value = `${left}\n${right}`;
                cursorPosision += 1;
            },
            Space: () => {
                this.output.value = `${left} ${right}`
                cursorPosision += 1;
            },
            Backspace: () => {
                this.output.value = `${left.slice(0, -1)}${right}`;
                cursorPosision -= 1;
            },
            Delete: () => {
                this.output.value = `${left}${right.slice(1)}`
            },
            ArrowLeft: () => {
                cursorPosision = cursorPosision - 1 >= 0 ? cursorPosision - 1 : 0;
            },
            ArrowRight: () => {
                cursorPosision += 1;
            },
            ok: () => {
                document.querySelector('.keyboard').classList.add('keyboard--hidden');
            },
        }
        //обработка функциональных кнопок, если функциональная то:
        if (fnButtonsHandler[keyObj.code]) fnButtonsHandler[keyObj.code]();

        //если не функциональная то:
        else if (!keyObj.isFuncKey) {
            cursorPosision += 1;
            this.output.value = `${left}${symbol || ''}${right}`;
        }
        //обновляем позицию курсора
        this.output.setSelectionRange(cursorPosision, cursorPosision);
    }
}