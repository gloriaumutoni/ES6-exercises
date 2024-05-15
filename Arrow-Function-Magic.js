// Arrow Function Magic: We need a function to calculate the area of a rectangle. Write a concise arrow function calculateArea(width, height) that returns the product of width and height. (Bonus: Can you create an arrow function to check if a number is even or odd?)
calculateArea=(width, height)=>width*height
console.log(calculateArea(2, 12))

CheckNumber=(n)=> (n%2===0 ? `${n} is even`:`${n} is odd`)
console.log(CheckNumber(5))
