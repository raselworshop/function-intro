// for a given string tell me wheather it has even number of characters or not
function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2=== 0){
        console.log("this is a even number");
        return true;
    }else{
        console.log('This is a odd number');
        return false;
    }
}
evenSizeString('Bangladesh');
evenSizeString('Banglades');
console.log("----------------------------")

function doubleOrTriple(number, double){
    if(double=== true){
    const result = number * 2;
    return result
   }else{
    const result = number * 3;
    return result;
   }
}

console.log(doubleOrTriple(5, true))
console.log(doubleOrTriple(5, false))