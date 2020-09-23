class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperandTextElement.innerText = '';
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand.length !== 1 && this.currentOperand[0] !== '0') {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        } else {
            this.currentOperand = '0';
        }
    }

    plusmin() {
        if (this.currentOperand.indexOf('-') === -1) 
            this.currentOperand = '-' + this.currentOperand;
         else {
            this.currentOperand = this.currentOperand.replace("-", "");
        }
    }

    addNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        if ((this.currentOperand.length >= 1 && this.currentOperand[0] === '0') ||
            (this.currentOperand[0] === '-' && this.currentOperand[1] === '0')) {
            this.currentOperand = this.currentOperand.toString().replace("0", "");
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') this.compute();
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    sqrtFunc() {
        this.operation = '\u221A';
        this.operandBeforeResult = this.currentOperand;

        if (+this.currentOperand < 0) {
            this.currentOperandTextElement.innerText = 'отрицательных чисел';
            this.previousOperandTextElement.innerText = 'и не извлекай корень из';
            this.operation = undefined;

        } else {
            let current = parseFloat(this.currentOperand)

            this.previousOperandTextElement.innerText =
                `${this.operation} ${this.operandBeforeResult}`;
                
            currentOperandTextElement.innerText = Math.sqrt(current);
            this.currentOperand = Math.sqrt(current);
            this.operation = undefined;
            this.previousOperand = '';
            this.readyToReset = true;
        }
  
    }


    compute() {
        let computation;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = (prev * 10000 + current * 10000) / 10000;
                break;
            case '-':
                computation = (prev * 10000 - current * 10000) / 10000;
                break;
            case '÷':
                if (current === 0) computation = '\u221E';
                else computation = ((prev * 10000) / 10000) / ((current * 10000) / 10000);            
                break;
            case '×':
                computation = ((prev * 10000) / 10000) * ((current * 10000) / 10000);
                break;
            case '^':
                computation = Math.pow(prev, current);
                break;
            default:
                return;
        }
        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        this.operandBeforeResult = current;
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.previousOperand} ${this.operation}`;
        }
    }

    updateResaltDisplay() {
        this.previousOperandTextElement.innerText += ` ${this.operandBeforeResult}`;
    }

}

const numberBtns = document.querySelectorAll('.data-number'),
    operationBtns = document.querySelectorAll('.data-operation'),
    sqrtBtn = document.getElementById('sqrt'),
    resultBtn = document.getElementById('result'),
    delBtn = document.getElementById('del'),
    allClearBtn = document.getElementById('c'),
    plusminBtn = document.getElementById('plusmin'),
    currentOperandTextElement = document.getElementById('current-operand'),
    previousOperandTextElement = document.getElementById('previous-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (calculator.previousOperand === "" &&
            calculator.currentOperand !== "" &&
            calculator.readyToReset) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }
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
    calculator.updateResaltDisplay();
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
    calculator.delete();
    calculator.updateDisplay();
})

sqrtBtn.addEventListener('click', button => {
    calculator.sqrtFunc();
})