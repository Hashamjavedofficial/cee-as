function findMinimum(candies, n, k) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += candies[i];
    n = n - k;
  }

  return res;
}
