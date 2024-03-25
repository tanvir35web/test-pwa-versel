export default function convertToBanglaNumber(englishNumber) {
  // Define the Bangla digits
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  // Convert each digit in the English number to the corresponding Bangla digit
  const banglaNumber = englishNumber
    .toString()
    .split("")
    .map((digit) => {
      if (digit >= "0" && digit <= "9") {
        return banglaDigits[parseInt(digit)];
      } else {
        return digit;
      }
    })
    .join("");

  return banglaNumber;
}
