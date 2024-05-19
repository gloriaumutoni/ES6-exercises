// Data validation is crucial. Write a function createValidationProxy(obj) that takes an object and returns a proxy that validates any attempt to set a property value. If the value is invalid (e.g., not a number for a numeric property), throw an error.
function createValidationProxy(obj){
    
    let handler={
      set(target, property, value) {
            if (value === '') {
                console.log(`Invalid value for property: ${property}`);
                return false; // Indicate that the assignment failed
            }
            console.log(`Setting property ${property} to ${value}`);
            target[property] = value;
            return true; // Indicate that the assignment was successful
        }
    }
    return new Proxy(target,handler)
}
// let proxy=
let target={
        user:'john',
        age:27
    }
    let proxy=createValidationProxy(target)
    proxy.user='jane'
    proxy.age=''
console.log(proxy)
