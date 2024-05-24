// Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

function reverseObject(originalObj){
    let arr=Object.entries(originalObj)
    for(let index of arr){
        index.reverse()
    }
    console.log(Object.fromEntries(arr))
}

const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output