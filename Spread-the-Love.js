// You're working with multiple shopping carts (represented by arrays). Write a function combineCarts(cart1, cart2) that uses the spread operator to create a new array containing all items from both cart1 and cart2. (Bonus: Can you create a copy of an object without modifying the original using spread syntax?)

const combineCarts=(cart1, cart2)=> [...cart1,...cart2]

console.log(combineCarts([1,2,3],[4,5]))
let obj={
    name:'jane',
    age:23
}
let copyObj={...obj}
copyObj.age=21
console.log(copyObj)
console.log(obj)