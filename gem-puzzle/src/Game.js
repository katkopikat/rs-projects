export default class Game {
    constructor(container, width, size, mode) {
        this.parentConteiner = container;
        this.width = width;
        this.size = size;
        this.mode = mode;
        this.cells = [];
        this.historyMoves = [];
        this.historyMovesOrder = [];
        this.historyMovesOrderEmpty = [];
        this.arrPosition = [];
        this.countMoves = 0;
        this.limitLeft = [];
        this.limitRight = [];
        this.allowBtnForClick = [];
        this.emptyPos;
        this.isAutoClick = false;
        this.audioOn = true;
        this.gameIsPaused = false;
        this.timerId;

        this.saveGame();
        this.openMenu();
    }

    init() {
        this.container = this.createWrapper();
        this.parentConteiner.appendChild(this.container);
    }

    createWrapper() {
        const div = document.createElement('div');
        div.className = 'puzzle';
        div.style.position = 'relative';
        div.style.margin = '2rem auto';
        div.style.width = `${this.width}rem`;
        document.querySelector('.wrapper').append(div);

        return div;
    }

    //se limites for moves
    setLimite() {
        for (let i = 1; i <= this.size * this.size; i += this.size) { //Ограничение слева
            this.limitLeft.push(i);
        }
        for (let i = this.size; i <= this.size * this.size; i += this.size) { //Ограничение справа
            this.limitRight.push(i);
        }
        return this.limitLeft, this.limitRight;
    }

    //get position empty elements
    getEmptyPosition() {
        this.emptyPos = document.querySelector('.empty').style.order;
        return this.emptyPos;
    }

    //make clickable items near empty item 
    addClickable() {
        this.emptyPos = +this.getEmptyPosition();
        let tempTop, tempBottom, tempLeft, tempRight;

        //вверх
        if ((this.emptyPos - this.size) >= 1) {
            tempTop = document.querySelector(`[data-pos="${this.emptyPos - this.size}"]`);
            tempTop.classList.add('clickable');
            this.allowBtnForClick.push(this.emptyPos - this.size);
        }
        //вниз
        if (this.emptyPos + this.size <= this.size * this.size) {
            tempBottom = document.querySelector(`[data-pos="${this.emptyPos + this.size}"]`);
            tempBottom.classList.add('clickable');
            this.allowBtnForClick.push(this.emptyPos + this.size);
        }
        //влево
        if (!this.limitLeft.includes(this.emptyPos)) {
            tempLeft = document.querySelector(`[data-pos="${this.emptyPos - 1}"]`);
            tempLeft.classList.add('clickable');
            this.allowBtnForClick.push(this.emptyPos - 1);
        }
        //вправо
        if (!this.limitRight.includes(this.emptyPos)) {
            tempRight = document.querySelector(`[data-pos="${this.emptyPos + 1}"]`);
            tempRight.classList.add('clickable');
            this.allowBtnForClick.push(this.emptyPos + 1);
        }
        return this.allowBtnForClick;

    }

    //delete cleckable property  
    deleteClickable() {
        this.allowBtnForClick = [];
        document.querySelectorAll('.clickable').forEach(item => {
            item.classList.remove('clickable');
        });
        return this.allowBtnForClick;
    }

    //ADD EVENT LISTENER FOR ITEM, MOVE ITEMS AND ANIMATION
    clickItems() {
        const empty = document.querySelector('.empty'),
            grid = document.querySelectorAll('.cell'),
            audio = document.querySelector('.audio');

        grid.forEach((item, index) => {
            item.addEventListener('click', (e) => {

                item.style.setProperty('transition', 'all 0.3s ease-in-out');
                let distanse = parseInt(item.style.width) + 0.6;
                //animation
                if (!this.isAutoClick) {
                    if (this.audioOn) {
                        audio.play();
                    }
                    if (e.target.style.order == this.emptyPos + 1) {
                        item.style.transform = `translateX(-${distanse}rem)`;

                    } else if (e.target.style.order == this.emptyPos - 1) {
                        item.style.transform = `translateX(${distanse}rem)`;

                    } else if (e.target.style.order == this.emptyPos + this.size) {
                        item.style.transform = `translateY(-${distanse}rem)`;

                    } else if (e.target.style.order == this.emptyPos - this.size) {
                        item.style.transform = `translateY(${distanse}rem)`;
                    }

                    //chahge flex:order
                    setTimeout(() => {
                        item.style.setProperty('transition', 'none');
                        item.style.setProperty('transform', 'none');

                        let curPos = item.style.order;
                        item.style.order = this.emptyPos;
                        item.dataset.pos = this.emptyPos;
                        empty.style.order = curPos;
                        empty.dataset.pos = curPos;
                        this.arrPosition.push(`${index+1},${curPos},${this.emptyPos}`);
                        this.countMoves++;
                        this.updateMoves();
                        this.gameIsSolved();
                        this.deleteClickable();
                        this.addClickable();
                        if (this.countMoves == 1) {
                            this.startTimer();
                        }
                    }, 350)

                } else {
                    let curPos = item.style.order;
                    item.style.order = this.emptyPos;
                    item.dataset.pos = this.emptyPos;
                    document.querySelector('.empty').style.order = curPos;
                    document.querySelector('.empty').dataset.pos = curPos;
                    this.arrPosition.push(`${index+1},${curPos},${this.emptyPos}`);
                    this.deleteClickable();
                    this.addClickable();
                    if (this.countMoves == 1) {
                        this.startTimer();
                    }
                }
            });
        });

        return this.arrPosition;
    }

    //RANDOM ITEM:
    //get random number
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    //make n-random autoclick for ransomize items on the field
    randomizeItem() {
        let randomNumb;
        if (this.size == 3) randomNumb = this.getRandomInt(30, 60);
        if (this.size == 4) randomNumb = this.getRandomInt(100, 150);
        //if (this.size == 4) randomNumb = this.getRandomInt(5, 10);
        if (this.size == 5 || this.size == 6 || this.size == 7) randomNumb = this.getRandomInt(150, 200);
        if (this.size == 8) randomNumb = this.getRandomInt(200, 250);

        for (let i = 0; i < randomNumb; i++) {
            this.isAutoClick = true;
            this.autoClickItems();
        }
        this.updateAfterAutoClick();
        return this.countMoves;
    }
    //autoclick, when we push on random allow item
    autoClickItems() {
        let RandomNumbBtn = this.allowBtnForClick[this.getRandomInt(0, this.allowBtnForClick.length)]; //+
        let randomBtn = document.querySelector(`[data-pos="${RandomNumbBtn}"]`);
        randomBtn.click(this.clickItems);
    }
    //remove autoclick-flag
    updateAfterAutoClick() {
        this.isAutoClick = false;
        return this.isAutoClick;
    }

    //update moves
    updateMoves() {
        document.querySelector('.moves').innerText = `Moves: ${this.countMoves}`;
    }

    //remove 2 duplicate steps
    removeDuplicateSteps() {
        let arr = this.arrPosition.reverse();
        try {
            for (let i = 0; i < arr.length; i++) {
                let ArrOneStep = arr[i].split(',');
                let ArrOneStepback = arr[i + 1].split(',');

                if (ArrOneStep[0] == ArrOneStepback[0] &&
                    ArrOneStep[1] == ArrOneStepback[2] &&
                    ArrOneStep[2] == ArrOneStepback[1]) {
                    arr.splice(i, 2);
                }

            }
        } catch (e) {
            console.log('')
        }
        return this.arrPosition = arr;
    }
    //solve animation (reverse animation)
    reverseHistory() {
        this.removeDuplicateSteps();
        let arr = this.arrPosition;
        let i = 0;

        function delay() {
            return new Promise(resolve => setTimeout(resolve, 250));
        }

        async function delayedLog(item) {
            await delay();

            let ArrOneStep = arr[i].split(',');

            let tempEmpty = document.querySelector('.empty');
            let temp = document.querySelector(`[data-id="${ArrOneStep[0]}"]`);

            temp.style.order = `${ArrOneStep[1]}`;
            tempEmpty.style.order = `${ArrOneStep[2]}`;

            i++;
        }

        async function processArray(arr) {
            for (const item of arr) {
                await delayedLog(item);
            }
        }
        processArray(arr);
    }

    showSolve() {
        document.querySelector('.item--solution').addEventListener('click', () => {
            this.reverseHistory();
        });
    }

    startTimer() {
        let timeMinute = 0,
            seconds = 0,
            minutes = 0;
        this.timerId = setInterval(() => {
            seconds = timeMinute % 60
            minutes = Math.trunc(timeMinute / 60 % 60)

            let secText = seconds > 9 ? "" + seconds : "0" + seconds;
            let minText = minutes > 9 ? "" + minutes : "0" + minutes;

            document.querySelector('.time').innerText = `Time: ${minText}:${secText}`;
            ++timeMinute;
        }, 1000)
    }

    clearTimer() {
        setTimeout(() => {
            clearInterval(this.timerId)
        }, 0);
    }

    saveGame() {
        document.querySelector('.item--save_game').addEventListener('click', () => {
            console.log('Игра записана в localStorage')
            localStorage.setItem('savedgame', this.arrPosition);
        });
    }

    // loadGame(){

    //     let lastGameStr = localStorage.getItem('savedgame');
    //         let lastGameArr = lastGameStr.match(/\d{1,2}\,\d{1,2}\,\d{1,2}/g);

    //         for (let i = 0; i < lastGameArr.length; i++){
    //             let ArrOneStep = lastGameArr[i].split(',');
    //             console.log(ArrOneStep)
    //             let temp = document.querySelector(`[data-id="${ArrOneStep[0]}"]`);


    //             temp.style.order = `${ArrOneStep[1]}`;
    //             temp.dataset.pos = `${ArrOneStep[1]}`;

    //             let tempEmpty = document.querySelector('.empty');
    //             tempEmpty.style.order = `${ArrOneStep[2]}`;
    //             tempEmpty.dataset.pos = `${ArrOneStep[2]}`;

    //             this.deleteClickable();
    //             this.addClickable();
    //         }
    // }

    gameIsSolved() {
        for (let i = 1; i <= this.size * this.size; i++) {
            const pos = document.querySelector(`[data-pos="${i}"]`).dataset.pos;
            const id = document.querySelector(`[data-pos="${i}"]`).dataset.id;
            if (pos == id && i == this.size * this.size) {
                this.showWinMessage();
                this.clearTimer();
            } else if (pos == id) continue;
            else break;
        }
    }

    openMenu() {
        document.querySelector('.menu__btn').addEventListener('click', () => {
            document.querySelector('.menu').classList.remove('inactive');
            document.querySelector('.item--new_game').classList.add('item--new--open');
            document.querySelector('.item--save_game').classList.add('item--save--open');
            document.querySelector('.item--scores').classList.add('item--scores--open');
            document.querySelector('.item--settings').classList.add('item--settings--open');
            document.querySelector('.item--rules').classList.add('item--rules--open');
            document.querySelector('.item--solution').classList.add('item--solution--open');
        });

        this.showRules();
        this.showScore();
        this.closeMenu();
        return this.gameIsPaused;
    }

    closeMenu() {
        document.querySelector('.close--menu').addEventListener('click', () => {
            document.querySelector('.menu').classList.add('inactive');
        })
    }

    showWinMessage() {
        const win = document.createElement('div');
        win.classList.add('win');
        const time = document.querySelector('.time').innerText.replace("Time:", '');
        win.innerHTML =
            `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>You won!</h2>
            <p class="winText">You won in ${time} and ${this.countMoves} moves!</p>
            <span class="btn__close btn__close--win">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;

        document.querySelector('.header').after(win);
        setTimeout(() => {
            document.querySelector('.btn__close--win').addEventListener('click', () => {
                win.remove();
            })
        }, 500);
        this.saveResult();
    }

    showRules() {
        document.querySelector('.item--rules').addEventListener('click', () => {
            let rules = document.createElement('div');
            rules.classList.add('rules');

            rules.innerHTML =
                `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Rules</h2>
             <p>The object of the puzzle is to place the tiles in order<br>
                by making sliding moves that use the empty space.<br>
                <br>
                You can save your game and load it later.<br>
                Or you can just use pause button.<br>
                Also you can choose game field size and mode (picture or number),<br>
                and turn on or tutn off sounds in Settings.<br>
                Have a nice game!</p>
            <span class="btn__close btn__close--rules">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
            document.querySelector('.header').after(rules);
           
            setTimeout(() => {
       
                document.querySelector('.btn__close--rules').addEventListener('click', () => {
                    rules.remove();
                    document.querySelector('.menu').classList.add('inactive');
                })
            }, 1000);
        })
    }

