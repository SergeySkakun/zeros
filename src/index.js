module.exports = function getZerosCount(number) {
  let num = number;
  let result = 0;

  do {
    num = Math.floor(num / 5);
    result = result + num;
  }
  while (num > 4);

  return result;
}
