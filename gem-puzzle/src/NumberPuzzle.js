import CellNumber from './CellNumber';
import Game from './Game';



//     newGameBtn = document.querySelector('item--new_game'), 
//     saveGameBtn = document.querySelector('item--save_game'), 
//     scoresBtn = document.querySelector('item--scores'), 
//     settingsBtn = document.querySelector('item--settings'), 
//     rulesBtn = document.querySelector('item--rules');


// let moves = document.querySelector('moves');

export default class NumberPuzzle extends Game {
    constructor(container, width, size) {
        super(container, width, size);
        this.parentConteiner = container;
        this.width = width;
        this.height = width;
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

        this.init();
        this.generateCells();
        this.emptyPos = +this.getEmptyPosition();
        this.setLimite();
        this.addClickable();
        this.randomizeItem();
       
        this.showSolve();

        document.querySelector('.empty').ondragover = this.allowDrop;
        document.querySelector('.empty').ondrop = this.drop;

    }

    generateCells() {
        for (let i = 0; i < this.size * this.size; i++) {
            this.cells.push(new CellNumber(this, i));
        }
        document.querySelector(`[data-id="${this.size*this.size}"]`).classList.add('empty');
        this.clickItems();
    }


}