class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperandTextElement.innerText = '0';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    plusmin() {
        if (this.currentOperand.indexOf('-') === -1) {
            this.currentOperand = '-' + this.currentOperand;
        } else {
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
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    sqrtFunc() {
        if (+this.currentOperand < 0) {
            this.currentOperand = 'отрицательных чисел';
            this.previousOperandTextElement.innerText = 'и не изымай корень из';
            this.operation = undefined;
        } else {
            let computation;
            let current = parseFloat(this.currentOperand)
            computation = Math.sqrt(current);
            this.currentOperand = computation;
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
            case '/':
                computation = ((prev * 10000) / 10000) / ((current * 10000) / 10000);
                break;
            case '*':
                computation = ((prev * 10000) / 10000) * ((current * 10000) / 10000);
                break;
            case '^':
                computation = Math.pow(prev, current);
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.previousOperand} ${this.operation}`;
        }
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
    calculator.delete();
    calculator.updateDisplay();
})

sqrtBtn.addEventListener('click', button => {
    calculator.sqrtFunc();
    calculator.updateDisplay();
})