// console.log(hello)
// console.log(x);
// var x =10;
// console.log(x);
// function hello(){
//     console.log('hello world')
// }
let count =0;
function outer(){
  return function inner(){
    count++;
    console.log(count)
  }
}

let outerMost = outer();
console.log(outerMost)
// outerMost
// outerMost
// outerMost()