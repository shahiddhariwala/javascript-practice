// Function Constructor

var shahid = {
  name: "Shahid",
  yearOfBirth: 1998,
  job: "Engineer",
};
console.log(shahid);
// { name: 'Shahid', yearOfBirth: 1998, job: 'Engineer' }
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    var date = new Date();
    var presentYear = parseInt(date.getFullYear(), 10);
    console.log(presentYear - this.yearOfBirth);
  };
};

var shahid = new Person("Shahid DHariwala", 1998, "Engineer");
console.log(shahid);
// Person { name: 'Shahid DHariwala', yearOfBirth: 1998, job: 'Engineer' }

shahid.calculateAge();
//22

var neha = new Person("Neha", 1998, "Teacher");
console.log(neha);

var zain = new Person("Zain", 1997, "Artist");
console.log(zain);

var sallu = new Person("Salman", 1993, "Senior Engineer");
console.log(sallu);

/*
Person {
  name: 'Neha',
  yearOfBirth: 1998,
  job: 'Teacher',
  calculateAge: [Function] }
Person {
  name: 'Zain',
  yearOfBirth: 1997,
  job: 'Artist',
  calculateAge: [Function] }
Person {
  name: 'Salman',
  yearOfBirth: 1993,
  job: 'Senior Engineer',
  calculateAge: [Function] }

  We can see that function Calculate Age is copied in three times,
  this will cause more memory use, inorder to avoid this we can use inheritance
*/

//Using prototype

var Person2 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person2.prototype.calculateAge = function () {
  var date = new Date();
  var presentYear = parseInt(date.getFullYear(), 10);
  console.log(presentYear - this.yearOfBirth);
};

var shahid = new Person2("Shahid Dhariwala", 1998, "Engineer");
console.log(shahid);
// Person { name: 'Shahid DHariwala', yearOfBirth: 1998, job: 'Engineer' }

shahid.calculateAge();
//22

var neha = new Person2("Neha", 1998, "Teacher");
console.log(neha);
neha.calculateAge();

var zain = new Person2("Zain", 1997, "Artist");
console.log(zain);
zain.calculateAge();

var sallu = new Person2("Salman", 1993, "Senior Engineer");
console.log(sallu);
sallu.calculateAge();

/*
Person2 { name: 'Shahid Dhariwala', yearOfBirth: 1998, job: 'Engineer' }
22
Person2 { name: 'Neha', yearOfBirth: 1998, job: 'Teacher' }
22
Person2 { name: 'Zain', yearOfBirth: 1997, job: 'Artist' }
23
Person2 { name: 'Salman', yearOfBirth: 1993, job: 'Senior Engineer' }
27
*/

// we can also add property using prototype, but not recommended
//its not part of object but its inherited
Person2.prototype.lastName = "Dhariwala";
console.log(zain);
console.log(zain.lastName);
console.log(sallu.lastName);
console.log(sallu);
/*
27
Person2 { name: 'Zain', yearOfBirth: 1997, job: 'Artist' }
Dhariwala
Dhariwala
Person2 { name: 'Salman', yearOfBirth: 1993, job: 'Senior Engineer' }
*/

//Prototype Chain

console.log(shahid.hasOwnProperty("job"));
// true
console.log(shahid.hasOwnProperty("lastName"));
// false because we are inheriting it

console.log(shahid instanceof Person2); //true
console.log(shahid instanceof Person); // false coercion

// Creating Object using Object.create

var personProto = {
  calculateAge: function () {
    var date = new Date();
    var presentYear = parseInt(date.getFullYear(), 10);
    console.log(presentYear - this.yearOfBirth);
  },
};

