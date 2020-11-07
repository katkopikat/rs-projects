export default class Cell {
    constructor(puzzle, ind) {
        this.index = ind;
        this.puzzle = puzzle;
        this.height = this.puzzle.height / this.puzzle.size;
        this.width = this.puzzle.width / this.puzzle.size;

        this.container = this.createDiv();
        let wrapper = document.querySelector('.puzzle');
        wrapper.appendChild(this.container);

    }

    createDiv() {
        const div = document.createElement('div');

        div.classList.add('cell');
        div.classList.add('disabled');
        //div.style.order = `${ind}`;
        //div.style.position = 'absolute';
        // div.style.border = '1px solid #FFF';
        //let blockWidth = this.wrapper.width /this.puzzle.size;
        //let blockHeight = this.wrapper.height /this.puzzle.size;
        div.style.height = '125px';
        div.style.width = '125px';
        div.style.order = `${this.index+1}`;
        div.innerText = `${this.index+1}`;
        div.dataset.id = `${this.index+1}`;
        div.dataset.pos = `${this.index+1}`;
        //div.style.left = `${left}px`;
        // div.style.top = `${top}px`;
        // div.onclick = () => {
        //     console.log(`Элемент  ${div.dataset.id} с позицией  ${div.style.order}`);
        //     this.moveItems(); 
        // }

        return div;
    }
}