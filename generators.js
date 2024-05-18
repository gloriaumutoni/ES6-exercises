// Generator Fibonacci: Numbers are fun! Write a generator function fibonacciGenerator(limit) that yields Fibonacci numbers up to a specified limit. Remember, the first two Fibonacci numbers are 0 and 1, and each subsequent number is the sum of the previous two.a

function* fibonacci(n) {
    let [a,b]=[0,1]
    for(let i=0;i<n;i++){
       yield a;
       [a,b]=[b,a+b]
    }
  }
  
  let fib=fibonacci(5)
  console.log(fib.next().value)
  console.log(fib.next().value)
  console.log(fib.next().value)
  console.log(fib.next().value)
  