var shahid = Object.create(personProto);
console.log(shahid); // {} empty
shahid.name = "Shahid";
shahid.yearOfBirth = "1998";
shahid.job = "Engineer";
console.log(shahid);
// { name: 'Shahid', yearOfBirth: '1998', job: 'Engineer' }
/*
{name: "Shahid", yearOfBirth: "1998", job: "Engineer"}
name: "Shahid"
yearOfBirth: "1998"
job: "Engineer"
__proto__:
calculateAge: ƒ ()
length: 0
name: "calculateAge"
arguments: null
caller: null
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: script.js:139
[[Scopes]]: Scopes[1]
__proto__:
constructor: ƒ Object()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
hasOwnProperty: ƒ hasOwnProperty()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toString: ƒ toString()
valueOf: ƒ valueOf()
toLocaleString: ƒ toLocaleString()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/
var nene = Object.create(personProto, {
  name: { value: "Nene" },
  yearOfBirth: { value: 1998 },
  job: { value: "Teacher" },
});
nene.calculateAge(); //22

/*
When we create Object using “Object.create”, the Object passed as parameter is added to the “prototype”
 chain of the new Object created. When user try to access the property from the new Object created, 
 it looks for the prototype chain available to the new Object. The JavaScript Object can traverse “prototype” 
 chain using “__proto__” property. The “userInfo” object passed to Object.create function was added to “__proto__” property 
 of the new Object.
*/

// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 143;
console.log(a);
console.log(b);
//143
//23

var obj1 = {
  name: "Shahid",
  age: 22,
};

//Objects
var obj2 = obj1;
obj2.age = 55;
console.log(obj1);
console.log(obj2);
/*
{ name: 'Shahid', age: 55 }
{ name: 'Shahid', age: 55 }
we didnt create new object we just created reference to point to same object
*/

//Functions
var age = 22;
var obj = {
  name: "Shahid",
  city: "Mumbai",
};

function change(a, b) {
  (a = 55), (b.city = "Amravati");
}

console.log(obj);
console.log(age);
change(age, obj);
console.log(obj);
console.log(age);
/*
{ name: 'Shahid', city: 'Mumbai' }
22
{ name: 'Shahid', city: 'Amravati' }
22
*/

//Functions are also objects in JS
/*
1. A function is an Instance of the Object Type
2. A Function behaves like any other object
3. We can store functioins in a variable
4. We can Pass a Function as an Agrument to another function
5. We can return a function from a function.
*/

//Passing Function as Argument

var years = [1990, 1991, 1993, 1998, 1997, 2013];

function arrayCalcy(arr, fn) {
  var arResult = [];

  for (var i = 0; i < arr.length; i++) {
    arResult.push(fn(arr[i]));
  }
  return arResult;
}

function calcAge(el) {
  var date = new Date();
  var currentYear = date.getFullYear();
  return currentYear - el;
}

var ageArray = arrayCalcy(years, calcAge);
console.log(ageArray);
//[ 30, 29, 27, 22, 23, 7 ]

function isFullAGe(el) {
  return el >= 18;
}
var legalAge = arrayCalcy(ageArray, isFullAGe);
console.log(legalAge);
// [ true, true, true, true, true, false ]

function maxHeartRate(ele) {
  if (ele >= 18 && ele <= 81) {
    return Math.round(206.9 - 0.67 * ele);
  } else {
    return -1;
  }
}

var heartArray = arrayCalcy(ageArray, maxHeartRate);
console.log(heartArray);

//  [ 187, 187, 189, 192, 191, -1 ]

// Function Returning Function

