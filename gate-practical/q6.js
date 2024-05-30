// Create a function that performs a JOIN operation on two arrays of objects, based on a common property, and returns a new array of merged objects.

function sqlJoin(employees, salaries) {
  employees.map((prop) => {
    salaries.map((k) => {
      if (k.id === prop.id) {
        prop.salary = k.salary; //prop.salary is assiging the key called salary with its value to prop
      }
    });
    //   if(!(prop.hasOwnProperty('salary'))){
    //       let index=employees.indexOf(prop)
    //       employees.splice(index,index)
    //   }
    //another alternative for removing the object that doesn't have the salary key
  });
  return employees.filter((obj) => obj.hasOwnProperty("salary"));
}

const employees = [
  { id: 1, name: "John", department: "IT" },
  { id: 2, name: "Jane", department: "HR" },
  { id: 3, name: "Doe", department: "IT" },
];

const salaries = [
  { id: 1, salary: 50000 },
  { id: 2, salary: 60000 },
  { id: 4, salary: 55000 },
];

//const result = sqlJoin(employees, salaries);
//console.log(result);

// output: [
//        {id: 1, name: 'John', department: 'IT', salary: 50000},
//        {id: 2, name: 'Jane', department: 'HR', salary: 60000}
// ]
