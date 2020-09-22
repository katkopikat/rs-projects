class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';

        this.operation = undefined;
    }

    delete() {}

    plusmin(){
            if (this.currentOperand.indexOf('-') === -1) this.currentOperand = '-' + this.currentOperand;
            else this.currentOperand = this.currentOperand.replace("-", "");
            
    }

    addNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
         this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '' ;
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

       if( isNaN(prev) || isNaN(current) ) return;
        switch (this.operation){
            case '+':
                computation = prev + current;
                break; 
            case '-':
                computation = prev - current;
                break; 
            case '/':
                computation = prev / current;
                break; 
            case '*':
                computation = prev * current;
                break; 
            case '^':
               computation = Math.pow(prev, current);
                break; 
            case '\u221A':
                computation = Math.sqrt(current);
                break; 
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '' ;

    }

    updateDisplay() {
       this.currentOperandTextElement.innerText = this.currentOperand;
       if(this.operation != null){
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
       }
       
    }
}

const numberBtns = document.querySelectorAll('.data-number'),
    operationBtns = document.querySelectorAll('.data-operation'),
    resultBtn = document.getElementById('result'),
    delBtn = document.getElementById('ce'),
    allClearBtn = document.getElementById('c'),

    //point = document.getElementById('point'),
    plusminBtn = document.getElementById('plusmin'),

    currentOperandTextElement = document.getElementById('current-operand'),
    previousOperandTextElement = document.getElementById('previous-operand');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

resultBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
  })

allClearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
   
})

plusminBtn.addEventListener('click', button => {
    calculator.plusmin();
    calculator.updateDisplay();
});



delBtn.addEventListener('click', button => {
    //calculator.clear();
    //calculator.updateDisplay();
})