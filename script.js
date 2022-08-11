const buttons = document.querySelectorAll('#btn');
const display = document.getElementById('display');
const answer = document.getElementById('answer');
const disableBtn = document.querySelector('.disable');

buttons.forEach((button) => {
    let numbers = '0123456789.';
    button.addEventListener('click', () => {
        if (numbers.includes(button.textContent)) {
            display.insertAdjacentText("beforeend", `${button.textContent}`);
        } else if (!numbers.includes(button.textContent)){
            display.insertAdjacentText("beforeend", ` ${button.textContent} `);
            disableBtn.disabled = false
        }
        midCheck();
    });
});

window.addEventListener('keydown', function (e) {
    let value = e.key;
    let numbers = '0123456789.';
    let operator = '+-/*'
    if (numbers.includes(value)) {
        display.insertAdjacentText("beforeend", `${value}`);
    } else if (operator.includes(value)){
        display.insertAdjacentText("beforeend", ` ${value} `);
        disableBtn.disabled = false
    }
    midCheck();
    if (value === '=') {
        calculate();
    }
    if (value === 'Backspace'){
        removeLast();
    }
});

const disableButton = () => {
    disableBtn.disabled = true;
}

disableBtn.addEventListener('click', 
disableButton);

document.getElementById('calculate').onclick = function() {
    calculate();
}

let calculate = function() {
    let displayText = display.textContent;
    let displayCalc = displayText.split(' ');
    let operators = '+-/*';
    if (operators.includes(displayCalc[0])) {
        alert `Error Incorrect syntax`;
        answer.textContent = "";
        display.textContent = "";
    } else if (displayCalc[2] === '') {
        alert `Error unfinished calculation`
    } else {
        operate(displayCalc); 
    }
    disableBtn.disabled = false
}

document.getElementById('clear').onclick = function() {
    answer.textContent = "";
    display.textContent = "";
}

let operate = function(calcArray) {
    let newNums = []
    
    for (let i = 0; i < calcArray.length; i++) {
        let currChar = parseFloat(calcArray[i]);
        if (isNaN(currChar) === false) {
            newNums.push(currChar);
        }
    }

    if (calcArray.includes('+')) {
        add(newNums);
    } 
    if (calcArray.includes('-')) {
        subtract(newNums);
    }
    
    if (calcArray.includes('*')) {
        multiply(newNums);
    }
    
    if (calcArray.includes('/')) {
        divide(newNums)
    }
}

let add = function(nums) {
    let sum = 0;

    for (let num in nums) {
        let currNum = nums[num];
        sum += currNum;
    }

    answer.textContent = `${display.textContent} = ${Number(sum.toFixed(2))}`;
    display.textContent = Number(sum.toFixed(2));
}

let subtract = function(nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        sum -= currNum;
    }

    answer.textContent = `${display.textContent} = ${Number(sum.toFixed(2))}`;
    display.textContent = Number(sum.toFixed(2));
}


let multiply = function(nums) {
    let sum = 1;

    for (let num in nums) {
        let currNum = nums[num];
        sum *= currNum;
    }

    answer.textContent = `${display.textContent} = ${Number(sum.toFixed(2))}`;
    display.textContent = Number(sum.toFixed(2));
}

let divide = function(nums) {
    if (nums.includes(0)) {
       alert `Error you tried to divide by 0`;
       answer.textContent = "";
       display.textContent = "";
    } else {
        let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        sum /= currNum;
    }
    answer.textContent = `${display.textContent} = ${Number(sum.toFixed(2))}`;
    display.textContent = Number(sum.toFixed(2));
    }
}

let midCheck = function () {
    let displayText = display.textContent;
    let displayCalc = displayText.split(' ');
    let operators = '+-/*';
    if (displayCalc.length > 3) {
        if (operators.includes(displayCalc[0])) {
            alert `Error Incorrect syntax`;
            answer.textContent = "";
            display.textContent = "";
        } else {
            let firstCalc = displayCalc.slice(0, 3);
        let remainder = displayCalc.slice(3, 4);
        operate(firstCalc); 
            if (answer.textContent === "" && display.textContent === "") {

            } else {
            answer.textContent = `${firstCalc.join(' ')} = ${display.textContent}`;
            display.insertAdjacentText("beforeend", ` ${remainder} `);
            }
        }
    }
}

let removeLast = function() {
    display.textContent = display.textContent.slice(0, -1);
}