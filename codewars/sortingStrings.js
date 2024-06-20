// Write a function to sort a given string into alphabetical order. Upper case and lower case should be sorted together (upper case first) and other characters should be sorted to the end, numbers first in ascending order, followed by punctuation. Spaces should be ignored.

function sort(str) {
  let arr = str.split("");
  let newarr = [];
  let removingChar = arr.filter(
    (val) => val.charCodeAt() >= 32 && val.charCodeAt() <= 63
  );
  let specialChar = arr
    .filter((val) => val.charCodeAt() >= 91 && val.charCodeAt() <= 96)
    .sort();
  let letters = arr.filter((val) => !removingChar.includes(val));
  let sortingletters = letters.sort((a, b) =>
    a.localeCompare(b, "en", { caseFirst: "upper" })
  );
  let removeSpaces = removingChar.filter(
    (val) => val.charCodeAt() >= 33 && val.charCodeAt() <= 63
  );
  let numbers = removeSpaces
    .filter((val) => val.charCodeAt() >= 48 && val.charCodeAt() <= 57)
    .sort();
  let finalOutput = removeSpaces.filter((val) => !numbers.includes(val)).sort();

  newarr.push(...sortingletters, ...numbers, ...finalOutput, ...specialChar);
  return newarr.join("");
}
console.log(sort("The cat sat on the mat")); //aaaceehhmnosTtttt
console.log(sort("“Happy 21st Birthday!”")); //aaBdHhipprsttyy12!””
