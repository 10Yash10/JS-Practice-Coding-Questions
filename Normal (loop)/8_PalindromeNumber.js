const number = 12221;

console.log(isPalindrom(number));

function isPalindrom(number) {
  if (number < 0 || (number % 10 == 0 && number !== 0)) return;

  let halfReversed = 0;

  while (number > halfReversed) {
    halfReversed = halfReversed * 10 + (number % 10);
    number = (number / 10) | 0;
  }

  return number == halfReversed || number == ((halfReversed / 10) | 0);
}
