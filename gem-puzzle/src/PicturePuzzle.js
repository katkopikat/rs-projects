/* eslint-disable linebreak-style */
import Cell from './Cell';
import Game from './Game';

export default class PicturePuzzle extends Game {
  constructor(container, imageSrc, width, size, mode, storage) {
    super(container, width, size, mode, storage);
    this.imageSrc = imageSrc;
    this.parentConteiner = container;
    this.width = width;
    this.height = width;
    this.size = size;
    this.mode = mode;
    this.cells = [];
    this.init();

    const img = new Image();
    img.onload = () => {
      this.height = (img.height * this.width) / img.width;
      this.container.style.width = `${this.width}rem`;
      this.container.style.height = `${this.height}rem`;
    };

    img.src = this.imageSrc;
    this.generateCells();
    this.setLimite();
    this.addClickable();
    this.randomizeItem();
    this.showSolve();
  }

  generateCells() {
    for (let i = 0; i < this.size * this.size; i += 1) {
      this.cells.push(new Cell(this, i));
    }
    document.querySelector(`[data-id="${this.size * this.size}"]`).classList.add('empty');
    this.clickItems();
  }
}
