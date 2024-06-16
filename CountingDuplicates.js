// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let obj = {},
    count = 0;
  text.split("").map((value) => {
    value = value.toLowerCase();
    value in obj ? obj[value]++ : (obj[value] = count);
  });
  obj = Object.values(obj);
  return obj.filter((value) => value != 0).length;
}
duplicateCount("abcde"); // -> 0 # no characters repeats more than once
duplicateCount("aabbcde"); // -> 2 # 'a' and 'b'
duplicateCount("aabBcde"); //-> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
duplicateCount("indivisibility"); //-> 1 # 'i' occurs six times
duplicateCount("Indivisibilities"); //-> 2 # 'i' occurs seven times and 's' occurs twice
duplicateCount("aA11"); //-> 2 # 'a' and '1'
