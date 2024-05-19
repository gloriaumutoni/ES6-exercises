// Let's build a custom data structure! Implement an iterator for a simple linked list. The iterator should have a next() method that returns the next node in the list and a done property indicating whether there are more elements.

function combineNumbers(arr){
    //   const [a,b]=arr 
       let arr1=[]
       let arr2=[]
       for(let num of arr){
           if(num%2===0) {arr1.push(num)}
           else{ arr2.push}
       }
      arr1=[...arr1]
       console.log(arr1)
       arr2=arr2.sort()
    //   console.log([...arr1,...arr2])
    }
    combineNumbers([1, 2, 3]) // return ['2', '13']
    combineNumbers([5, 2, 4, 7, 0]) // return ['024', '57']
    combineNumbers([1, 3, 5, 4, 9, 6, 45, 11, 8, 22]) // return ['46822', '13591145']