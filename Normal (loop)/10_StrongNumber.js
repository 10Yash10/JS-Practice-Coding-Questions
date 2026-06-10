// 145
// 1! = 1 * 1 = 1
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// 120 + 24 + 1 = 145
// Hence, this is my Strong Number (Krisnamurthy or Peterson Number)

function factorial(num) {
  let fact = 1;

  for (i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

function StrongNumber(num) {
  let sum = 0,
    temp = num;

  while (temp !== 0) {
    console.log(sum);
    sum = sum + factorial(temp % 10);
    temp = (temp / 10) | 0;
  }

  return sum === num;
}
