function spirallyTraverse(R, C, matrix) {
  let b = new Array(100);

  let result = [];

  let i,
    k = 0,
    l = 0;

  let z = 0;

  let size = R * C;

  while (k < R && l < C) {
    let val;

    for (i = l; i < C; ++i) {
      val = matrix[k][i];
      b[z] = val;
      ++z;
    }
    k++;

    for (i = k; i < R; ++i) {
      val = matrix[i][C - 1];
      b[z] = val;
      ++z;
    }
    C--;

    if (k < R) {
      for (i = C - 1; i >= l; --i) {
        val = matrix[R - 1][i];
        b[z] = val;
        ++z;
      }
      R--;
    }

    if (l < C) {
      for (i = R - 1; i >= k; --i) {
        val = matrix[i][l];
        b[z] = val;
        ++z;
      }
      l++;
    }
  }
  for (let i = size - 1; i >= 0; --i) {
    result.unshift(b[i]);
  }
  return result;
}

let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];
const result = spirallyTraverse(3, 6, matrix);
console.log(result);
