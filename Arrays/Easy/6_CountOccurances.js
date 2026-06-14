const arr = ["a", "b", "a", "b", "a", "b", "c", "c", "d", "a", "c", "d"];
let res = new Map();

for (let i = 0; i < arr.length; i++) {
  res.set(arr[i], (res.get(arr[i]) || 0) + 1);
}

console.log(res);
