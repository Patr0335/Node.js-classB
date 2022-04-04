// Javascript is single-threaded: it runs on one thread and eerything is handled there.

// here its not the case. 
// setInterval(() => {
//     console.log("Second")
// }, 10);
// console.log("First")

// why do we need to handle asynchronous behaviour. = We dont want to block our application.
// what does it mean to block our application? = take a lot of time for response. nothing else can happen. its freezing.
// this is why we have eventlistener and that can take callbacks. rather than blocking everything. 


// When do we need to handle asynchronous behavour?
// over the network: for instance fetch.
// file handling. what we did in SSR. saving to files. reading to files. its all asynchronous
// setInterval / setTimeout
// databases! we are doing this asynchronously.


// promise state
// pending
// fullfilled
    // resolved or rejected


// assignment create a function called somethingGoodSomethingBad 
// it should return a promise - that is to say that we wrap the function in a promise
// BEWARE: you should not handle the promise.. just create a function that returns a promise
//  make it take 4 seconds to complete



function somethingGoodSomethingBad() {

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            try {
                throw new Error()
                resolve("good")
            } catch {
                reject("bad")
            }
            
        }, 4000);
    })
}

somethingGoodSomethingBad()
    .then(message => console.log(message));




(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch {
        console.log(errorMessage);
    }
    
})() // immidiately invoked function IIFE


async function anAsynchFunction() {
    
}
console.log();
// new Promise((resolve, reject) => {
// try {
//     // throw new Error("Bomb!");
//     resolve({"Everything went well"})
// } catch (errorMessage) {
//     reject("Someting went wrong" + errorMessage);
// }
    
// })
// .then(message => console.log(message))
// .catch(errorMessage => console.log(errorMessage));

// promise.all