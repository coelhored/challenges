function correct(string)
{
arr = string.split('');
  arr.forEach((x, i) => {
    switch (x) {
        case "5": arr[i] = "S";
        break;
        case "0" : arr[i] = "O";
        break;
        case "1" : arr[i] = "I";
        break;
    }
  })
  return arr.join('');
}