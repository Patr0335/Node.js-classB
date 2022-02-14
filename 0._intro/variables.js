"use strict";

// don't use var!!!
// var globalVariable = "value";

// totalGlobal = "NEVER do this!!!";

let banana = "Return to monke";
banana = "Praise be Harambe";

const monke = {
    name: "Harambe"
};

// cannot be done with const needs to be initialized
// const monke2;

monke.age = 17;
monke.name = "New Monkey in town";

// console.log(monke);

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable);
}

{
    var someVariable = true;
    {
        var someVariable = false;
    }
    console.log(someVariable);
}


/* for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
} */

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// ikke brug var for den vil printe 10 ud 10 gange. It redefines the value and leaks out.
// scoping issues. Increments happen before the for loop.
