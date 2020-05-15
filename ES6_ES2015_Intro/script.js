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
let ages6 = years.map((es) => 2020 - es);
console.log(ages6);
/* 
[ 22, 30, 27, 24 ]
[ 22, 30, 27, 24 ] */

ages6 = years.map((el, index) => `${index} Age : ${2020 - el} `);
console.log(ages6);

//[ '0 Age : 22 ', '1 Age : 30 ', '2 Age : 27 ', '3 Age : 24 ' ]

ages6 = years.map((el, index) => {
    let date = new Date();
    let year = date.getFullYear();
    const age = year - el;
    return `new ${index} Age : ${age} `;
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
    color: "green",
    position: 1,
    clickMe: function () {
        //When funbction is called , it doesnot share local this, its has access to global thios, there for color and position will be undefined
        // to tackle this we can store local this to some variable
        var self = this;
        document.querySelector(".green").addEventListener("click", function () {
            var str =
                "ES-5 This is box number " + self.position + " and it is " + self.color;
            window.alert(str);
        });
    },
};

box5.clickMe();

//ES6

var box6 = {
    color: "green",
    position: 1,
    clickMe: function () {
        //Arrow function uses lexical this of surrounding function
        document.querySelector(".green").addEventListener("click", () => {
            var str =
                "ES-6 This is box number " + this.position + " and it is " + this.color;
            window.alert(str);
        });
    },
};

box6.clickMe();

function Person(name) {
    this.name = name;
}

var friends = ["Zain", "Neha", "Luffy", "Zoro"];
//ES5

Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(
        function (el) {
            return this.name + " is a friend with " + el;
        }.bind(this)
    );
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
    var arr = friends.map((el) => `${this.name} is a friend with ${el}`);

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

var shahid = ["Shahid", 22];
var name5 = shahid[0];
var age5 = shahid[1];

//ES6
const [named6, aged6] = ["Shahid", 22];

console.log(`${named6} Age is ${aged6} `);

//Shahid Age is 22

const obj = {
    firstNamed: "Shahid",
    lastNamed: "Dhariwala",
};

const {
    firstNamed,
    lastNamed
} = obj;
console.log(`${firstNamed} ${lastNamed}`);
// Shahid Dhariwala
const {
    firstNamed: a,
    lastNamed: b
} = obj;

console.log(`${a} ${b}`);
// Shahid Dhariwala

function calcRetirementAge(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [agedd, timeTORetire] = calcRetirementAge(1998);

console.log(`${agedd} ${timeTORetire}`);
// 22 43

///////////////////////////////////
// Arrays

const boxes = document.querySelectorAll(".box");

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (curr) {
    curr.style.backgroundColor = "grey";
});

//ES6

/*  const boxesArr6 = Array.from(boxes);
 boxesArr6.forEach(curr =>  curr.style.backgroundColor = 'grey');

  */
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((curr) => (curr.style.backgroundColor = "grey"));

//ES5
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === "box blue") {
        continue;
    }
    boxesArr5[i].textContent = "I am Gray";
}

//ES6
for (const curr of boxesArr6) {
    if (curr.className.includes("blue")) {
        continue;
    }
    curr.textContent = "I am not blue";
}

//ES5

var ages = [12, 13, 1, 4, 16, 19];
var fullAge = ages.map(function (cur) {
    return cur > 18;
});

console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);
/*
(6) [false, false, false, false, false, true]
 5
 19
*/

//ES6
console.log(ages.findIndex((cur) => cur >= 18)); //5
console.log(ages.find((cur) => cur >= 18)); //19

////////////////////////////////
// Spread operator

var addFOurAges = function (a, b, c, d) {
    return a + b + c + d;
};

var sum1 = addFOurAges(19, 18, 22, 23);
console.log(sum1);
//82

//ES5
var agesso = [19, 18, 22, 23];
var sum2 = addFOurAges.apply(null, agesso);
console.log(sum2);
//82

//ES6
const sum3 = addFOurAges(...agesso);
console.log(sum3);
//82

let luffyFamily = ["Luffy", "Zoro", "Nami", "Sanji", "Ussop"];
let rogerFamily = ["Roger", "Rayleigh", "Crocus", "Shank", "Buggy"];

let pirateKingFamily = [...luffyFamily, "Shahid", ...rogerFamily];
console.log(pirateKingFamily);

// ["Luffy", "Zoro", "Nami", "Sanji", "Ussop", "Shahid", "Roger", "Rayleigh", "Crocus", "Shank", "Buggy"]

const h = document.querySelector("h1");
const boxeso = document.querySelectorAll(".box");
const allSo = [h, ...boxeso];

Array.from(allSo).forEach((curr) => (curr.style.color = "orange"));

//text color changed to orange

/////////////////////////////////
// Rest Parameter (in java we call it var-args)

