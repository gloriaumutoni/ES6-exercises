// Destructuring Challenge: You're building a user profile system. Create a function extractProfile(user) that takes an object user with properties name, age, city, and occupation (optional). Using destructuring, return a new object containing only the name and city properties.
let user={
     name:'kelly',
        age:10,
        city:'Kigali',
        occupation:'fhdj'
}
function extractProfile({name,age,city,occupation}={}){
  let newUser={
      name,
      city
  }
  console.log(newUser)
}
extractProfile(user)