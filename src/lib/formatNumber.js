/**
 * Formatea un número en formato de miles.
 * @param num
 * @returns
 */
export const formatNumber = (num) => {
  const cleanedNumber = String(num).replace(/[^0-9.]/g, "");
  const [integerPart, decimalPart] = cleanedNumber.split(".");
  const reversedDigits = integerPart.split("").reverse();
  let formattedNumber = "";
  for (let i = 0; i < reversedDigits.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedNumber += (i / 3) % 2 === 0 ? "'" : ",";
    }
    formattedNumber += reversedDigits[i];
  }
  formattedNumber = formattedNumber.split("").reverse().join("");
  if (decimalPart !== undefined) {
    formattedNumber += "." + decimalPart;
  }
  return formattedNumber;
};
