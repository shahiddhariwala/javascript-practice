// Function Constructor

var shahid =
{
  name: 'Shahid',
  yearOfBirth: 1998,
  job: 'Engineer'
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
  }
}

var shahid = new Person('Shahid DHariwala', 1998, 'Engineer');
console.log(shahid);
// Person { name: 'Shahid DHariwala', yearOfBirth: 1998, job: 'Engineer' }

shahid.calculateAge();
//22

var neha = new Person('Neha', 1998, 'Teacher');
console.log(neha);

var zain = new Person('Zain', 1997, 'Artist');
console.log(zain);

var sallu = new Person('Salman', 1993, 'Senior Engineer');
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

}

Person2.prototype.calculateAge = function () {
  var date = new Date();
  var presentYear = parseInt(date.getFullYear(), 10);
  console.log(presentYear - this.yearOfBirth);
};


var shahid = new Person2('Shahid Dhariwala', 1998, 'Engineer');
console.log(shahid);
// Person { name: 'Shahid DHariwala', yearOfBirth: 1998, job: 'Engineer' }

shahid.calculateAge();
//22

var neha = new Person2('Neha', 1998, 'Teacher');
console.log(neha);
neha.calculateAge();

var zain = new Person2('Zain', 1997, 'Artist');
console.log(zain);
zain.calculateAge();

var sallu = new Person2('Salman', 1993, 'Senior Engineer');
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
Person2.prototype.lastName = 'Dhariwala';
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

console.log(shahid.hasOwnProperty('job'));
// true
console.log(shahid.hasOwnProperty('lastName'));
// false because we are inheriting it 


console.log(shahid instanceof Person2); //true
console.log(shahid instanceof Person); // false coercion


// Creating Object using Object.create



var personProto =
{
  calculateAge: function () {
    var date = new Date();
    var presentYear = parseInt(date.getFullYear(), 10);
    console.log(presentYear - this.yearOfBirth);
  }
};

var shahid = Object.create(personProto);
console.log(shahid); // {} empty
shahid.name = 'Shahid';
shahid.yearOfBirth = '1998';
shahid.job = 'Engineer';
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

  name: { value: 'Nene' },
  yearOfBirth: { value: 1998 },
  job: { value: 'Teacher' }
});
nene.calculateAge(); //22

/*
When we create Object using “Object.create”, the Object passed as parameter is added to the “prototype”
 chain of the new Object created. When user try to access the property from the new Object created, 
 it looks for the prototype chain available to the new Object. The JavaScript Object can traverse “prototype” 
 chain using “__proto__” property. The “userInfo” object passed to Object.create function was added to “__proto__” property 
 of the new Object.
*/

