function digitalRoot(n) {
  n = String(n);
  let sum = 0;
  for (let n1 of n) {
    sum += Number(n1);
  }
  return sum > 9 ? digitalRoot(sum) : sum;
}
console.log(digitalRoot(16)); // -->  1 + 6 = 7
console.log(digitalRoot(942)); //-->  9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digitalRoot(132189)); //-->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log(digitalRoot(493193)); // -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
