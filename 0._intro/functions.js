
// function decleration is called before runtime. called hoisting.
// console.log(add(2, 8)); works because of hoisting.

function add(x, y) {  // function signature
    return x + y; // function body
} // function declaration

console.log(add(2, 8));

// a function without a name is called anonymous function
const addInAVariable = function (x, y) {  // function saved in a variable. 
    return x + y;
}

console.log(addInAVariable(2, 5));
// this is an arrow function. for longer code examples.
/*const addArrowFunction = (x, y) => {  
    return x + y;
}*/

// ASI = automatic semicolon injection. 

// arrowfunction one-liner. for small code.
const addArrowFunction = (x, y) => x + y;
    
console.log(addArrowFunction(35, 2));

// A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished

function doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

// Anders is running.
doActionWithSomeone(running, 'Anders'); // pass running and anders to my function. hoisting aswell. 


// passing + any action of your choosing

doActionWithSomeone((name) => console.log(`${name} threw the fish`), 'Patrick')


