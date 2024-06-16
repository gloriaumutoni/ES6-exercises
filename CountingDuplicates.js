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
