// Implement a function called `combineNumbers` that receives an array of even and odd numbers mixed, and returns a new array which only contain two elements.

// The first element should be all even numbers from the original array, sorted and concatenated into a string. 

// The second element should be all odd numbers from the original array, sorted and concatenated into a string.


function combineNumbers(arr){

  let arr1=''
  let arr2=''
  for(let num of arr){
      if(num%2===0) {arr1+=num}
      else{ arr2+=num}
  }
  arr1=arr1.split('').sort().join('')
  arr2=arr2.split('').sort().join('')

  console.log([arr1,arr2])

}
combineNumbers([1, 2, 3]) // return ['2', '13']
combineNumbers([5, 2, 4, 7, 0]) // return ['024', '57']
combineNumbers([1, 3, 5, 4, 9, 6, 45, 11, 8, 22]) // return ['46822', '13591145']