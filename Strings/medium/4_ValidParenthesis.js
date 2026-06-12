const str = "{([)])}";
// const str = "()[]{}";

function validParenthesis(str) {
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (const char of str) {
    if (bracketMap[char]) {
      let pop = stack.pop();

      if (pop != bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return true;
}

console.log(validParenthesis(str));
