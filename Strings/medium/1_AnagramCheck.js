function checkAnagram(wordA, wordB) {
  if (wordA.length !== wordB.length) return false;
  let charCode = {};

  for (let i of wordA.toLowerCase()) {
    charCode[i] = (charCode[i] || 0) + 1;
  }

  for (let j of wordB.toLowerCase()) {
    if (!charCode[j]) {
      return false;
    }
    charCode[j]--;
  }

  return true;
}

console.log(checkAnagram("tttp", "ttop"));
