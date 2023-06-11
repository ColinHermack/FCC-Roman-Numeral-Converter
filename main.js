function convertToRoman(num) {
  let returnNum = "";
  let romNumerals = [
    ['M', 'CM', 'D', 'CD', 'C'],
    ['C', 'XC', 'L', 'XL', 'X'],
    ['X', 'IX', 'V', 'IV', 'I']
  ];
  let count = 0;
  for (let i = 100; i >= 1; i /= 10) {
    while (num >= 10 * i) {
      returnNum = returnNum.concat(romNumerals[count][0]);
      num -= (10 * i);
    }
    if (num >= 9 * i) {
      returnNum = returnNum.concat(romNumerals[count][1]);
      num -= (9 * i);
    } else if (num >= 5 * i) {
      returnNum = returnNum.concat(romNumerals[count][2]);
      num -= (5 * i);
    } else if (num >= 4 * i) {
      returnNum = returnNum.concat(romNumerals[count][3]);
      num -= (4 * i);
    }
    while (num >= i) {
     returnNum = returnNum.concat(romNumerals[count][4]);
     num -= i;
    }
    count++;
  }
  return returnNum;
}
