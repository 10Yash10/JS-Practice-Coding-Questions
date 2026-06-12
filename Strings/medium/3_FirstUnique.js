const str = "LoveLeetCode";

// function firstUnique(str) {
//   let wordCount = {};
//   for (let i of str.toLowerCase()) {
//     wordCount[i] = (wordCount[i] || 0) + 1;
//   }

//   //   iterate each object
//   for (const [key, value] of Object.entries(wordCount)) {
//     console.log(value);
//     if (value == 1) {
//       return key;
//     }
//   }

//   return -1;
// }

function firstUnique(str) {
  let countMap = new Map();

  for (const char of str.toLowerCase()) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  for (const i in str) {
    if (countMap.get(str[i]) === 1) return str[i];
  }

  return -1;
}

console.log(firstUnique(str));
