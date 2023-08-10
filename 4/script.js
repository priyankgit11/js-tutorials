// "use strict";
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

const obj = {
	fun: function () {
		console.log(this);
	},
	foo: () => {
		console.log(this);
	},
};
obj.fun();
obj.foo();
