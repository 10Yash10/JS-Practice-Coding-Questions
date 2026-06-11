const str = "Yash Sharma";
let temp = "";

const newStr = [...str];
let reversedString = "";

// let i = 0;
// let j = newStr.length - 1;

// while (i < j) {
//   temp = newStr[i];
//   newStr[i] = newStr[j];
//   newStr[j] = temp;
//   i++;
//   j--;
// }

// const reversedString = newStr.join("");

// console.log("Reversed Array of String:", reversedString);

// ========================= Approach 2 ===================

// for (i = newStr.length - 1; i >= 0; i--) {
//   reversedString += newStr[i];
// }

// ====================== Approach 3 =======================
// reversedString = str.split("").reverse().join("");

// ====================== Approach 4 =======================
reversedString = [...str].reverse().join("");

console.log(reversedString);
