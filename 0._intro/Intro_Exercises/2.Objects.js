// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

console.log(alienMessage.message);

let key = 'message';
console.log(alienMessage[key])  // Which one is correct ?

// Log the message 


// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const MyObject = {
	Name: 'Patrick',
	Age: '30'
};

// --------------------------------------
// Exercise 3 - Add a property 

MyObject.Secret = 'I like turtles'

console.log(MyObject.Secret)

const stackOverflow = {
	isAllowed: 'true'
};

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

delete thisSong.description;
thisSong.about = 'Just a tribute.'

console.log(thisSong.about)


// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------
