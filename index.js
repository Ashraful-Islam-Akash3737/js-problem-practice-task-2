// problem 1
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(2, 3, 4));


// problem 2
const mySelf = `I am a developer.
I love to code.
I like to eat beriyani.`;
// console.log(mySelf);

// problem 3
const sum = (num1, num2 = 0) => {
    const result = num1 + num2;
    return result;
}
// console.log(sum(5));

// problem 4
const friends = ['akash', 'shajib', 'sayem', 'tipu'];
const evenFriends = (friends) => {
    let evenFriends = [];
    for (let element of friends) {
        if (element.length % 2 === 0) {
            evenFriends.push(element);
        }
        else{
            continue;
        }
    }
    return evenFriends;
}
console.log(evenFriends(friends));

// problem 5
const numbers = [12, 34, 23, 45, 11, 32];
const average = (numbers) => {
    // square number
    let squareNumber = [];
    for (const number of numbers) {
        const element = number * number;
        squareNumber.push(element);
    }
    // square number total
    let sum = 0;
    for (const num of squareNumber) {
        sum = sum + num;
    }

    const lengthIs = squareNumber.length;
    const average = parseFloat((sum / lengthIs).toFixed(2));
    return average;

}
console.log(average(numbers));

// problem 6
const num1 = [12, 45, 67, 34, 86];
const num2 = [12, 98, 76, 34, 23];
const num3 = [...num1, ...num2];
const max = Math.max(...num3);
console.log(max);