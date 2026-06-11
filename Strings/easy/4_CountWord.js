const str =
  "Yash Sharma is a good programmer. The most highly optimized way to calculate the number of words in a JavaScript string is by using a single-pass pointer loop. While standard approaches like str.split(/\s+/) or str.match(/\S+/g) are readable, they are highly inefficient for large text because they allocate a brand new array of strings in memory. A manual character-by-character scan operates in O(n) time complexity and O(1) space complexity.The Optimized SolutionThis approach loops through the string exactly once without allocating arrays, maintaining an internal boolean flag to track word states";
let count = 0;
let inWord = false;

// ==================== Approach 1 =====================
// console.log(str.split(" ").length);

// ==================== Approach 2 ====================

for (i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) > 32) {
    if (!inWord) {
      count++;
      inWord = true;
    }
  } else {
    inWord = false;
  }
}

console.log(count);
