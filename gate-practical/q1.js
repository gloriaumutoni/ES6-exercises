// Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.

function extractWordsAndNumbers(input) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = [];
  let str = "";
  let num = "";

  for (let value of input) {
    for (let val of value) {
      if (alphabet.includes(val.toLowerCase())) {
        str += val;
      } else {
        num += val;
      }
    }
    arr.push(str, Number(num));
    str = "";
    num = "";
  }
  console.log(arr.filter(Boolean));
}

const input = ["Hello123", "World456", "49", "another789"];
const output = extractWordsAndNumbers(input);