function interviewQuestion(job) {
  switch (job) {
    case "designer":
      return function (name) {
        console.log(name + ", can you please explain me what UX design is ?");
      };
      break;
    case "teacher":
      return function (name) {
        console.log("What subject do you teach , " + name + " ?");
      };
      break;
    default:
      return function (name) {
        console.log("Hello ," + name + " what do you do ?");
      };
      break;
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Shahid");
teacherQuestion("Sallu");
teacherQuestion("Arbaaz");
teacherQuestion("Zain");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Zain");
designerQuestion("rahul");
designerQuestion("Luffy");
designerQuestion("Zoro");

var huhQuestion = interviewQuestion();
huhQuestion("Leonardus");
huhQuestion("Shinchan");
huhQuestion("Franky");
huhQuestion("Usopp");

/*
What subject do you teach , Shahid ?
What subject do you teach , Sallu ?
What subject do you teach , Arbaaz ?
What subject do you teach , Zain ?
Zain, can you please explain me what UX design is ?
rahul, can you please explain me what UX design is ?
Luffy, can you please explain me what UX design is ?
Zoro, can you please explain me what UX design is ?
Hello ,Leonardus what do you do ?
Hello ,Shinchan what do you do ?
Hello ,Franky what do you do ?
Hello ,Usopp what do you do ?
*/

interviewQuestion("teacher")("SimpleBro");
//\What subject do you teach , SimpleBro ?

/////////////////////////////////////////
//Immediately Invoked Function Expressions

// IIFE hiding varable from outside just making it private

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

(function (goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);
//false
//true

/////////////////////////////////////////
//Closures

function retirement(retirementAge) {
  var a = " years left untill retirement";
  return function (yearOfBirth) {
    var date = new Date();
    var age = date.getFullYear() - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retireementUS = retirement(66);
retireementUS(1990);
retirement(66)(1990);
/*
36 years left untill retireement
36 years left untill retireement

Holly molly, how it is accessing var 'a' of outer function x(

  hahah its because of JS closures

  An inner function has always access to the variables and paarameter of its outer function , 
  even after the outer function has returned


*/

function interviewQuestion(job) {
  return function (name) {
    //job is capatured varaible, power of closure
    switch (job) {
      case "designer":
        console.log(name + ", can you please explain me what UX design is ?");
        break;
      case "teacher":
        console.log("What subject do you teach , " + name + " ?");
        break;
      default:
        console.log("Hello ," + name + " what do you do ?");
        break;
    }
  };
}

interviewQuestion("teacher")("shahid");
// What subject do you teach , shahid ?
interviewQuestion("designer")("Zain");
// Zain, can you please explain me what UX design is ?

////////////////////////////////////////////
// Testing Bind Call and Apply

var shahid = {
  name: "Shahid",
  age: 22,
  job: "Engineer",
  presentation: function (style, timeOfDay) {
    switch (style) {
      case "formal":
        console.log(
          "Good " +
            timeOfDay +
            " Ladies and Gentlemen! I'm " +
            this.name +
            ", I'm " +
            this.job +
            " and I'm " +
            this.age +
            " years old"
        );
        break;
      case "friendly":
        console.log(
          "Heya Wasuppp I'm " +
            this.name +
            ", I'm " +
            this.job +
            " and I'm " +
            this.age +
            " years old have a nice " +
            timeOfDay
        );
        break;
      default:
        console.log("Boring " + this.name);
        break;
    }
  },
};
var neha = {
  name: "Neha",
  age: "24",
  job: "Teacher",
};

shahid.presentation("formal", "morning");
//Good morning Ladies and Gentlemen! I'm Shahid, I'm Engineer and I'm 22 years old

// using call to borrow the method
shahid.presentation.call(neha, "friendly", "morning");
//eya Wasuppp I'm Neha, I'm Teacher and I'm 24 years old have a nice morning

// we can also use apply , its passes array as argument, but our function does not support array arguments
// shahid.presentation.apply(neha,['friendly','morning']);

//bind gives us function in return with preset arguments(carrying )
var friendlyShahid = shahid.presentation.bind(shahid, "friendly");

friendlyShahid("morning");
// Heya Wasuppp I'm Shahid, I'm Engineer and I'm 22 years old have a nice morning

friendlyShahid("night");
//Heya Wasuppp I'm Shahid, I'm Engineer and I'm 22 years old have a nice night

var nehaFormal = shahid.presentation.bind(neha, "formal");
nehaFormal("night");
nehaFormal("morning");

/*
Good night Ladies and Gentlemen! I'm Neha, I'm Teacher and I'm 24 years old
Good morning Ladies and Gentlemen! I'm Neha, I'm Teacher and I'm 24 years old
*/

var years = [1990, 1991, 1993, 1998, 1997, 2013];

function arrayCalcy(arr, fn) {
  var arResult = [];

  for (var i = 0; i < arr.length; i++) {
    arResult.push(fn(arr[i]));
  }
  return arResult;
}

function calcAge(el) {
  var date = new Date();
  var currentYear = date.getFullYear();
  return currentYear - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalcy(years, calcAge);
var fullJapan = arrayCalcy(ages, isFullAge.bind(this, 23));
console.log(ages);
console.log(fullJapan);
/*
[ 30, 29, 27, 22, 23, 7 ]
[ true, true, true, false, true, false ]
*/
