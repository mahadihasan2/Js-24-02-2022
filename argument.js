function addnumber(num1, num2) {
  /* const result = num1 + num2;
  return result; */
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }
  return result;
}
const sum = addnumber(45, 67, 56, 67);
console.log(sum);

// Argument

function getName(firstName, LastName) {
  let fullName = "";
  for (const name of arguments) {
    fullName = fullName + name + " ";
  }
  return fullName;
}

const nameOf = getName("Rakib", "shakib", "Mahadi", "Hasan");
console.log(nameOf);
