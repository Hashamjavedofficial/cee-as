function countMin(str) {
  const n = str.length;
  let table = new Array(n);
  for (let i = 0; i < n; i++) {
    table[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      table[i][j] = 0;
    }
  }
  let l = 0,
    h = 0,
    gap = 0;
  for (gap = 1; gap < n; gap++) {
    for (l = 0, h = gap; h < n; l++, h++) {
      table[l][h] =
        str[l] == str[h]
          ? table[l + 1][h - 1]
          : Math.min(table[l][h - 1], table[l + 1][h]) + 1;
    }
  }
  return table[0][n - 1];
}
const result = countMin('test');
console.log(result);
