export default class Game {
    constructor(container, width, size) {
        this.parentConteiner = container;
        this.width = width;
        //this.size = 4;
        this.cells = [];
        this.historyMoves = [];
        this.historyMovesOrder = [];
        this.historyMovesOrderEmpty = [];
        this.arrPosition = [];
        this.countMoves = 0;
        this.limitLeft = [];
        this.limitRight = [];
        this.allowBtnForClick = [];

        // this.init();
        // this.generateCells();
        // this.emptyPos = +this.getEmptyPosition();
        // this.setLimite();
        // this.addClickable();
        // this.randomizeItem();
       
        // this.showSolve();

       
        // document.querySelector('.empty').ondragover = this.allowDrop;
        // document.querySelector('.empty').ondrop = this.drop;

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

    setLimite() {
        for (let i = 1; i <= this.size * this.size; i += this.size) { //Ограничение слева
            this.limitLeft.push(i);

        }
        for (let i = this.size; i <= this.size * this.size; i += this.size) { //Ограничение справа
            this.limitRight.push(i);
        }

        return this.limitLeft, this.limitRight;
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
            tempTop.draggable = true;
            this.allowBtnForClick.push(this.emptyPos - this.size);
        }

        //вниз
        if (this.emptyPos + this.size <= this.size * this.size) {
            tempBottom = document.querySelector(`[data-pos="${this.emptyPos + this.size}"]`);
            tempBottom.classList.add('clickable');
            tempBottom.draggable = true;
            this.allowBtnForClick.push(this.emptyPos + this.size);
        }

        //влево
        if (!this.limitLeft.includes(this.emptyPos)) {
            tempLeft = document.querySelector(`[data-pos="${this.emptyPos - 1}"]`);
            tempLeft.classList.add('clickable');
            tempLeft.draggable = true;
            this.allowBtnForClick.push(this.emptyPos - 1);
        }

        //вправо
        if (!this.limitRight.includes(this.emptyPos)) {
            tempRight = document.querySelector(`[data-pos="${this.emptyPos + 1}"]`);
            tempRight.classList.add('clickable');
            tempRight.draggable = true;
            this.allowBtnForClick.push(this.emptyPos + 1);
        }
        //console.log(`Массив доступных кнопок: ${this.allowBtnForClick}`)
        return  this.allowBtnForClick;

    }

    deleteClickable() {
        this.allowBtnForClick = [];
        document.querySelectorAll('.clickable').forEach(item => {
            item.classList.remove('clickable');
            item.draggable = false;
        });
        return this.allowBtnForClick;
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
        });


        return this.arrPosition;
    }

    autoClickItems() {

        //let empty = document.querySelector('.empty');
        //let grid = document.querySelectorAll('.cell');

       let RandomNumbBtn = this.allowBtnForClick[this.getRandomInt(0, this.allowBtnForClick.length)];//+
       console.log(`Выбранная кнопка: ${RandomNumbBtn}`)
       let randomBtn = document.querySelector(`[data-pos="${RandomNumbBtn}"]`);
        //console.log(randomBtn)
        let empty = document.querySelector('.empty');
        let grid = document.querySelectorAll('.cell');


        grid.forEach((item, index) => {
            item.addEventListener('click', () => {
                let curPos = item.style.order;

                item.style.order = this.emptyPos;
                item.dataset.pos = this.emptyPos;

                document.querySelector('.empty').style.order = curPos;
                document.querySelector('.empty').dataset.pos = curPos;

                //this.arrPosition.push(`${index+1},${curPos},${this.emptyPos}`);
                //this.countMoves += 1;
                //this.updateMoves();
                this.deleteClickable();
                this.addClickable();

                //===================== ОГРАНИЧЕНИ
            });
        });

        randomBtn.click();
        //console.log(this.arrPosition)
        //return this.arrPosition;

    }

    removeDuplicateSteps(){
        //console.log(this.arrPosition.length)
        for(let i = 0; i< this.arrPosition.length; i++){
            if(this.arrPosition[i] == this.arrPosition[i-1] ){
               console.log(`${this.arrPosition[i]} и ${this.arrPosition[i-1]}`);
                this.arrPosition.splice(i, 1);
             } 
         }   
     return this.arrPosition;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    randomizeItem(){
      let randomNumb = this.getRandomInt(100, 300);
      console.log(randomNumb);
       for(let i = 0; i < randomNumb; i++){
           this.autoClickItems();
       }
    }

    dragItems() {

    }
    allowDrop (event) {
        event.preventDefault();
    }

    drag (event) {
        event.dataTransfer.setData('id', event.tardet.id);
    }

    drop (event) {
        let itemId = event.dataTransfer.getData('id');
        console.log(itemId);
        //event.target.append()
    }

    updateMoves() {
        document.querySelector('.moves').innerText = `Moves: ${this.countMoves}`;
    }

    reverseHistory() {
        console.log(this.arrPosition.length);
      this.removeDuplicateSteps();
        console.log(this.arrPosition.length);
        console.log(this.arrPosition);
        let arr = this.arrPosition.reverse();
        let i = 0;

        function delay() {
            return new Promise(resolve => setTimeout(resolve, 100));
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
        });
    }
}