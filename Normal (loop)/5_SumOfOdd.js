const n = 20;
let sum = 0;

for (i = 0; i <= n; i++) {
  if (i % 2 == 1) sum += i;
}

console.log("Sum of odd number from 0 to ", n, "is: ", sum);
