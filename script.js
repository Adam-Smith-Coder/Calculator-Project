const display = document.getElementById('display')
let displayText = display.textContent
let displayCalc = displayText.split(' ');
console.log(displayCalc)

let operate = function(calcArray) {
    let newNums = []
    
    for (let i = 0; i < calcArray.length; i++) {
        let currChar = parseInt(calcArray[i]);
        if (isNaN(currChar) === false) {
            newNums.push(currChar);
        }
    }
    console.log(newNums)

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