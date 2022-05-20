function getMiddle(s)
{
const middle = Math.ceil(s.length/2 -1)
return s.substring(middle, middle + (s.length % 2 == 0 ? 2 : 1))
}