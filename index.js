
const isPrime = require("./isPrime");

const nums = [2,5,8,10,15,17,19,"ashok"];

nums.forEach(num =>{
    if(isPrime(num)){
        console.log(`${num} is a prime number`);
    }else{
        console.log(`${num} is not a prime number`);
    }
})