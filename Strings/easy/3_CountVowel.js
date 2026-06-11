const vowel = ["a", "e", "i", "o", "u"];
const str = "Yash Sharma";

let count = 0;

// for (i of str) {
//   if (vowel.includes(i)) count++;
// }

// highly optimized way O(1)
const vowelStr = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

for (const char of str) {
  if (vowelStr.has(char)) count++;
}

console.log(`${str} contains ${count} vowels`);
