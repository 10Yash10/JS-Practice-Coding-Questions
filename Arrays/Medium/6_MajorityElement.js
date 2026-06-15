// majority element should be strictly more than n/2 times. ex: if length is 6 then majority element should be more than 6/2 = 3.

const nums = [2, 2, 1, 1, 2, 1, 2];
let count = 0;
let candidate = null;

for (const num of nums) {
  if (count == 0) {
    candidate = num;
  }

  if (num == candidate) {
    count++;
  } else {
    count--;
  }
}

console.log(candidate);
