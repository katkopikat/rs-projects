/* eslint-disable linebreak-style */
export default class Cell {
  constructor(puzzle, ind) {
    this.index = ind;
    this.puzzle = puzzle;
    this.height = this.puzzle.height / this.puzzle.size;
    this.width = this.height;

    this.container = this.createCellElement();
    const wrapper = document.querySelector('.puzzle');
    wrapper.appendChild(this.container);
  }

  createCellElement() {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.classList.add('disabled');
    cellElement.style.order = `${this.index + 1}`;
    cellElement.innerText = `${this.index + 1}`;
    cellElement.dataset.id = `${this.index + 1}`;
    cellElement.dataset.pos = `${this.index + 1}`;
    cellElement.style.height = `${this.puzzle.height / this.puzzle.size - 0.2}rem`;
    cellElement.style.width = `${this.puzzle.width / this.puzzle.size - 0.2}rem`;

    if (this.puzzle.size === 5) cellElement.classList.add('cell5');
    if (this.puzzle.size === 6) cellElement.classList.add('cell6');
    if (this.puzzle.size === 7) cellElement.classList.add('cell7');
    if (this.puzzle.size === 8) cellElement.classList.add('cell8');
    return cellElement;
  }
}
