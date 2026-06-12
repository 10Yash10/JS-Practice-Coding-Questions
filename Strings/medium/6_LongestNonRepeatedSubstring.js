// const s = "pwwkew";
// const s = "bbbbb";
// const s = "dvdf";
// const s = "";
// const s = " ";
// const s = "au";
const s = "abba";

function longestSubstrNoRepeat(str) {
  let set = new Map();
  let i = 0,
    j = 0;
  let res = "";

  while (j !== str.length) {
    set.set(str[j]);
    j++;
    // console.log("added element", str[j], "in", set);

    // console.log(set.has(str[j]));
    if (set.has(str[j])) {
      set.delete(str[i]);
      //   console.log("deleted element", str[i], "from", set);
      i++;
    }
  }
  for (let [key, value] of set) {
    res += key;
  }
  return [res, res.length];
}

console.log(longestSubstrNoRepeat(s));
