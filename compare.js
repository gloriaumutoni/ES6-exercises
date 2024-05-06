// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

function compare(obj1,obj2){
    let object1=obj1
    let object2=obj2
    // return Object.keys(object1)
 return Object.keys(object1).every(key=> object2.hasOwnProperty(key) && object1[key]== object2[key])    
}
console.log(compare({name:'james',age:21,gender:'male'},{name:'james',age:21,gender:'male'}))//true
console.log(compare({name:'james',age:21,gender:'male'},{name:'jamy',age:21,gender:'female'}))//false