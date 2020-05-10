// Function Constructor

var shahid = 
{
    name : 'Shahid',
    yearOfBirth: 1998,
    job: 'Engineer'
};
console.log(shahid);
// { name: 'Shahid', yearOfBirth: 1998, job: 'Engineer' }
var Person = function(name,yearOfBirth,job)
{
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge= function()
    {
        var date = new Date();
        var presentYear = parseInt(date.getFullYear(),10);
        console.log(presentYear-this.yearOfBirth);
    }
}

var shahid = new Person('Shahid DHariwala',1998,'Engineer');
console.log(shahid);
// Person { name: 'Shahid DHariwala', yearOfBirth: 1998, job: 'Engineer' }

shahid.calculateAge();
//22

var neha = new Person('Neha',1998,'Teacher');
console.log(neha);

var zain = new Person('Zain',1997,'Artist');
console.log(zain);

var sallu = new Person('Salman',1993,'Senior Engineer');
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

var Person2 = function(name,yearOfBirth,job)
{
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}

Person2.prototype.calculateAge= function()
{
    var date = new Date();
    var presentYear = parseInt(date.getFullYear(),10);
    console.log(presentYear-this.yearOfBirth);
};


var shahid = new Person2('Shahid Dhariwala',1998,'Engineer');
console.log(shahid);
// Person { name: 'Shahid DHariwala', yearOfBirth: 1998, job: 'Engineer' }
    
shahid.calculateAge();
//22

var neha = new Person2('Neha',1998,'Teacher');
console.log(neha);
neha.calculateAge();

var zain = new Person2('Zain',1997,'Artist');
console.log(zain);
zain.calculateAge();

var sallu = new Person2('Salman',1993,'Senior Engineer');
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
Person2.prototype.lastName='Dhariwala';
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

