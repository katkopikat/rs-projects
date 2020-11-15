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
        div.style.margin = '0 auto';
        div.style.width = `${this.width}rem`;
        return div;
    }

    //SET LIMIT FOR MOVE ITEMS
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
            //item.draggable = false;
        });
        return this.allowBtnForClick;
    }

    //ADD EVENT LISTENER FOR ITEM, MOVE ITEMS AND ANIMATION
    clickItems() {
        const empty = document.querySelector('.empty'),
            grid = document.querySelectorAll('.cell'),
            audio = document.querySelector('.audio');
        // audio.muted = true;

        grid.forEach((item, index) => {
            item.addEventListener('click', (e) => {

                item.style.setProperty('transition', 'all 0.3s ease-in-out');
                let distanse = parseInt(item.style.width) + 1;
                //animation
                if (!this.isAutoClick) {
                    if (this.audioOn) {
                        // audio.muted = false;
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
        let randomNumb = this.getRandomInt(4, 7);
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
        this.isAutoClick = false
        return this.isAutoClick;
    }

    //update moves
    updateMoves() {
        document.querySelector('.moves').innerText = `Moves: ${this.countMoves}`;
    }

    //remove 2 duplicate steps
    removeDuplicateSteps() {
        for (let i = 0; i < this.arrPosition.length; i++) {
            if (this.arrPosition[i] == this.arrPosition[i - 1]) {
                this.arrPosition.splice(i, 1);
            }
        }
        return this.arrPosition;
    }
    //solve animation (reverse animation)
    reverseHistory() {
        this.removeDuplicateSteps();
        let arr = this.arrPosition.reverse();
        let i = 0;

        function delay() {
            return new Promise(resolve => setTimeout(resolve, 100));
        }

        async function delayedLog(item) {
            await delay();

            let ArrOneStep = arr[i].split(',');
            let temp = document.querySelector(`[data-id="${ArrOneStep[0]}"]`);
            temp.style.order = `${ArrOneStep[1]}`;
            let tempEmpty = document.querySelector('.empty');
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

    saveGame() {
        document.querySelector('.item--save_game').addEventListener('click', () => {
            console.log('записать в local')
            //console.log(this.arrPosition)
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
            let pos = document.querySelector(`[data-pos="${i}"]`).dataset.pos;
            let id = document.querySelector(`[data-pos="${i}"]`).dataset.id;
            if (pos == id && i == this.size * this.size) {
                this.showWinMessage();
                console.log(`You win for ##:## ${this.countMoves} moves!`);
            } else if (pos == id) continue;
            else break;
        }
    }

    openMenu() {
        document.querySelector('.menu__btn').addEventListener('click', () => {
            document.querySelector('.menu').classList.remove('inactive');
            console.log('click');
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
        //this.showSettings();

    }
    closeMenu(){
        console.log('закрыть меню')
        document.querySelector('.close--menu').addEventListener('click', () => {
        document.querySelector('.menu').classList.add('inactive');

        })
    }

    showWinMessage() {
        let win = document.createElement('div');
        win.classList.add('win');
        win.innerHTML =
            `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>You won!</h2>
            <p class="winText">You won in ##:## and ${this.countMoves} moves!</p>
            <span class="btn__close">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
        document.querySelector('.header').after(win);

        setTimeout(() => {
            document.querySelector('.btn__close').addEventListener('click', () => {
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
                Also you can choose game field size of color in Settings</p>
            <span class="btn__close">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
            document.querySelector('.header').after(rules);

            setTimeout(() => {
                document.querySelector('.btn__close').addEventListener('click', () => {
                    rules.remove();
                })
            }, 500);
        })
    }

    saveResult() {
        let countPlace = 1;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.match(/place/)) {
                countPlace++;
            }
        }
        localStorage.setItem(`place${countPlace}`, `.........${this.size}...........${this.mode}.........##:##...........${this.countMoves}`);
    }

    showScore() {

        document.querySelector('.item--scores').addEventListener('click', () => {
            let score = document.createElement('div');
            score.classList.add('score');

            let currencyResalt = localStorage.getItem(`place${countPlace}`);
            score.innerHTML =
                `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Best scores</h2>
         <ul>
         <li class="score_position">#.........Field.........Mode.........Time.........Steps</li>
         <li class="score_position">1..............................................</li>
         <li class="score_position">2..............................................</li>
         <li class="score_position">3..............................................</li>
         <li class="score_position">4..............................................</li>
         <li class="score_position">5..............................................</li>
         <li class="score_position">6..............................................</li>
         <li class="score_position">7..............................................</li>
         <li class="score_position">8..............................................</li>
         <li class="score_position">9..............................................</li>
         <li class="score_position">10.............................................</li>
         </ul>
            <span class="btn__close">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
            document.querySelector('.header').after(score);


            // let countPlace = 1;
            // for(let i=0; i < localStorage.length; i++) {
            //     let key = localStorage.key(i);
            //     if(key.match(/place/)){
            //         if(key.slice(-4))
            //      //countPlace++;
            //     }
            //  }



            setTimeout(() => {
                document.querySelector('.btn__close').addEventListener('click', () => {
                    score.remove();
                })
            }, 500);
        })
    }


}