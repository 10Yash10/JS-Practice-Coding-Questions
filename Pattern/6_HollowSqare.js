const row = 4;

for (i = 1; i <= row; i++) {
  let rowStr = "";
  for (j = 1; j <= row; j++) {
    if (i == 1 || i == row || j == 1 || j == row) {
      rowStr += " *";
    } else {
      rowStr += "  ";
    }
  }

  console.log(rowStr);
}
