const arr = [1, 2, 3, 4, 5, 6];

function reverseArray(arr, left, right) {
  if (left >= right) return;

  // swap elements
  [arr[left], arr[right]] = [arr[right], arr[left]];

  // increase left and decrease right and call function again
  reverseArray(arr, left + 1, right - 1);
}

reverseArray(arr, 0, arr.length - 1);

console.log(arr);
