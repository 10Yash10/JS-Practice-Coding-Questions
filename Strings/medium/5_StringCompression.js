const chars = ["a", "a", "b", "b", "c", "c", "c", "a", "a", "a"];
// return res = ["a": "2", "b": "2", "c": "3", "a": "3"]

let i = 0;
let res = [];

for (let j = 0; j <= chars.length; j++) {
  if (chars[i] !== chars[j] || j === chars.length) {
    console.log(i, j, chars[i]);
    let count = j - i;

    res.push(chars[i]);

    if (count > 1) {
      res.push(count.toString());
    }

    i = j;
  }
}

console.log(res);
