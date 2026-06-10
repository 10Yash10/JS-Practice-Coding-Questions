let a = 10;
let b = 20;

console.log("=============== Before Swapping ===============");
console.log("a: ", a, "b: ", b);

// using temp variable.
// var temp = a;
// a = b;
// b = temp;

// console.log("=============== After Swapping ===============");
// console.log("a: ", a, "b: ", b);

// without temp variable
a = a + b;
b = a - b;
a -= b;

console.log("\n=============== After Swapping ===============");
console.log("a: ", a, "b: ", b);
