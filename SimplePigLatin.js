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
