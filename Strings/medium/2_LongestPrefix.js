const words = ["flower", "flow", "flowing", "flosh"];

function longestCommonPrefix(str) {
  let res = "";
  let counter = 0;

  for (let i = 0; i < str[0].length; i++) {
    if (counter == str.length - 1) {
      res += str[0][i - 1];
      counter = 0;
    }

    for (j = 1; j < str.length; j++) {
      if (str[0][i] == str[j][i]) {
        // res += str[0][i];
        counter++;
      } else {
        break;
      }
    }
  }

  return res;
}

console.log(longestCommonPrefix(words));
