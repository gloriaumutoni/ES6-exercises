// You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak, and when he wants to say something, he writes it down on a paper. However, none of the words he writes make sense to you. He wants to help you, so he points at a beer and writes "yvvi". You start to understand what he's trying to say, and you write a script, that decodes his words.

// Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are. You should also test if the input is a string. If it is not, return "Input is not a string".

function decode(str) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let reversedlower = lower.split("").reverse().join("");
  let upper = lower.toUpperCase();
  let reversedupper = upper.split("").reverse().join("");
  let arr = [];
  if (typeof str !== typeof lower) return "Input is not a string";
  str.split("").map((value) => {
    if (lower.includes(value)) {
      let position = lower.indexOf(value);
      if (value === lower[position]) {
        arr.push(reversedlower[position]);
      }
    } else if (upper.includes(value)) {
      let position = upper.indexOf(value);
      if (value === upper[position]) {
        arr.push(reversedupper[position]);
      }
    } else {
      arr.push(value);
    }
  });
  return arr.join("");
}

console.log(decode("yvvi")); //, "beer")
console.log(decode("Blf zoivzwb szw 10 yvvih")); //, "You already had 10 beers")
console.log(decode("Ovg'h hdrn rm gsv ulfmgzrm!")); //, "Let's swim in the fountain!")
console.log(decode("Tl slnv, blf'iv wifmp")); //, "Go home, you're drunk")
