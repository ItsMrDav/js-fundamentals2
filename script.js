'use strict';
// ***********************************************************
/**************************** STRICT MODE ****************************/
// ***********************************************************

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log(`I can drive :D`);

// // const interface = `Audio`;
// // const private = 222;
// // const if = ss;

// ***********************************************************
/**************************** FUNCTIONS ****************************/
// ***********************************************************

// //Functions are a chunk of codes we can use over and over again like variable but in bigger volume code

// // declaring a function
// function logger() {
//     console.log(`My name is Davut.`);
// }
// // calling,running or, invoking the function
// logger();
// logger();
// logger();

// function fruitProccessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and, ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProccessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProccessor(5, 0));

// const appleOrangeJuice = fruitProccessor(2, 4);
// console.log(appleOrangeJuice);

// ***********************************************************
/**************** FUNCTION DECLARIONS vs EXPRESSIONS ****************************/
// ***********************************************************

// // Function declarion (It has HOISTING. Function declarations CAN be called before defined.)
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1992);

// // Function expression (Doesnt have HOISTING. Function expressions can NOT be called before defined.)
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2);

// ***********************************************************
//**************** ARROW FUNCTIONS ****************************
// ***********************************************************

// // Arrow function is a special function expression. You don't use function keyword here.
// // For 1 line functions u can skip return keyword and curly braces.
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1992, `Davut`));
// console.log(yearsUntilRetirement(1980, `Jack`));

// ***********************************************************
/**************** FUNCTIONS CALLING OTHER FUNCTIONS ****************************/
// ***********************************************************

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProccessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and, ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProccessor(2, 3));

// ***********************************************************
/**************** REVIEWING FUNCTIONS ****************************/
// ***********************************************************

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     // return retirement > 0 ? retirement : -1;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1992, `Davut`));
// console.log(yearsUntilRetirement(1950, `Mike`));

// ***********************************************************
/**************** INTRODUCTION TO ARRAYS ****************************/
// ***********************************************************

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // There are two ways to create array, first with []
// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);
// // Another way is with new Array()
// const y = new Array(1992, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// // How to get last index using .length
// console.log(friends[friends.length - 1]);

// // How to mutate array's element
// friends[2] = `Jay`;
// console.log(friends);

// const firstName = `Davut`;
// const davut = [firstName, `Simsek`, 2037 - 1992, `student`, friends];
// console.log(davut);

// // An exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// ***********************************************************
/**************** BASIC ARRAY METHODS ****************************/
// ***********************************************************

// // Js has some built in functions, we can apply them to array, they're called array methods.

// // Add elements push(last),unshift(first), when used in a variable they RETURN length of the array
// const friends = [`Michael`, `Steven`, `Peter`];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`);
// console.log(friends);

// // Remove elements pop(last),shift(first), when used in a varaibla they RETURN removed element
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// // indexOf(===element) true>elementIndex,false>-1
// friends.push(23);
// console.log(friends.indexOf(`Steven`));
// console.log(friends.indexOf(`Bob`));
// console.log(friends.indexOf(`23`));
// // includes(===element) true>true,false>false
// friends.push(23);
// console.log(friends.includes(`Steven`));
// console.log(friends.includes(`Bob`));
// console.log(friends.includes(`23`));

// if (friends.includes(`Steven`)) {
//     console.log(`You have a friend called that name.`)
// }

// ***********************************************************
/**************** INTRODUCTION TO OBJECTS ****************************/
// ***********************************************************

// // creating object with object literal syntax
// const Davut = {
//     firstName: `Davut`,
//     lastName: `Simsek`,
//     age: 2037 - 1992,
//     job: `engineer`,
//     friends: [`Michael`, `Peter`, `Steven`]
// }

// ***********************************************************
/**************** DOT VS BRACKET NOTATION ****************************/
// ***********************************************************

// const davut = {
//     firstName: `Davut`,
//     lastName: `Simsek`,
//     age: 2037 - 1992,
//     job: `engineer`,
//     friends: [`Michael`, `Peter`, `Steven`]
// };

// console.log(davut);

// // DOT notation, has to be exact value
// console.log(davut.lastName);
// console.log(davut[`lastName`]);

// // BRACKET notation, can be a computed value
// const nameKey = `Name`;
// console.log(davut[`first${nameKey}`]);
// console.log(davut[`last${nameKey}`]);

// // Example of bracket notation

// const interestedIn = prompt(`What do you want to know about Davut? Choose between firstName, lastName, age, job, and friends.`);
// console.log(davut[interestedIn]);

// if (davut[interestedIn]) {
//     console.log(davut[interestedIn]);
// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends.`);
// }

// davut.location = `Spain`;
// davut[`twitter`] = `@davuttsimsek`;
// console.log(davut);

// // Challenge example
// // `Davut has 3 friends, and his best friend is called Michael`

// console.log(`${davut.firstName} has ${davut.friends.length} friends, bestie is ${davut.friends[0]}.`);

// ***********************************************************
/**************** OBJECT METHODS ****************************/
// ***********************************************************

// const davut = {
//     firstName: `Davut`,
//     lastName: `Simsek`,
//     birthYear: 1992,
//     job: `engineer`,
//     friends: [`Michael`, `Peter`, `Steven`],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//     }

// };

// // console.log(davut.calcAge());

// // console.log(davut.age);
// // console.log(davut.age);
// // console.log(davut.age);

// // Example challange
// // `Davut is a 45 years old engineer, and he has/no driver's license.`
// console.log(davut.getSummary());