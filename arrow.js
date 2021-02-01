// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const result = doubleIt(10);
console.log(result);

const add = (num1, num2) => num1 + num2;
const result2 = add(5, 10);
console.log(result2);

const message = () => "Welcome to ES6";
const speech = message();
console.log(speech);

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}
const result3 = doMath(10, 5);
console.log(result3);