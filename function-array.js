// Objective: write a function to give me the sum of all  numbers in an array 
// step-1:create a function
// step-2:call check wheather the function is called properly
// step-3:set a perameter(s)
// step-4:pass the perameter, wheather perameter is passed in a proper way
// step-5:do the function tasks (step by step)


function sumOfArray(numbers){
    let sum=0;
    for(const number of numbers){
     console.log (number);
     sum = sum + number;
    }
    return sum;
}
const nums = [12, 38, 54, 89, 90]
const sum = sumOfArray(nums);
console.log('The sum of array is: ', sum)
