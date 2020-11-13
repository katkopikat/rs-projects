import {
    formatWithCursor
} from "prettier";

export default class Game {
    constructor(container, width, size) {
        this.parentConteiner = container;
        this.width = width;
        this.size = size;
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

        // this.setLimite();
        // this.emptyPos = +this.getEmptyPosition();
        // this.addClickable();
        // this.randomizeItem();

        // this.showSolve();
        // this.saveGame();
        // this.gameIsSolved();

        //this.emptyPos = 0;

        // this.init();
        // this.generateCells();

        // this.setLimite();
        // this.addClickable();
        // this.randomizeItem();

        // this.showSolve();


        // document.querySelector('.empty').ondragover = this.allowDrop;
        // document.querySelector('.empty').ondrop = this.drop;

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
        div.style.width = `${this.width}px`;
        // div.style.height = `${this.width}px`;
        //this.height = img.height * this.width /  this.container.width;
        // div.style.width = `${this.width}px`;
        // div.style.height = `${this.height}px`;
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
        //console.log(`Массив доступных кнопок: ${this.allowBtnForClick}`)
        return this.allowBtnForClick;

    }

    //delete cleckable property  
    deleteClickable() {
        this.allowBtnForClick = [];
        document.querySelectorAll('.clickable').forEach(item => {
            item.classList.remove('clickable');
            item.draggable = false;
        });
        return this.allowBtnForClick;
    }

    //ADD EVENT LISTENER FOR ITEM, MOVE ITEMS AND ANIMATION
    clickItems() {
        let empty = document.querySelector('.empty');
        let grid = document.querySelectorAll('.cell');

        grid.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                item.style.setProperty('transition', 'all 0.3s ease-in-out');
                let distanse = parseInt(item.style.width) + 3.2;

                //animation
                if (!this.isAutoClick) {
                    if (e.target.style.order == this.emptyPos + 1) {
                        item.style.transform = `translateX(-${distanse}px)`;

                    } else if (e.target.style.order == this.emptyPos - 1) {
                        item.style.transform = `translateX(${distanse}px)`;

                    } else if (e.target.style.order == this.emptyPos + this.size) {
                        item.style.transform = `translateY(-${distanse}px)`;

                    } else if (e.target.style.order == this.emptyPos - this.size) {
                        item.style.transform = `translateY(${distanse}px)`;
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
                        this.countMoves++;
                        this.updateMoves();
                        this.gameIsSolved();
                        this.deleteClickable();
                        this.addClickable();
                }
            });
        });
        return this.arrPosition;
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

    //RANDOM ITEM:
    //get random number
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    //make n-random autoclick for ransomize items on the field
    randomizeItem() {
        let randomNumb = this.getRandomInt(150, 0);
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

    // dragItems() {

    // }
    // allowDrop(event) {
    //     event.preventDefault();
    // }

    // drag(event) {
    //     event.dataTransfer.setData('id', event.tardet.id);
    // }

    // drop(event) {
    //     let itemId = event.dataTransfer.getData('id');
    //     console.log(itemId);
    //     //event.target.append()
    // }

  

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
        document.querySelector('.solve').addEventListener('click', () => {
            this.reverseHistory();
        });
    }

    saveGame() {
        document.querySelector('.item--save_game').addEventListener('click', () => {
            // console.log('записать в local')
            //console.log(this.arrPosition)
            localStorage.setItem('game', this.arrPosition);

        });
    }


    //document.querySelector('.empty').style.order = curPos;
    // document.querySelector('.empty').dataset.pos = curPos;

    gameIsSolved(){
        for (let i = 1; i <= this.size*this.size; i++) {
            let pos = document.querySelector(`[data-pos="${i}"]`).dataset.pos;
            let id = document.querySelector(`[data-pos="${i}"]`).dataset.id;
            if (pos == id && i == this.size*this.size) {
                console.log(`You win for ##:## ${this.countMoves} moves!`);} 
            else if (pos == id ) continue;
            else break;
        }
    }
}