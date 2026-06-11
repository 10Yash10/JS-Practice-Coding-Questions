const row = 3;

for (i = 1; i <= 2 * row - 1; i++) {
  let rowStr = "";

  // space (normally subtract spaces from rows and take only positive values)
  for (j = 0; j < Math.abs(row - i); j++) {
    rowStr += " ";
  }

  // star (remove twice of total spaces from overall spaces)
  for (k = 1; k <= 2 * row - 1 - 2 * Math.abs(row - i); k++) {
    rowStr += "*";
  }

  console.log(rowStr);
}
