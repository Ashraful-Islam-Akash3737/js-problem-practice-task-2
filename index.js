// problem 1
const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(2, 3, 4));


// problem 2
const mySelf = `I am a developer.
I love to code.
I like to eat beriyani.`;
console.log(mySelf);

// problem 3
const sum = (num1, num2 = 0) => {
    const result = num1 + num2;
    return result;
}
console.log(sum(5));