// hoisting 
console.log(myFirstFunction())
// function declaration which are hoisted
function myFirstFunction (){
    let greeting = "Hello class"
    return greeting
}





// arrow function - function without a name but with a lambda. something with this keyword which we wont work with
const myArrowFunction = () => {
    console.log("test");
}

// variable function are not hoisted
const myVariableFunction = function () {
    console.log("Test");
}
// callback functions
// a function we pass as an argument in another function
// functions are treated as first class citizens, treated as any other argument - read up on this
function sayHiLater(anyFunctionReference){
    // something something
    // then calls the function
    anyFunctionReference()
}

const sayHi = () => {
    console.log("Hi")
}

const sayHelloNow = () => {
    console.log("Hello")
}
sayHiLater(sayHi) // function skal ikke være med paranteser fordi så kører functionen med det samme i stedet for når man caller anyFunction
sayHiLater(sayHelloNow)

function greetings(name){
    console.log("Hello "+name);
}

const poke = (name) => {
    console.log("Poke "+name);
}

function interact(genericInteraction, name) {
    genericInteraction(name)
}

interact(greetings, "Chris")
interact(poke, "Sebastian")

interact ( (name) => console.log("Lick "+ name), "Sebastian")