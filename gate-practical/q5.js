function Data(longFormatData, keys) {
  let result = {};
  keys.forEach((key) => {
    result[key] = longFormatData.map((k) => k[key]);
  });
  console.log(result);
}

const longFormatData = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];
const keys = ["id", "name"];
Data(longFormatData, keys);
// // const wideFormatData = pivotLongToWide(longFormatData, keys);
// // console.log(wideFormatData);
// output: {
//   id: [ 1, 2, 3 ],
