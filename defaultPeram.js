function add(num1, num2 = 0){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}

const total = add(27, 32);
console.log(total);

const result = add(27);
console.log(result);