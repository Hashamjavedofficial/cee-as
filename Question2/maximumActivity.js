function activityselection(start, end, n) {
  let i, j;
  let result = [];

  i = 0;
  for (j = 1; j < n; j++) {
    if (start[j] >= end[i]) {
      result.unshift(j);
      i = j;
    }
  }
  return result;
}

let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];
const result = activityselection(start, end, 4);
console.log(result);
