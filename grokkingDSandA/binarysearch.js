function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    console.log(low, mid, high, guess);
    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

my_list = [1, 3, 5, 7, 9];

console.log("answer", binary_search(my_list, 3));
console.log("answer2", binary_search(my_list, -1));
