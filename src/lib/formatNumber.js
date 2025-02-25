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

export const onlyTwoDecimals = (value) => {
  const cleanedNumber = value.replace(/,/g, "").replace(/'/g, "");
  const [integerPart, decimalPart] = cleanedNumber.split(".");
  if (decimalPart && decimalPart.length > 2) {
    return `${integerPart}.${decimalPart.slice(0, 2)}`;
  }
  return value;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
