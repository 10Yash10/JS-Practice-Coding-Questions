const arr = [1, 2, 3, 4, 5, 6];
const k = 3;

// function Rotate(arr, k) {
//   const len = k % arr.length;

//   if (k === arr.length || k <= 0) return arr;

//   if (k < 0) return false;

//   const slicedElem = arr.slice(Math.abs(len));
//   const remainingElem = arr.slice(0, Math.abs(len));

//   const res = [...slicedElem, ...remainingElem];
//   return res;
// }

function Rotate(arr, k) {
  if (k <= 1) return arr;

  const n = arr.length;
  const steps = k % n;

  const reverse = (low, high) => {
    while (low < high) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
      low++;
      high--;
    }
  };

  reverse(0, n - 1);
  reverse(0, steps - 1);
  reverse(steps, n - 1);
  return arr;
}

console.log(Rotate(arr, k));