//     hideBlocksMenu(){
        
//         document.addEventListener('click', function(e) {
//             if (e.target.class != 'rules') {
//                 document.querySelector('.rules').remove();
//             }


//           });

//    document.addEventListener('click', function(e) {
//             if (e.target.class != 'score') {
//                 document.querySelector('.score').remove();
//             }
//         });
 
//         // document.querySelector('.btn__close--rules').onblur = function () {
//         //     document.querySelector('.rules').remove();
//         //     document.querySelector('.menu').classList.add('inactive');
//         // }
//     }

    saveResult() {
        let countPlace = 1;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.match(/place/)) {
                countPlace++;
            }

        }
        const time = document.querySelector('.time').innerText.replace("Time:", '');
        localStorage.setItem(`place${countPlace}`,
            `.............${this.countMoves}.............${time}............${this.size}..........${this.mode}`);
    }

    showScore() {
        document.querySelector('.item--scores').addEventListener('click', () => {
            let score = document.createElement('div');
            score.classList.add('score');

            score.innerHTML =
                `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Best scores</h2>
         <ul class="scores__list">
         <li class="score_position position_heading">#.........Steps.........Time.........Field.........Mode</li>
         </ul>
            <span class="btn__close btn__close--score">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
            document.querySelector('.header').after(score);

            let allHiastory = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.match(/place/)) {
                    allHiastory.push(localStorage.getItem(`place${i+1}`));
                }
            }
            allHiastory.sort((a, b) => a - b)

            for (let i = 0; i < allHiastory.length; i++) {
                if (i < 10) {
                    let scoreLi = document.createElement('li');
                    scoreLi.classList.add('score_position');
                    scoreLi.classList.add(`position${i+1}`);

                    const curPos = document.querySelector('.scores__list').lastChild;
                    curPos.after(scoreLi);
                    scoreLi.innerText = `${i+1}${allHiastory[i]}`;
                }
            }
            setTimeout(() => {
                this.hideBlocksMenu();
            //     document.querySelector('.btn__close--rules').addEventListener('click', () => {
            //         rules.remove();
            //         document.querySelector('.menu').classList.add('inactive');
            //     })
            }, 2000);

            // setTimeout(() => {
            //     document.querySelector('.btn__close--score').addEventListener('click', () => {
            //         score.remove();
            //         document.querySelector('.menu').classList.add('inactive');
            //     })
            // }, 500);
        })
    }
}