const arr = [1, 5, 6, 3, 4, 2];

function maxWater(arr) {
  let i = 0,
    j = arr.length - 1;

  let height = 0;
  let width = 0;
  let max_area = 0;

  while (i < j) {
    height = Math.min(arr[i], arr[j]);
    width = j - i;
    max_area = Math.max(max_area, width * height);

    // console.log(
    //   "i: ",
    //   i,
    //   "j: ",
    //   j,
    //   "height: ",
    //   height,
    //   "width: ",
    //   width,
    //   "max_area: ",
    //   max_area,
    // );

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max_area;
}

console.log(maxWater(arr));
