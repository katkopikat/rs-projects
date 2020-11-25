/* eslint-disable linebreak-style */
import CellNumber from './CellNumber';
import Game from './Game';

export default class NumberPuzzle extends Game {
  constructor(container, width, size, mode) {
    super(container, width, size, mode);
    this.parentConteiner = container;
    this.width = width;
    this.height = width;
    this.size = size;
    this.mode = mode;
    this.cells = [];
    this.arrPosition = [];
    this.limitLeft = [];
    this.limitRight = [];
    this.allowBtnForClick = [];
    this.init();
    this.generateCells();
    this.setLimite();
    this.addClickable();
    this.randomizeItem();
    this.countMoves = 0;
    this.showSolve();
  }

  generateCells() {
    for (let i = 0; i < this.size * this.size; i += 1) {
      this.cells.push(new CellNumber(this, i));
    }
    document.querySelector(`[data-id="${this.size * this.size}"]`).classList.add('empty');
    this.clickItems();
  }
}
