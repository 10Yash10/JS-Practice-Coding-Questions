function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n) {
  let sequence = [];

  for (let i = 0; i < n; i++) {
    sequence.push(fibonacci(i));
  }

  return sequence;
}

console.log(printFibonacci(6));
