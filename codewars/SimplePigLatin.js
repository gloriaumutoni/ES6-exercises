// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let newarr = [],
    sliced = "";
  str.split(" ").filter((value) => {
    (value.charCodeAt() >= 64 && value.charCodeAt() <= 90) ||
    (value.charCodeAt() >= 97 && value.charCodeAt() <= 122)
      ? ((sliced = value.slice(1)), (sliced += value[0] + "ay"))
      : (sliced = value);
    newarr.push(sliced);
  });
  return newarr.join(" ");
}
pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !
