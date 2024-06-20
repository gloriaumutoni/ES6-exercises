// Create a function called `findOddsNumbers` that takes an array containing both strings and numbers. The function should go through all element in the array and numbers elements will be left unchanged, for strings the function should examine the size of each string in the array, convert that size to a number

// after converting all strings, the function should return a new array containing only the odd numbers obtained from the conversion.


 function findOddsNumbers(arr){
    let newarr=[]
    for(let value of arr){
      if(isNaN(value)){
          value=value.length
      } 
      if(value%2!==0){
          newarr.push(value)
      }
      else{
          continue
      }
    }
    console.log(newarr)
}
findOddsNumbers([1, 3, 'doe', 2, 10, 11, 'john']) // return [1, 3, 3, 11].
findOddsNumbers([1, 2, 3, 4, 'cat', 'horse', 7, 'elephant']) // [1, 3, 3, 5, 7]
