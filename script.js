const display = document.getElementById('display')
let displayText = display.textContent
let displayCalc = displayText.split(' ');
console.log(displayCalc);

let operate = function(calcArray) {
    let numbers = '1234567890'
    let newNums = []
    for (let i = 0; i < calcArray.length; i++) {
        let currChar = calcArray[i];
        if (numbers.includes(currChar)) {
            let typeChange = Number(currChar)
            newNums.push(typeChange);
        }
    }
    console.log(newNums)
    if (calcArray.includes('+')) {
        add(newNums);
    } 
    if (operator === '-') {
        subtract(numsArr);
    }
    
    if (operator === '*') {
        multiply(numsArr);
    }
    
    if (operator === '/') {
        divide(numsArr)
    }
}
let add = function(nums) {
    let sum = 0;

    for (let num in nums) {
        let currNum = nums[num];
        sum += currNum;
    }

    console.log(sum);
}

let subtract = function(nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        sum -= currNum;
    }

    console.log(sum);
}

let multiply = function(nums) {
    let sum = 1;

    for (let num in nums) {
        let currNum = nums[num];
        sum *= currNum;
    }

    console.log(sum);
}

let divide = function(nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        sum /= currNum;
    }

    console.log(sum);
}

operate(displayCalc);
operate(10, '-', 3);
operate(5, '*', 5);
operate(10, '/', 5);