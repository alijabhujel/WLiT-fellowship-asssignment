// function compute(action,x,y){
//     if (action == "add"){
//         return x+y
//     }else if(action == "divide"){
//         return x/y
//     }
// }
// console.log(compute("add",5,8));
// console.log(compute("divide",10,5));

function add(x,y){
    return x+y
}

function divide(x,y){
    return x/y
}

function multipliaction(x,y){
    return x*y
}

function subtract(x,y){
    return x-y
}

function compute(callBack,x,y){
    return callBack(x,y)
}
console.log(compute("add",5,8));
console.log(compute("divide",10,5));
console.log(compute("subtarct",5,4));


