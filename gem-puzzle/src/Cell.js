/* eslint-disable linebreak-style */
export default class Cell {
  constructor(puzzle, ind) {
    this.index = ind;
    this.puzzle = puzzle;

    this.width = this.puzzle.width / this.puzzle.size;
    this.height = this.width;
    this.container = this.createCellElement();
    puzzle.container.appendChild(this.container);
  }

  createCellElement() {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.classList.add('disabled');

    cellElement.style.order = `${this.index + 1}`;
    cellElement.dataset.id = `${this.index + 1}`;
    cellElement.dataset.pos = `${this.index + 1}`;

    cellElement.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
    cellElement.style.backgroundSize = `${this.puzzle.width}rem ${this.puzzle.height}rem`;

    cellElement.innerText = `${this.index + 1}`;
    cellElement.style.color = 'rgba(255,255,255,0.3)';

    const blockWidth = this.puzzle.width / this.puzzle.size;
    const blockHeight = this.puzzle.height / this.puzzle.size;

    const left = blockWidth * (this.index % this.puzzle.size);
    const top = blockHeight * (Math.floor(this.index / this.puzzle.size));

    cellElement.style.height = `${this.puzzle.height / this.puzzle.size - 0.2}rem`;
    cellElement.style.width = `${this.puzzle.width / this.puzzle.size - 0.2}rem`;

    cellElement.style.backgroundPosition = `-${left}rem -${top}rem`;

    return cellElement;
  }
}
