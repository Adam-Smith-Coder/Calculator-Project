const buttons = document.querySelectorAll('#btn');
const display = document.getElementById('display');
const answer = document.getElementById('answer');

buttons.forEach((button) => {
    let numbers = '0123456789';
    button.addEventListener('click', () => {
        if (numbers.includes(button.textContent)) {
            display.insertAdjacentText("beforeend", `${button.textContent}`);
        } else {
            display.insertAdjacentText("beforeend", ` ${button.textContent} `);
        }
    });
});

document.getElementById('calculate').onclick = function() {
    let displayText = display.textContent;
    let displayCalc = displayText.split(' ');
    operate(displayCalc);
}

document.getElementById('clear').onclick = function() {
    answer.textContent = "";
    display.textContent = "";
}

let operate = function(calcArray) {
    let newNums = []
    
    for (let i = 0; i < calcArray.length; i++) {
        let currChar = parseInt(calcArray[i]);
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

    answer.textContent = display.textContent;
    display.textContent = sum;
}

let subtract = function(nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        sum -= currNum;
    }

    answer.textContent = display.textContent;
    display.textContent = sum;
}

let multiply = function(nums) {
    let sum = 1;

    for (let num in nums) {
        let currNum = nums[num];
        sum *= currNum;
    }

    answer.textContent = display.textContent;
    display.textContent = sum;
}

let divide = function(nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        sum /= currNum;
    }

    answer.textContent = display.textContent;
    display.textContent = sum;
}