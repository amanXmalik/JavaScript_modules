let a = 1
console.log(typeof a);
let b = "abcdef"
console.log(typeof b);

const balance = new Number (100)
console.log(balance.toString().length);

const otherNum = 123.8966
console.log(otherNum.toPrecision(3));


const arr1 = ["a" , "b" , "c" , "d" , "e" , "f"];
const arr2 = ["g"]
const arr3 = [...arr1 , ...arr2]
console.log(arr3)

function addtwonumbers (num1 , num2){
    return num1+num2
}
const ab = addtwonumbers(3,4)

console.log(ab);

function calculateprice(...num1){
    
    return num1
}


console.log(calculateprice(100,200,34,343,495,934,101001));
// arrow function

const addtwo= (num1 , num2 ) =>{
    return num1+num2
}
console.log(addtwo(3,4));


//IIFE

(function A(){
    console.log(`DB CONNECTED`);
})();


