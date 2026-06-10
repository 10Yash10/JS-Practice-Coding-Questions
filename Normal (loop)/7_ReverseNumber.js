let number = -123456789;
let temp = number;
let rev = 0;

while (number !== 0) {
  const rem = number % 10;
  rev = rev * 10 + rem;
  //   number = Math.floor(number / 10);  // remvoes/truncates the decimal (error with negative value)
  number = (number / 10) | 0; // removes/truncates the deciaml very fast. (can work with negative values as well.)
}

console.log(`Reverse of ${temp} is ${rev}`);
