function findOutlier(integers) {
  if (integers.length > 2) {
    let even = integers.filter((num) => num % 2 === 0);
    let odd = integers.filter((num) => num % 2 !== 0);
    let outlier = even.length === 1 ? even : odd;
    return Number(outlier.join(""));
  }
}
