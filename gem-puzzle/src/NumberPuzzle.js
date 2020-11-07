import {
    configs
} from 'eslint-plugin-prettier';
import CellNumber from './CellNumber';


//     newGameBtn = document.querySelector('item--new_game'), 
//     saveGameBtn = document.querySelector('item--save_game'), 
//     scoresBtn = document.querySelector('item--scores'), 
//     settingsBtn = document.querySelector('item--settings'), 
//     rulesBtn = document.querySelector('item--rules');


// let moves = document.querySelector('moves');

export default class NumberPuzzle {
    constructor(container, width) {
        this.parentConteiner = container;
        this.width = width;
        this.size = 4;
        this.cells = [];
        this.historyMoves = [];
        this.historyMovesOrder = [];
        this.historyMovesOrderEmpty = [];
        this.arrPosition = [];
        this.countMoves = 0;
        this.limitLeft = [];
        this.limitRight = [];

        this.init();
        this.generateCells();
        this.showSolve();
        this.setLimite();
        this.addClickable();
      
        this.emptyPos = +this.getEmptyPosition();

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

    generateCells() {
        for (let i = 0; i < this.size * this.size; i++) {
            this.cells.push(new CellNumber(this, i));
        }
        document.querySelector('[data-id="16"]').classList.add('empty');
        this.clickItems();
    }

    //     clickEvent() {
    //         document.querySelectorAll('.cell').forEach(item => {
    //         item.addEventListener('', () => {
    //          // generateModalContent();
    // //openModal(modal);
    // console.log('click');
    //         })
    //       });
    //     }

    setLimite() {
        for (let i = 1; i <= this.size * this.size; i += this.size) { //Ограничение слева
            this.limitLeft.push(i);
           
        }
        for (let i = this.size; i <= this.size * this.size; i += this.size) { //Ограничение справа
            this.limitRight.push(i);
        }

        return this.limitLeft, this.limitRight ;
    }
    getEmptyPosition() {
        let pos = document.querySelector('.empty').style.order;
        return pos;
    }

    addClickable() {
        this.emptyPos = +this.getEmptyPosition();
        let tempTop, tempBottom, tempLeft, tempRight;

        //вверх
        if ((this.emptyPos - this.size) >= 1) {
            tempTop = document.querySelector(`[data-pos="${this.emptyPos - this.size}"]`);
            tempTop.classList.add('clickable');
        }

        //вниз
        if (this.emptyPos + this.size <= this.size * this.size) {
            tempBottom = document.querySelector(`[data-pos="${this.emptyPos + this.size}"]`)
            tempBottom.classList.add('clickable');
        }

         //влево
        if (!this.limitLeft.includes( this.emptyPos)) { 
            tempLeft = document.querySelector(`[data-pos="${this.emptyPos - 1}"]`);
            tempLeft.classList.add('clickable');
         }      

         //вправо
        if (!this.limitRight.includes( this.emptyPos)) {
            tempRight = document.querySelector(`[data-pos="${this.emptyPos + 1}"]`);
            tempRight.classList.add('clickable');
        }   
    }

    deleteClickable() {
        document.querySelectorAll('.clickable').forEach(item => item.classList.remove('clickable'));
    }

    clickItems() {
        let empty = document.querySelector('.empty');
        let grid = document.querySelectorAll('.cell');

        grid.forEach((item, index) => {
            item.addEventListener('click', () => {
                let curPos = item.style.order;

                item.style.order = this.emptyPos;
                item.dataset.pos = this.emptyPos;

                document.querySelector('.empty').style.order = curPos;
                document.querySelector('.empty').dataset.pos = curPos;

                this.arrPosition.push(`${index+1},${curPos},${this.emptyPos}`);
                this.countMoves += 1;
                this.updateMoves();
                this.deleteClickable();
                this.addClickable();

                //===================== ОГРАНИЧЕНИ
            });
        })


        return this.arrPosition;
    }


    updateMoves() {
        document.querySelector('.moves').innerText = `Moves: ${this.countMoves}`;
    }

    reverseHistory() {

        let arr = this.arrPosition.reverse();
        let i = 0;

        function delay() {
            return new Promise(resolve => setTimeout(resolve, 250));
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
        })
    }
}