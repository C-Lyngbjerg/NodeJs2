// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};
const value = myObj.message; 
console.log(value);
//   myObj.message = dot notation compared to square bracket notation myObj["message"] - dot notation preferred for nested values

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

const myNameAge = {"name": "Christoffer", "age": "27"};
console.log("My name is "+myNameAge.name+" and i am"+myNameAge.age+" years old");

// Create an object that has your name and age. 


// --------------------------------------
// Exercise 3 - Add a property 
// const stackOverflow = {isAllowed: "true"};
const stackOverflow = {};
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed);
// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."};
delete thisSong.description;
thisSong.about = "Just a tribute";

console.log(thisSong.about);
console.log(thisSong.description)
// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


// spread operater ...