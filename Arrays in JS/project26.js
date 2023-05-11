// for loop in array

let fruits = ["apple", "mango", "banana", "pineapple"];

// for(let i=0; i<=9; i++){
//     console.log(i);
// }

console.log(fruits.length); // length property
console.log(fruits[fruits.length - 1]);

let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);