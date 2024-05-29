// You are given an array of objects representing employees in a company. Each object contains the following properties: name, age, and department. Your task is to write a function to calculate the average age of each department's employees. The function should return an object containing the department name and the summation of employees' age in each department.

function employeess(employees) {
  let result = {};
  count = 0;
  employees.forEach((key) => {
    if (key.department in result) {
      result[key.department] += key.age;
      count++;
    } else {
      result[key.department] = key.age;
    }
    count = 0;
  });

  console.log(result);
}

const employees = [
  { name: "Alice", age: 30, department: "Engineering" },
  { name: "Bob", age: 25, department: "Marketing" },
  { name: "Charlie", age: 35, department: "Engineering" },
  { name: "David", age: 40, department: "HR" },
  { name: "Eve", age: 28, department: "Marketing" },
];
employeess(employees);
// output:
// {
// Engineering: 65,
// Marketing: 53,
// HR: 40
// } // Expected output
