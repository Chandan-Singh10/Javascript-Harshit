// trim() | Spaces ko trim ker dega
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "       harsHIt";

console.log(firstName.length); 
firstName = firstName.trim(); // "harsHIt"

console.log(firstName);
console.log(firstName.length);

// firstName = firstName.toLowerCase();
firstName = firstName.toUpperCase();
console.log(firstName);


// start index
// end index

// let newString = "ChandanSingh";
// newString = newString.slice(0, 7); // Doesn't include (last or end) index
// console.log(newString);

firstName = "ChandanSingh"

let newString = firstName.slice(0, 8); // Doesn't include end index
console.log(newString);
