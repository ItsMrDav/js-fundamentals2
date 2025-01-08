'use strict';
// ***********************************************************
/**************************** FUNCTIONS ****************************/
// ***********************************************************

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital is ${capitalCity}.`;
// }

// const country1 = describeCountry(`Spain`, 47.5, `Madrid`);
// const country2 = describeCountry(`Turkey`, 88, `Ankara`);
// const country3 = describeCountry(`U.S`, 335, `Washington D.C`);

// console.log(country1);
// console.log(country2);
// console.log(country3);

// ***********************************************************
/**************** FUNCTION DECLARIONS vs EXPRESSIONS ****************************/
// ***********************************************************

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const countryPer1 = percentageOfWorld1(47.5);
// const countryPer2 = percentageOfWorld1(88);
// const countryPer3 = percentageOfWorld1(335);
// console.log(countryPer1, countryPer2, countryPer3);


// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }
// const countryPer4 = percentageOfWorld2(47.5);
// const countryPer5 = percentageOfWorld2(88);
// const countryPer6 = percentageOfWorld2(335);
// console.log(countryPer4, countryPer5, countryPer6);

// ***********************************************************
/**************** ARROW FUNCTIONS ****************************/
// ***********************************************************

// const percentageOfWorld3 = population => (population / 7900) * 100;
// const countryPer7 = percentageOfWorld3(47.5);
// const countryPer8 = percentageOfWorld3(88);
// const countryPer9 = percentageOfWorld3(335);
// console.log(countryPer7, countryPer8, countryPer9);

// ***********************************************************
/**************** FUNCTIONS CALLING OTHER FUNCTIONS ****************************/
// ***********************************************************

// const describePopulation = (country, population) => {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage} of the world.`;
//     return description;
// }

// const desCountry1 = describePopulation(`Spain`, 47.5);
// const desCountry2 = describePopulation(`Turkiye`, 88);
// const desCountry3 = describePopulation(`U.S`, 335);
// console.log(desCountry1);
// console.log(desCountry2);
// console.log(desCountry3);

// ***********************************************************
/**************** CODING CHALLENGE #5 ****************************/
// ***********************************************************

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// //Data1
// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);
// //Data2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     // if (avgDolphins >= avgKoalas * 2) console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
//     avgDolphins >= avgKoalas * 2 && console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
//     // if (avgKoalas >= avgDolphins * 2) console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
//     avgKoalas >= avgDolphins * 2 && console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
// }

// checkWinner(avgDolphins, avgKoalas);

// ***********************************************************
/**************** INTRODUCTION TO ARRAYS ****************************/
// ***********************************************************

// const populations = [47.5, 88, 335, 120];
// console.log(`Is array has 4 elements: ${populations.length === 4 ? true : false}.`);

// function calcPer(population) {
//     return (population / 7900) * 100;
// }

// const percentages = [calcPer(populations[0]), calcPer(populations[1]), calcPer(populations[2]), calcPer(populations[populations.length - 1])];
// console.log(percentages);

// ***********************************************************
/**************** BASIC ARRAY METHODS ****************************/
// ***********************************************************

// const neighbors = [`France`, `Andorra`, `Portugal`];
// neighbors.push(`Utophia`);
// neighbors.pop();

// console.log(`${neighbors.includes(`Germany`) === false ? `Not a central EU country` : null}`);
// !neighbors.includes(`Germany`) && console.log(`Probably not a central European country.`);

// console.log(neighbors);
// neighbors[neighbors.indexOf(`Andorra`)] = `Republic of Andorra`;
// console.log(neighbors);

// ***********************************************************
/**************** CODING CHALLENGE #6 ****************************/
// ***********************************************************

// const calcTip = bill => {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//         return tip;
//     } else {
//         tip = bill * 0.2;
//         return tip;
//     }
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// ***********************************************************
/**************** INTRODUCTION TO OBJECTS ****************************/
// ***********************************************************