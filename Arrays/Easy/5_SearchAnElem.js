const arr = [1, 2, 3, 4, 5];

const val = 4;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (val === arr[i]) {
    found = true;
    break;
  } else {
    found = false;
  }
}

found ? console.log("Element Found") : console.log("Element Not Found");
