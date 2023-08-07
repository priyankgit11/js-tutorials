// function logger() {
//   console.log("Hello World");
// }
// console.log(logger());

// function nonPara(foo) {
//   console.log(foo);
// }
// nonPara();

// const calcAge = (x, y) => {
//   return x + y;
// };
// console.log(calcAge(2, 3));

// Coding Challenge 1
// const calcAverage = (s1, s2, s3) => {
//   return (s1 + s2 + s3) / 3;
// };
// function checkWinner(avgKoalas, avgDolphins) {
//   if (avgKoalas >= avgDolphins * 2)
//     console.log(
//       `Koala's team with score ${avgKoalas} won against Dolphin's team with score ${avgDolphins}`
//     );
//   else if (avgDolphins >= avgKoalas * 2)
//     console.log(
//       `Koala's team with score ${avgKoalas} won against Dolphin's team with score ${avgDolphins}`
//     );
//   else console.log("Nobody won");
// }
// const avgKoalas = calcAverage(85, 54, 41);
// const avgDolphins = calcAverage(23, 34, 27);
// console.log(avgDolphins);
// console.log(avgKoalas);
// checkWinner(avgKoalas, avgDolphins);

// friends = ["John", "Michael", "Steven"];
// console.log(friends);

// Coding Challenge 2
// function calcTip(bill) {
//   tip = 0;
//   if (bill >= 50 && bill <= 300) tip = bill * 0.15;
//   else tip = bill * 0.2;
//   return tip;
// }
// const bills = [125, 555, 44];
// tips = Array();
// totals = Array();
// tips.push(calcTip(bills[0]));
// tips.unshift(calcTip(bills[1]));
// tips.unshift(calcTip(bills[2]));
// totals.push(bills[0] + tips[0]);
// totals.push(bills[1] + tips[1]);
// totals.push(bills[2] + tips[2]);
// console.log(totals);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
// };
// calcAge = function (year) {
//   console.log(this.birthYear);
//   return 2037 - year;
// };
// console.log(calcAge(jonas.birthYear));

// Coding Challenge 3
// Mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// John = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// Mark.calcBMI();
// John.calcBMI();
// if (Mark.bmi > John.bmi)
//   console.log(
//     `${Mark.firstName} ${Mark.lastName}'s bmi (${Mark.bmi}) is higher than ${Mark.firstName} ${John.lastName}'s bmi (${John.bmi})`
//   );
// else
//   console.log(
//     `${Mark.firstName} ${Mark.lastName}'s bmi (${Mark.bmi}) is higher than ${Mark.firstName} ${John.lastName}'s bmi (${John.bmi})`
//   );

// Coding Challenge 4
function calcTip(bill) {
  tip = 0;
  if (bill >= 50 && bill <= 300) tip = bill * 0.15;
  else tip = bill * 0.2;
  return tip;
}
function calcAverage(billArray) {
  let sum = 0;
  for (let i = 0; i < billArray.length; i++) sum += billArray[i];
  return sum / billArray.length;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = Array();
totals = Array();
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(totals);
const avgArray = calcAverage(totals);
console.log(avgArray);
console.log(bills);
console.log(tips);
console.log(totals);
