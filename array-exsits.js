function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "please provide an Array";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["Rakib", "Mahadi", "jibon", "Jubaidul", "Masud", "Sujon"];
const myBigBuddy = megaFriend(3527);
// console.log(myBigBuddy);

if (friends.indexOf("Hakim") != -1) {
  console.log("jibon exsists");
} else {
  console.log("Hakim nai");
}

if (friends.includes("jibon")) {
  console.log("is using a includes");
}

// concat
const first = [1, 2, 3, 4, 5];
const second = [2, 6, 7, 8, 9, 10];
const number = first.concat(second);
console.log(number);
