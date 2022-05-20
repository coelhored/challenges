function SeriesSum(n)
{
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += 1/(1 + (3*i));
  }
  return result.toFixed(2).toString();
}