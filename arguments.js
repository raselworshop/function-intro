//  arguments defining

function doubleIt(number1){
    const double = number1 * 2;
    console.log('The double number is: ', number1, double);
}
doubleIt(20);
console.log("--------------------------------");
doubleIt(30);
console.log("--------------------------------");
doubleIt(48)
console.log("--------------------------------");
doubleIt(88);

// change the perameter value by variable or using variable 
let number1 = 60;
doubleIt(number1);

let fatherAge = 50;
let myAge = 22;
let diff = fatherAge - myAge;
console.log("The diffrance of age in my father and me is: ",diff)
doubleIt(diff)