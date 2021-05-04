function findMinimum(candies, n, k) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += candies[i];
    n = n - k;
  }

  return res;
}
function findMaximum(candies, n, k) {
  let res = 0,
    index = 0;

  for (let i = n - 1; i >= index; i--) {
    res += candies[i];
    index += k;
  }
  return res;
}
