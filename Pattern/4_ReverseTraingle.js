const row = 3;
// revert right angled triangle

// for (i = 5; i > 0; i--) {
//   let rowStr = "";

//   for (j = i; j > 0; j--) {
//     rowStr += "*";
//   }

//   console.log(rowStr);
// }

// normal revert triangle
// for (i = row; i > 0; i--) {
//   let rowStr = "";

//   // space
//   for (j = 0; j < row - i; j++) {
//     rowStr += " ";
//   }

//   // start
//   for (k = 1; k <= 2 * i - 1; k++) {
//     rowStr += "*";
//   }

//   console.log(rowStr);
// }

// REVERSED right aligned triange
for (i = row; i > 0; i--) {
  let rowStr = "";

  for (j = 0; j < row - i; j++) {
    rowStr += " ";
  }

  for (k = 1; k <= i; k++) {
    rowStr += "*";
  }

  console.log(rowStr);
}
