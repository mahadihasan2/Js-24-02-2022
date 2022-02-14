const shortNumber = [1, 3, 4, 9, 2, 5, 6, 7, 8];
const shortingSort = shortNumber.sort();
// console.log(shortingSort);

const stringName = [
  "Mahadi",
  "Hasan",
  "Korim",
  "Abir",
  "Hasnat",
  "Bokul",
  "tareck",
];
const newStringNumber = stringName.sort().reverse();
// console.log(newStringNumber);

// shorting with Fun
const numberOfArray = [32, 31, 45, 76, 89, 6, 4, 2, 70];
const newNumberOfArray = numberOfArray.sort(function (x, y) {
  return x - y;
});
console.log(newNumberOfArray);
