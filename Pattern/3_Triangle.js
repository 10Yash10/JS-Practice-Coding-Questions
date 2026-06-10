const size = 4;

// normal triangle
// for (i = 1; i <= size; i++) {
//   let row = "";

//   //   space
//   for (j = 0; j < size - i; j++) {
//     row += " ";
//   }

//   //   start
//   for (k = 0; k < 2 * i - 1; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// right angle triangle
// for (i = 1; i <= size; i++) {
//   let row = "";
//   for (j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// Right aligned triangle
for (i = 1; i <= size; i++) {
  let row = "";

  //   space
  for (j = 1; j <= size - i; j++) {
    row += "  ";
  }

  //   star
  for (k = 1; k <= i; k++) {
    row += " *";
  }

  console.log(row);
}