//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log(2016 - cur >= 18);
    });
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
    years.forEach((cur) => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log(2016 - cur >= limit);
    });
}

//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach((cur) => console.log(2016 - cur >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

////////////////////////////////////
//Default Parameters

// ES5
/* function DhariwalaPerson(firstName, yearOfBirth, lastName, nationality) {
    /* 
    lastName === undefined ? lastName = 'Dhariwala' : lastName = lastName;
    nationality === undefined ? nationality = 'Indian' : nationality = nationality; 
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
/* 
DhariwalaPerson {firstName: "Shahid", lastName: undefined, yearOfBirth: 1990, nationality: undefined}
DhariwalaPerson {firstName: "Zaina", lastName: "Thokar", yearOfBirth: 1983, nationality: "American"} */

//ES6
function DhariwalaPerson(
    firstName,
    yearOfBirth,
    lastName = "Dhariwala",
    nationality = "Indian"
) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var shahiddp = new DhariwalaPerson("Shahid", 1990);
var zaina = new DhariwalaPerson("Zaina", 1983, "Thokar", "American");
console.log(shahiddp);
console.log(zaina);
/* 
DhariwalaPerson {firstName: "Shahid", lastName: "Dhariwala", yearOfBirth: 1990, nationality: "Indian"}
DhariwalaPerson {firstName: "Zaina", lastName: "Thokar", yearOfBirth: 1983, nationality: "American"} */

/////////////////////////////////
// Maps

const question = new Map();
question.set(
    "question",
    "What is the official name of the latest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!");

console.log(question);

/*
Map(8) {"question" => "What is the official name of the latest major JavaScript version?", 1 => "ES5", 2 => "ES6", 3 => "ES2015", 4 => "ES7", …}
[[Entries]]
0: {"question" => "What is the official name of the latest major JavaScript version?"}
1: {1 => "ES5"}
2: {2 => "ES6"}
3: {3 => "ES2015"}
4: {4 => "ES7"}
5: {"correct" => 3}
6: {true => "Correct answer :D"}
7: {false => "Wrong, please try again!"}
size: (...)
__proto__: Map
*/

console.log(question.get("question"));
console.log(question.size);
/*
What is the official name of the latest major JavaScript version?
8
*/
question.delete(4);
console.log(question.get(4));
//undefined

question.set(4, "ES7");
console.log(question.has(4));
//true

question.forEach((value, key) => console.log(`${key} \t\t ${value}`));

/*
question 		 What is the official name of the latest major JavaScript version?
 1 		 ES5
 2 		 ES6
 3 		 ES2015
 correct 		 3
 true 		 Correct answer :D
 false 		 Wrong, please try again!
 4 		 ES7
*/

for (let [key, value] of question.entries()) {
    console.log(`${key} \t\t ${value}`);
}

/*
question 		 What is the official name of the latest major JavaScript version?
 1 		 ES5
 2 		 ES6
 3 		 ES2015
 correct 		 3
 true 		 Correct answer :D
 false 		 Wrong, please try again!
 4 		 ES7
*/

for (let [key, value] of question.entries()) {
    if (typeof key === "number") {
        console.log(`${key} \t\t ${value}`);
    }
}
/*
1 		 ES5
 2 		 ES6
 3 		 ES2015
 4 		 ES7*/

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

/////////////////////////////////
// Classess

//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var shahid = new Person5("Shahid", 1998, "Engineer");

console.log(shahid);
shahid.calculateAge();
// Person5 {name: "Shahid", yearOfBirth: 1998, job: "Engineer"}
// 22

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static methodStatic() {
        console.log(`Hey Smarty!!`);
    }
}

let shahid6 = new Person6("Shahid", 1998, "Engineer");
console.log(shahid6);
shahid6.calculateAge();

// Person6 {name: "Shahid", yearOfBirth: 1998, job: "Engineer"}
// 22

Person6.prototype.helloProtoInClass = function () {
    console.log(`Hello ${this.name} from class`);
};
shahid6.helloProtoInClass();
//Hello from class

Person6.methodStatic();
//Hey Smarty!!

////////////////////////////
// Inheritance , Classess with Subclasses

//ES5

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var shahidAthelete5 = new Athlete5('Shahid', 1998, 'swimmer', 3, 10);

shahidAthelete5.calculateAge(); // 22
shahidAthelete5.wonMedal(); //11

//ES6

class Athlete6 extends Person6
{
    constructor(name,yearOfBirth,job,olymicGames,medals)
    {
        super(name,yearOfBirth,job);
        this.olymicGames = olymicGames;
        this.medals =medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }

}

const shahidAthelete6 = new Athlete6('Shahid', 1998, 'swimmer', 3, 10);


shahidAthelete6.calculateAge(); // 22
shahidAthelete6.wonMedal(); //11