function sum(arr) {
  let currentSum = 0;
  if (arr.length == 1) {
    return arr[0] + currentSum;
  } else {
    currentNumber = arr.pop();
    currentSum += currentNumber + sum(arr);
  }
  return currentSum;
}
console.log(sum([2, 5, 6, 8]));
