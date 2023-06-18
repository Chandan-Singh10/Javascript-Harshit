// array,[push | pop]

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

//push 
// last se element insert kerta ha
// fruits.push("banana");
// console.log(fruits);

//pop 
// last se element delete kerta ha
// fruits.pop();
  
// let poppedFruits = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruits);



// array, [shift | unshift]

// unshift 
// first element se insert kerna suru kerta ha
// fruits.unshift("banana");
// fruits.unshift("Litchi");
// fruits.unshift("Pineapple");
// console.log(fruits);


// shift 
// first element se delete kerta ha
let removeFruit = fruits.shift();
console.log(fruits);
console.log("removeFruit is", removeFruit);
  
// conclusion which one is better
// always use push & pop Because it is faster.
