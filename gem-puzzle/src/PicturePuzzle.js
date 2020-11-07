
import Cell from './Cell';


//     newGameBtn = document.querySelector('item--new_game'), 
//     saveGameBtn = document.querySelector('item--save_game'), 
//     scoresBtn = document.querySelector('item--scores'), 
//     settingsBtn = document.querySelector('item--settings'), 
//     rulesBtn = document.querySelector('item--rules');

    //moves = `Moves: ${countMoves}`;
    //time = `Time: ${countMoves}:${countMoves}`;

    //let moves = document.querySelector('moves');
    

//createEnvironment();
export default class PicturePuzzle {
    constructor(container, imageSrc, width) {
        this.parentConteiner = container;
        this.imageSrc = imageSrc;
        this.width = width;
        this.size = 4;
        this.cells = [];
        this.sec = 0;
        this.minutes = 0;
      
        this.init();

        const img = new Image();
        img.onload = () => {
           this.height = img.height * this.width / img.width;
            this.container.style.width = `${this.width}px`;
            this.container.style.height = `${this.height}px`;
            this.generateCells();
          
        };
        img.src = this.imageSrc;
    }

    init() {
        this.container = this.createWrapper();
        this.parentConteiner.appendChild(this.container);
    }

    createWrapper() {
        const div = document.createElement('div');
        div.className ='puzzle';
        div.style.position = 'relative';
        div.style.margin = '0 auto';
        return div;
    }

    generateCells() {
        for (let i = 0; i < this.size * this.size - 1; i++) {
            this.cells.push(new Cell(this, i));
        }
    }
}
    // randomizeCells(){
    // }

    // 

