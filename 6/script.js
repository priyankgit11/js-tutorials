"use strict";
// const arr = [1, 2, 3];
// console.log(arr);
// function fun(arr) {
// 	arr.push(21);
// 	console.log(arr);
// }
// fun(arr);
// console.log(arr);

// // Higher Order function
// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(" ");
// 	return [first.toUpperCase(), ...others].join(" ");
// };
// const transformer = function (str, fn) {
// 	console.log(`Original string : ${str}`);
// 	console.log(`Transformed string : ${fn(str)}`);
// 	console.log(`Transformed by : ${fn.name}`);
// };
// transformer("Javascript is the best language", upperFirstWord);

// Closure function intro
// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };
// Using arrow function
// const greet = (greeting) => (fname) => console.log(`${greeting} ${fname}`);
// const greeterHey = greet("Hey");
// greeterHey("Priyank");
// greeterHey("Dave");

// greet("Hello")("Priyank");

//CALL AND APPLY
// const lufthansa = {
// 	airline: "Lufthansa",
// 	iataCode: "LH",
// 	bookings: [],
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 		);
// 		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// 	},
// };

// lufthansa.book(112, "Priyank Dave");
// console.log(lufthansa);

// const eurowings = {
// 	airline: "Eurowings",
// 	iataCode: "EW",
// 	bookings: [],
// };

// const book = lufthansa.book;
// // Can't work coz its regular function now
// // book(190, "RyanAir");

// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// const swiss = {
// 	airline: "Swiss Air Lines",
// 	iataCode: "LX",
// 	bookings: [],
// };
// book.call(swiss, 200, "Henry Cavill");
// const flightData = [201, "Henry Cavill"];
// book.apply(swiss, flightData);
// book.call(swiss, ...flightData);

// // BIND method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, "Steven Williams");
// const bookEW23 = bookEW.bind(eurowings, 23);
// bookEW23("Priyank dave");

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
// 	console.log(this);

// 	this.planes++;
// 	console.log(this.planes);
// };
// // lufthansa.buyPlane();
// document
// 	.querySelector(".buy")
// 	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVat = addTax.bind(null, 0.23); //IMPORTANT POINT - GIVE NULL IF YOU WANT TO SET IT LATER ON YOUR OWN
// console.log(addVat(100));

// const addTaxRate = function (rate) {
// 	return function (value) {
// 		return value + value * rate;
// 	};
// };
// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(23));

// Immediately invoked fucntion expression
(function () {
	console.log("this will never run again");
})();
(() => console.log("this will also never run again"))();
// Not used much now because it just gives advantage in scope which can be taken by various ways

// Closures
const secureBooking = function () {
	let passengerCount = 0;
	return function () {
		passengerCount++;
		console.log(`${passengerCount} passengers`);
	};
};
const booker = secureBooking();
booker();
booker();
booker();

// More closures examples
let f;
const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

const h = function () {
	const b = 777;
	f = function () {
		console.log(b * 2);
	};
};

g();
f();
h();
f();

const boardPassengers = function (n, wait) {
	const perGroup = n / 3;
	setTimeout(function () {
		console.log(`We are now boarding all ${n}`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait * 1000);
};
const perGroup = 1000;
boardPassengers(180, 3); // takeover over global variable
