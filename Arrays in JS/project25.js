// how to clone array

// how to concatenate two arrays

// let array1 = ["item1", "item2"]; // showing true hence, both the array are same.
// let array2 = array1;
// console.log(array1===array2);

let array1 = ["item1", "item2"]; // showing false hence, both the array are not same.
// let array2 = ["item1", "item2"];
//clone
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// new way to clone array
// spread operator

let oneMoreArray = ["item4","item5"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);
