const arr = [1, 2, 3, 4, 5];
let new_arr = new Array(arr.length);
let res = [];

// 1 Maximum Performance for large dataset/
for (let i = 0; i < arr.length; i++) {
  new_arr[i] = arr[i];
}

// 2 Shallow copy (fastest)
// res = [...arr];

// 3 Deep Copy (safest)
// res = structuredClone(arr);

// 4 slice from index 0 to end
res = arr.slice(0);

console.log(res);
