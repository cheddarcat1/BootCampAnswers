Pizza Class
Create a constructor function Pizza that takes in a name and size. Each pizza created by the constructor should have a name and size property.
After creating the Pizza constructor, use it to create a pizza called myPizza.



// Constructor function for Pizza
function Pizza(name, size) {
  this.name = name;
  this.size = size;
}

// Creating a pizza using the constructor
var myPizza = new Pizza("Margherita", "Medium");

// Accessing the properties of myPizza
console.log(myPizza.name); // Output: Margherita
console.log(myPizza.size); // Output: Medium
