const number = -60;

// if (number > 0) {
//   console.log("Number is Positive");
// } else if (number < 0) {
//   console.log("Number is Negative");
// } else {
//   console.log("Number is Zero");
// }

// highly optimized way;

let result = (number > 0) - (number < 0);
// return 1 for positive, -1 for negative and 0 for zero
