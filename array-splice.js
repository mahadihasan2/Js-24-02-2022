const numbers = [2, 3, 4, 56, 76, 98, 43, 32];
const newNumber = numbers.slice(4, 7);
// console.log(newNumber);
// console.log(numbers);

// splice the Number
/* const splicedNumber = numbers.splice(4, 3); */
// console.log(splicedNumber);
// console.log(numbers);

// insert the Number
const newspliced = numbers.splice(4, 3, 54, 78, 89, 999, 890);
console.log(newspliced);
console.log(numbers);
