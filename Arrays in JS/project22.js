// Introduction to array
// array eak reference type or object ha ----> javascript ma
// how to create arrays

// ordered collection of items

let fruits = ["apple","mango","banana","kivi"];
// string in arrays

console.log(fruits);
console.log(fruits[2]); 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers in arrays

console.log(numbers);
console.log(numbers[4]);
   
let mixed = ["java", 1,2,3,4,5, null, undefined];
// mixed array

console.log(mixed);
console.log(mixed[6]);

//------------------------------------------------------

let fruits1 = ["apple","mango","pineapple"];
console.log(fruits1);
fruits1[0] = "banana";
console.log(fruits1);

let fruits2 = ["apple", "mango", "pineapple"];
let obj = {}; // object lateral 
console.log(typeof fruits2);
console.log(typeof obj);

// specific
console.log(Array.isArray(fruits2)); /* ye Array hi ha */
console.log(Array.isArray(obj)); /* ye Array nhi ha */
  