/* eslint-disable linebreak-style */
export default class Cell {
  constructor(puzzle, ind) {
    this.index = ind;
    this.puzzle = puzzle;
    this.height = this.puzzle.height / this.puzzle.size;
    this.width = this.height;

    this.container = this.createDiv();
    const wrapper = document.querySelector('.puzzle');
    wrapper.appendChild(this.container);
  }

  createDiv() {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.classList.add('disabled');
    div.style.order = `${this.index + 1}`;
    div.innerText = `${this.index + 1}`;
    div.dataset.id = `${this.index + 1}`;
    div.dataset.pos = `${this.index + 1}`;
    div.style.height = `${this.puzzle.height / this.puzzle.size - 0.2}rem`;
    div.style.width = `${this.puzzle.width / this.puzzle.size - 0.2}rem`;

    if (this.puzzle.size === 5) div.classList.add('cell5');
    if (this.puzzle.size === 6) div.classList.add('cell6');
    if (this.puzzle.size === 7) div.classList.add('cell7');
    if (this.puzzle.size === 8) div.classList.add('cell8');
    return div;
  }
}
