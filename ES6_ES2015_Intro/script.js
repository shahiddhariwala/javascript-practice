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


//Arrow function dont have their own this, insetad they use 'this' of fucntion they are called in
//called as Lexical this


//ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        //When funbction is called , it doesnot share local this, its has access to global thios, there for color and position will be undefined
        // to tackle this we can store local this to some variable
        var self = this;
        document.querySelector(".green").addEventListener('click', function () {
            var str = "ES-5 This is box number " + self.position + " and it is " + self.color;
            window.alert(str);
        });
    }
}

box5.clickMe();


//ES6

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        //Arrow function uses lexical this of surrounding function
        document.querySelector(".green").addEventListener('click', () => {
            var str = "ES-6 This is box number " + this.position + " and it is " + this.color;
            window.alert(str);
        });
    }
}

box6.clickMe();

function Person(name) {
    this.name = name;
};

var friends = ["Zain","Neha","Luffy","Zoro"];
//ES5

Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + " is a friend with " + el;
    }.bind(this));
    console.log(arr);
};

new Person("Shahid").myFriends5(friends);
/*
0: "Shahid is a friend with Zain"
1: "Shahid is a friend with Neha"
2: "Shahid is a friend with Luffy"
3: "Shahid is a friend with Zoro"
*/

Person.prototype.myFriends6 = function (friends) {
    var arr = friends.map((el =>
        `${this.name} is a friend with ${el}`));

    console.log(arr);
};

new Person("Sanji").myFriends6(friends);
/*
0: "Sanji is a friend with Zain"
1: "Sanji is a friend with Neha"
2: "Sanji is a friend with Luffy"
3: "Sanji is a friend with Zoro"
*/

///////////////////////////////////
// Destructuring

//ES5

var shahid = ['Shahid',22];
var name5 = shahid[0];
var age5 = shahid[1];

//ES6
const[named6,aged6] = ['Shahid',22];

console.log(`${named6} Age is ${aged6} `);

//Shahid Age is 22 

const obj =
{
    firstNamed : 'Shahid',
    lastNamed : 'Dhariwala'
};

const {firstNamed,lastNamed} = obj;
console.log(`${firstNamed} ${lastNamed}`);
// Shahid Dhariwala
const {firstNamed : a, lastNamed : b} = obj;

console.log(`${a} ${b}`);
// Shahid Dhariwala 


function calcRetirementAge(year)
{
    const age = new Date().getFullYear() - year;
    return [age,65-age];
}

const [agedd,timeTORetire] = calcRetirementAge(1998);

console.log(`${agedd} ${timeTORetire}`);
// 22 43

