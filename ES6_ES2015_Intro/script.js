/*
Code by  : Shahid Dhariwala
LinkedIn : https://www.linkedin.com/in/shahiddhariwala/
Twitter  : https://twitter.com/shahiddhariwala
Date     : 15-May-2020
*/

/////////////////////////////////
// let and const

// ES5
var name5 = "Shahid Dhariwala";
var age5 = 23;
name5 = "Shahid Memon";
console.log(name5);
//Shahid Memon


// ES6
const name6 = "Shahid Dhariwala";
let age6 = 23;
//name6 = "Shahid Memon";
console.log(name6);
// Throw TypeError: Assignment to constant variable. cant assign anything to constant after declartion

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = "Zain";
        var yearOfBirth = 1998;
    }

    console.log(
        firstName +
        ", born in " +
        yearOfBirth +
        ", is now officially allowed to drive a car."
    );
}

// undefined , we can use var before declartion as it is in function scope
// Zain, born in 1990, is now officially allowed to drive a car.

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
    // console.log(firstName);
    // Will throw error ReferenceError: firstName is not defined
    let firstName;
    const yearOfBirth = 1998;

    if (passedTest) {
        firstName = "Zain";
    }

    console.log(
        firstName +
        ", born in " +
        yearOfBirth +
        ", is now officially allowed to drive a car."
    );
}
//Zain, born in 1990, is now officially allowed to drive a car.
driversLicence6(true);

var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}
// 0
// 1
// 2
// 3
// 4

console.log(i);
// 5 new value assigned to i


/////////////////////////////////
// Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
/*
console.log(a + b);
            ^

ReferenceError: a is not defined*/


console.log(c);
//3 since c is 'var'
// ES5
(function () {
    var c = 3;
})();

//console.log(c);

/////////////////////////////////
//Strings

let firstName = "Shahid";
let lastName = "Dhariwala";
const yearOfBirth = 1998;

function calcAge(year) {
    return 2020 - year;
}

// ES5
console.log(
    "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
console.log(
    `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("s"));
console.log(n.endsWith("ala"));
console.log(n.includes("Dhar"));
console.log(`${firstName} `.repeat(5));

/*
This is Shahid Dhariwala. He was born in 1998. Today, he is 22 years old.
This is Shahid Dhariwala. He was born in 1998. Today, he is 22 years old.
false
true
true
Shahid Shahid Shahid Shahid Shahid */


//////////////////////////////
//Arrow function


const years = [1998, 1990, 1993, 1996];

//ES5
var ages5 = years.map(function (curr) {
    return 2020 - curr;
});
console.log(ages5);

//ES6
let ages6 = years.map(es => 2020 - es);
console.log(ages6);
/* 
[ 22, 30, 27, 24 ]
[ 22, 30, 27, 24 ] */

ages6 = years.map((el, index) => `${index} Age : ${2020-el} `);
console.log(ages6);

//[ '0 Age : 22 ', '1 Age : 30 ', '2 Age : 27 ', '3 Age : 24 ' ]

ages6 = years.map((el, index) => {
    let date = new Date();
    let year = date.getFullYear();
    const age = year - el;
    return `new ${index} Age : ${age} `

});
console.log(ages6);
/*
[ 'new 0 Age : 22 ',
  'new 1 Age : 30 ',
  'new 2 Age : 27 ',
  'new 3 Age : 24 ' ]
  */