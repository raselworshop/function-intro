function vatKhao(){
    console.log('hand wash and come back');
    console.log('set down on the sit');
    console.log('take your meal');
    console.log('pray to Allah for the kindness');
    console.log('start to eat your meal');
}

vatKhao();

// how square a number with function

function square(number){
    // console.log(number);
    console.log("value of the number is: ", number);
}
square(4);

function borgo(mynumb){
    console.log('value of mynumb is: ', mynumb);
    const borgomul = mynumb * mynumb;
    console.log('after square value of the mynumb is: ',borgomul)
}
borgo(4);
console.log('--------------------------------');
borgo(12);
console.log('--------------------------------');
borgo(444);
console.log('--------------------------------');
borgo(121);

// more thaan one perameter how to calculate in function
function add(num1, num2){
    const sum = num1 + num2;
    console.log("The total value fo this number is: ", sum);
}
add(4, 10)
add(100, -50)
add(30, 70)