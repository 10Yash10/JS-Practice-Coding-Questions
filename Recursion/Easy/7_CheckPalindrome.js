const str = "racecar";

function checkPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return checkPalindrome(str.slice(1, -1));
}

console.log(checkPalindrome(str));
console.log(checkPalindrome("brave"));
