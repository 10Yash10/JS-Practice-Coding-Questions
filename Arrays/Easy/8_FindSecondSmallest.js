const arr = [3, 3, 4, 5, 1, 2, 1];

let first = Infinity,
  second = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < first) {
    second = first;
    first = arr[i];
  } else if (arr[i] < second && arr[i] !== first) {
    second = arr[i];
  }
}

console.log(first, second);
