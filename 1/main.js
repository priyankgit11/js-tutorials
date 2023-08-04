// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;
// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiMark})`);
// } else {
//   console.log(`Johns's BMI (${bmiJohn}) is greater than Mark's (${bmiMark})`);
// }

// let inputYear = "1991";
// console.log(typeof inputYear);
// inputYear = 18 + inputYear;
// console.log(inputYear);
// inputYear = undefined;
// console.log(typeof inputYear);

// let x = "18";
// console.log(x === 18);

// COMPARISION CODING CHALLENGE
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (96 + 108 + 89) / 3;

// // const scoreDolphins = (97 + 112 + 101) / 3;
// // const scoreKoalas = (97 + 112 + 101) / 3;
// if (scoreDolphins > scoreKoalas)
//   console.log(
//     `Team Dolphins(${scoreDolphins}) won against Koalas(${scoreKoalas})`
//   );
// else if (scoreKoalas > scoreDolphins)
//   console.log(
//     `Team Koalas(${scoreKoalas}) won against Dolphins(${scoreDolphins}))`
//   );
// else {
//   console.log("It was a DRAW!!");
// }
// if (scoreDolphins > 100 || scoreKoalas > 100) {
//   if (scoreDolphins > scoreKoalas && (scoreDolphins > 100 || scoreKoalas > 100))
//     console.log(
//       `Team Dolphins(${scoreDolphins}) won against Koalas(${scoreKoalas})`
//     );
//   else if (
//     scoreKoalas > scoreDolphins &&
//     (scoreDolphins > 100 || scoreKoalas > 100)
//   )
//     console.log(
//       `Team Koalas(${scoreKoalas}) won against Dolphins(${scoreDolphins}))`
//     );
//   else {
//     console.log("It was a DRAW!!");
//   }
// } else console.log("Nobody won");
let bill = 430;
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(bill + tip);
