const getNthElement = (index, array) => {
  if (index >= array.length) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(n => n.toUpperCase());
};

const reverseWordsInArray = strings => {
  // eslint-disable-next-line prettier/prettier
  return strings.map(n => n.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(n => n !== array[index]);
};

const elementsStartingWithAVowel = strings => {
  // eslint-disable-next-line prettier/prettier
  return strings.filter(n => (n[0].toLowerCase() === "a" || n[0].toLowerCase() === "e" || 
  n[0].toLowerCase() === "i" || n[0].toLowerCase() === "o" || n[0].toLowerCase() === "u"));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
