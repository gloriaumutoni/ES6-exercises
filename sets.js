// Set Up Sets and Maps: You're working with a list of product IDs that might contain duplicates. Use a Set to remove all duplicates and return the unique product IDs.
function duplicates(obj){
    let keys=Object.keys(obj)  
    console.log(new Set(keys))
   }
   duplicates({1:'nike',1:'crop',2:'fg'})