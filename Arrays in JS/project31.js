// array destructuring

const myArray = ["Value1", "Value2", "value3", "value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
   
// shortcut in javascript
let [myvar1, myvar2, ...myNewAraay] = myArray;
console.log("value of myvar1 ->", myvar1);
console.log("value of myvar2 ->", myvar2);
console.log(myNewAraay);
  