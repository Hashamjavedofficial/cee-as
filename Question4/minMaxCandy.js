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
function candyStore(candies, n, k) {
  return {
    minimunAmount: findMinimum(candies.sort(), n, k),
    maximumAmount: findMaximum(candies.sort(), n, k),
  };
}

const candies = [3, 2, 1, 4, 5, 8];
const n = candies.length;
const k = 2;
const result = candyStore(candies, n, k);
console.log(
  `The maximum amount ${result.minimunAmount} and maximum amount is ${result.maximumAmount}`
);
