const products = [
  "Lg91X yellow color Laptop",
  "sawmi54 red color laptop",
  "sony tv",
  "teriband 56x mobile phone",
  "walton kom dami phone",
  "intel 2283 processor ola laptop",
  "redmi colorful phone",
  "Dell 129xl tablet phone",
  "rex9 phone",
  "Dell 1010 laptop",
  "dell 073 cori4",
];

const searching = "laptop";
const output = [];
for (const product of products) {
  if (
    product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1
  ) {
    // output.push(product);
  }
}

// includes with the js

for (const product of products) {
  if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
    output.push(product);
  }
}

console.log(output);

const searchs = "dell";
for (const product of products) {
  if (product.toLocaleLowerCase().startsWith(searchs.toLocaleLowerCase())) {
    output.push(product);
  }
}

console.log(output);
