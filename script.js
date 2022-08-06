
let operate = function(num1, operator, num2) {
    let numsArr = [num1, num2]
    if (operator === '+') {
        add(numsArr);
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

operate(5, '+', 5);
operate(10, '-', 3);
operate(5, '*', 5);
operate(10, '/', 5);