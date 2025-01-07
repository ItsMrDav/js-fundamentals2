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