function countItems(arr) {
  let count = 0;
  if (!arr[0]) {
    return count;
  } else {
    arr.pop();
    count = countItems(arr) + 1;
  }
  return count;
}

console.log(countItems([1, 2, 3, 4, 5, 6, 7, 8]));
