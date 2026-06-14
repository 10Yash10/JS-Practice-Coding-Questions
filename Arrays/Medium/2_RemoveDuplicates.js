const arr = [1, 2, 3, 4, 5, 2, 3, 5, 2, 1, 3, 1];

// const set = Array.from(new Set(arr));

// console.log(set);

let seen = new Set();
let res = [];

for (let i = 0; i < arr.length; i++) {
  if (!seen.has(arr[i])) {
    seen.add(arr[i]);
    res.push(arr[i]);
  }
}

console.log(res);
