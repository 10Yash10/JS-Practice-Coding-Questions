const words = "Yash Sharma";
let result = "";
let code = 0;

for (i in words) {
  code = words.charCodeAt(i);
  if (code >= 95 && code <= 122) {
    result += String.fromCharCode(code - 32);
  } else {
    result += words[i];
  }
}

console.log("Upper case:", result);
