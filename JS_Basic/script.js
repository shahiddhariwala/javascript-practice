console.log("Hello from External Script");
var fName = "Shahid";
console.log(fName);
var age = 22;
console.log(age);
var flag = false;

if (flag == true) {
    console.log("True");
}
else
{
    console.log("False");
}

hola="shahid";
console.log(hola);


var job;
console.log(job);
/* 
/usr/bin/node JS_Basic/script.js 
Hello from External Script
Shahid
22
False
shahid
undefined */

/*
Varaible Mutation and Type Coercion
*/

fName= 'SHahidDhariwala';
age=22;
var rank =999;

//type coercion
console.log(fName+''+age);
console.log(fName+''+age+rank);
console.log(age+rank);
console.log(age+rank+'ShahidRocks');
/*
SHahidDhariwala22
SHahidDhariwala22999
1021
1021ShahidRocks
*/

//type mutation

age = 'Twenty Two\t';
console.log(age+rank);

//prompt input

var lastName = prompt("What is your last Name");
console.log(lastName);
//popup will ask for input

