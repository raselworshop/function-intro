function isEven(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

console.log(isEven(15));
console.log(isEven(110));
console.log("-----------------------------------")
//  odd number colection without else
function isOdd(number){
    if(number % 2 === 1){
        return true
    }return false
}
isOdd(25);
const result = isOdd(20);
console.log(isOdd(result));
console.log("----------------------------------------")
console.log(isOdd(15));