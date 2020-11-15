export default class Cell {
    constructor(puzzle, ind) {
        this.index = ind;
        this.puzzle = puzzle;
       
        this.width = this.puzzle.width / this.puzzle.size;
        this.height =  this.width;
        this.container = this.createDiv();
        puzzle.container.appendChild(this.container);
    }

    createDiv() {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.classList.add('disabled');

        div.style.order = `${this.index+1}`;
        div.dataset.id = `${this.index+1}`;
        div.dataset.pos = `${this.index+1}`;

        div.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
        div.style.backgroundSize = `${this.puzzle.width}rem ${this.puzzle.height}rem`;

        div.innerText = `${this.index+1}`;   
        div.style.color = 'rgba(255,255,255,0.3)'

        let blockWidth = this.puzzle.width /this.puzzle.size;
        let blockHeight = this.puzzle.height /this.puzzle.size;
  
    
        const left = blockWidth * (this.index % this.puzzle.size);
        const top = blockHeight * (Math.floor(this.index / this.puzzle.size) );

        div.style.height = `${this.puzzle.height /this.puzzle.size - 0.2}rem`;
        div.style.width = `${this.puzzle.width /this.puzzle.size - 0.2}rem`;

       div.style.backgroundPosition = `-${left}rem -${top}rem`;

        return div;
    }

}