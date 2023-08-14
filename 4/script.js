"use strict";
// let x = 2;
// const fun = function (){

// }
// const obj = {
// 	foo: function () {
// 		console.log(this);
// 		const foo = () => {
// 			console.log(this);
// 		};
// 		foo();
// 	},
// };
// obj.foo();

// const obj = {
// 	fname: "Priyank",
// 	fun: function () {
// 		console.log(this);
// 	},
// };
// const foo = () => {
// 	console.log(this);
// };
// obj.fun();
// foo();

// const obj = {
// 	x: 1991,
// 	fun: function () {
// 		console.log(this);
// 	},
// 	foo: () => {
// 		console.log(this);
// 	},
// };
// obj.fun();
// obj.foo();

// function fun() {
// 	console.log("Hello");
// }
// const fooConst = function () {
// 	console.log("World");
// };
// let fooLet = function () {
// 	console.log("World");
// };
// var fooVar = function () {
// 	console.log("World");
// };
// console.log(this);

// const obj = {
// 	fun: function () {
// 		console.log(this);
// 	},
// 	foo: () => {
// 		console.log(this);
// 	},
// };
// obj.fun();
// obj.foo();

// const obj = {
// 	fname: "Obj",
// 	family: ["Bob", "Marley"],
// };
// const objCopy = Object.assign({}, obj);
// objCopy.family.push("Lil");
// objCopy.family.push("Nas");

// console.log(obj);
// console.log(objCopy);
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	/*openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },q
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },*/
};

let [first, second] = restaurant.categories;
console.log(first, second);

[first, second] = restaurant.starterMenu;
console.log(first, second);
