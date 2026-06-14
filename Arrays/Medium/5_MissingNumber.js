const arr = [0, 3, 1];

function MissingNumber(arr) {
  let n = arr.length;

  let expected_sum = (n * (n + 1)) / 2;
  //   console.log(expected_sum);

  let actual_sum = arr.reduce((val, acc) => val + acc);
  //   console.log(actual_sum);

  return expected_sum - actual_sum;
}

console.log(MissingNumber(arr));
