//FUNCTION DECLARATION 
console.log(sum(2 ,9));//console ooper krwa skte hn:HOISTING kehte hn

function sum(num1:number, num2:number):number{
    return num1 + num2;
}
//console.log(sum(2 ,9));

//FUNCTION EXPRESSION
//console ooper karwane se error de ga:cannot HOISTING
let  substraction  = function(num1:number, num2:number){
  return num1 - num2;
}
//console.log(substraction(8,3));

//ARROW FUNCTION
let multiply = (num1:number, num2:number)=> num1 * num2;
console.log(multiply(6,7));

//step09e_async
//callback function
function myCallBack(name: string) {
console.log("Hello , " + name);
}
myCallBack( "Ali");
myCallBack("saba");

//ASYNC FUNCTION: step09e_async
//Async function always returns a promise rather than return a value
//promise produce

 async function myFunc() {
 return new Promise((resolve) => {
  let roll_No = [1, 2, 3, 4, 5];
 setTimeout(() => {
 resolve(roll_No);
 }, 1000);
 });
 }

// //Using `then`, `catch`, and `finally`:
 myFunc()
 .then((roll_No) => {
 console.log(roll_No);
 })
.catch((error) => {
 console.error('Something went wrong:', error);
})
.finally(() => {
 console.log('This is always executed');
 });

