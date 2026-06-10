const n = 20;
let sum = 0;
for (i = 0; i <= n; i++) {
  if (i % 2 == 0) sum += i;
}

console.log(`Sum of even number till 0-${n}: ${sum}`);
