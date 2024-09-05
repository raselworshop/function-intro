function tentimes(number){
    const result = number * 10;
    return result;
}
tentimes(6);
let returnNumber = tentimes(6);
console.log(returnNumber)

// recap scetion
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff =sum - num2;
    const mult = sum * diff;
    const divide = mult / 2;
    // const modulus = divide % 2;
    return divide;
}
doMath(7, 9);
const result = doMath(7, 9);
console.log(result);