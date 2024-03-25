export default function getZeroBeforeSingleDigit(number) {
  let numberWithZero;
  if (number >= 0 && number < 10) {
    numberWithZero = "0" + number;
  } else {
    numberWithZero = number;
  }

  return numberWithZero;
}
