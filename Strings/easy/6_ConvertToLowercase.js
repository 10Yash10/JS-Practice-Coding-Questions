const words = "YASH SHARMA";
let result = "";

for (i in words) {
  let code = words.charCodeAt(i);

  if (code >= 65 && code <= 90) {
    result += String.fromCharCode(code + 32);
  } else {
    result += words[i];
  }
}

console.log("Lower Case:", result);
