let numbers = document.querySelectorAll('.data-number'),
    operations = document.querySelectorAll('.data-operation'),
    point = document.getElementById('point'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    result = document.getElementById('result'),
    display = document.getElementById('current-operand'),
    displayPrevious = document.getElementById('previous-operand'),
    MemoryCurrentNumber = "0",
    MemoryNewNumber = false,
    MemoryPendingOperation = '';



for (let i = 0; i < numbers.length; i++) {
    var numberBtn = numbers[i];
    numberBtn.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operationPress(e.target.textContent);
        console.log(e.target.textContent);
    });
};

point.addEventListener('click', function (e) {
    pointBtn(e.target.textContent);
    console.log(e.target.textContent);
});


c.addEventListener('click', function (e) {
    clear(e.target.id);
    console.log(e);
});


ce.addEventListener('click', function (e) {
    clear(e.target.id);
    console.log(e);
});





function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        }
    }
}

function operationPress(op) {
    let valueBeforeOperation = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== "=") {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        displayPrevious.value = MemoryCurrentNumber;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(valueBeforeOperation);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(valueBeforeOperation);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(valueBeforeOperation);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(valueBeforeOperation);
       } else if (MemoryPendingOperation === '^') {
           MemoryCurrentNumber = parseFloat(valueBeforeOperation * valueBeforeOperation);
        }else if (MemoryPendingOperation === '\u221A') {
            MemoryCurrentNumber = parseFloat(Math.sqrt(valueBeforeOperation));
         } else {
            MemoryCurrentNumber = parseFloat(valueBeforeOperation);
        }
        
        display.value = parseFloat(MemoryCurrentNumber);
        MemoryPendingOperation = op;
    }


}
function pointBtn(point) {
    let valueBeforeOperation = display.value;

    if (MemoryNewNumber){
        valueBeforeOperation = "0.";
        MemoryNewNumber = false;
    } else{
        if (valueBeforeOperation.indexOf('.') === -1 ){
            valueBeforeOperation += '.';
        } 
    }
    display.value = valueBeforeOperation;
}

function clear(id) {
    if (id === 'ce'){
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c'){
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = 0;
    }
}