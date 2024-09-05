// create a function that will return only even numbers/
// Return the sum of numbers

function evenNumberOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens
}
const numbers = [38, 53, 68, 72, 87, 97];
const evens = evenNumberOnly(numbers);
console.log('The even numbers are: ',evens)
console.log('-----------------------------------');

// sum for even numbers 
function sumForEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2=== 0){
            console.log(number)
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumForEvenNumbers(numbers);
console.log('The even numbers sum is: ', sum)






