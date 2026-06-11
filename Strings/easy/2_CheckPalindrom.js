const str = "ababab";

console.log(checkPalindrom(str));

function checkPalindrom(str) {
  let reversedString = "";
  for (i = str.split("").length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  console.log("Normal String: ", str);
  console.log("Reversed String: ", reversedString);

  return str == reversedString
    ? `"${str}"` + " String is Palindrome"
    : `"${str}"` + " String is Not Palindrome";
}
