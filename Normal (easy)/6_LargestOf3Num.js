const a = 100;
const b = 200;
const c = 30;

let largest;

// basic

// if (a > b && a > c) {
//   largest = a;
// } else if (b > c && b > a) {
//   largest = b;
// } else {
//   largest = c;
// }

// high performance, low level optimizations
if (a >= b) {
  if (a >= c) largest = a;
  else largest = c;
} else {
  if (b >= c) largest = b;
  else largest = c;
}

console.log(largest, "is the greatest number of all the three number.");
