// Create a function called extractNumbers that takes an array of strings that may contain numbers,   and returns a new array of numbers extracted from the strings. If no numbers are included in a string the string will be converted into a 0.

function extractNumbers(arr){
    let result=[]
    let newarr=[]
    for(let str of arr){
        let numbers=str.match(/\d+/g) || []
        if(numbers.length === 0){
            result.push(0)
        }
        else{
           result.push(...numbers) 
        }
    }
    for(let num of result){
      num=Number(num) 
      newarr.push(num)
    }
    console.log(newarr)
   }
   
   extractNumbers(['2factor', '6nine']) // return [ 2, 6]
   extractNumbers(['a26b', 'ca67c', 'n4f1r','dhaj']) // return [ 26, 67, 41, 0]
   extractNumbers(['8atem2', 'cat', 'ran', '1']) // return [ 2, 0, 0, 1]