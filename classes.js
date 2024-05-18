// Classy Products: Create a class Product with properties name (string), price (number), and methods:


// getDetails(): Returns a string representation of the product details (name and price).
// applyDiscount(discount): Applies a discount (percentage) to the product's price and returns the discounted price.

class products{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    getDetails(){
      return `the price of the ${this.name} is ${this.price}` 
    }
    applyDiscount(discount){
        this.discount=this.price - (this.price*(discount/100))
        return `${this.discount}`
    }
}
let product=new products('shoes',2000)
console.log(product.getDetails())