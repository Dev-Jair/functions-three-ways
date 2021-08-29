// Exercise: Functions - three ways to write them

// Function Declaration

function add(numb1, numb2) {
    const square = numb1 ** numb1;
    const square2 = numb2 ** numb2;
    const addedUp = square + square2;
    const sum = addedUp ** addedUp;
    return sum
}

const result = add(2, 3);
console.log(result);

// Function expressions

const addNumb = function(number1, number2) {
    const square3 = number1 ** number1;
    const square4 = number2 ** number2;
    const addItUp = square3 + square4;
    const sum1 = addItUp ** addItUp;
    return sum1
}

const newResult = addNumb(1, 3);
console.log(newResult);

// Arrow functions

const addNumber = (number3, number4) => {
    const square5 = number3 ** number3;
    const square6 = number4 ** number4;
    const addThemUp = square5 + square6;
    const sum2 = addThemUp ** addThemUp;
    return sum2
}

const newestResult = addNumber(2, 2);
console.log(newestResult)