const anthem = "Amar sonar Bangla ami tumai valobasi na";
const splts = anthem.split(" ");
console.log(splts);

// slice
const smallSlice = anthem.slice(5, 15);
console.log(smallSlice);

//subStr  using
const subStr = anthem.substr(5, 12);
console.log(subStr);

// subString using
const substrings = anthem.substring(11, 15);
console.log(substrings);

// using conCat
const firstWord = "Dhaka";
const secondWord = "City";
const fullName = firstWord.concat(secondWord).concat("Amar").concat("shohor");
console.log(fullName);

// Using Join
const wordArray = ["Abir", "Mamun", "Tanvir", "Kakoli"];
// const joined = wordArray.join("");
// const joined = wordArray.join(" ");
// const joined = wordArray.join(" " + "jibon");
const joined = wordArray.join(" xxx");
console.log(joined);
