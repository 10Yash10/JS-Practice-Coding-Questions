const number = 200;
let temp = number;
let count = 0;

// console.log(number.toString().length);
// console.log(number / 10);

while (temp > 0) {
  count++;
  temp = Math.floor(temp / 10);
}

console.log(count);
