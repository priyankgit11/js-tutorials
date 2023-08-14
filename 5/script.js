"use strict";
// const mainMenu = ["Pizza", "gathiya", "Noodles"];
// let [x, , y] = mainMenu;
// let temp = x;
// x = y;
// y = temp;
// console.log(x, y);
// console.log(mainMenu);

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [x, , [, y]] = nested;
// console.log(x, y);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Object destructuring
// const restaurant = {
// 	fname: "Priyank",
// 	lname: "Dave",
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "caprese salad"],
// 	mainMenu: ["Pizza", "pasta", "risotto"],
// 	categories: ["Italian", "Pizzeria", "Vegetarianl", "Organic"],
// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery: function ({
// 		starterIndex = 1,
// 		mainIndex = 0,
// 		time = "20:00",
// 		address,
// 	}) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// };
// const { fname, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Naming object properties
// const { fname: restaurantOwner, openingHours, categories: tags } = restaurant;
// console.log(restaurantOwner, hours, tags);

// Default Values
// const { mainMenu = [], starterMenu: starters = [] } = restaurant;
// console.log(mainMenu, starters);

// Mutating variables in objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const {
// 	sat: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
// 	// time: "22:30",
// 	address: "Via del Sole,21",
// 	// mainIndex: 2,
// 	starterIndex: 2,
// });

// Spread Operator
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// const str = "Priyank";
// const letters = [...str, " ", "D."];
// console.log(letters);
// console.log("Let's make pasta!");

// const ingredients = [
// 	prompt("Let's make pasta! Ingredient 1?"),
// 	prompt("Ingredient 2?"),
// 	prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// SPREAD, BECAUASE ON right SIDE OF =
// const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// Nullish: null and undefined (NOT 0 or '')
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
// 	name: "Capri",
// 	numGuests: 20,
// };
// const rest2 = {
// 	name: "La Piazza",
// 	owner: "Giovanni Rossi",
// };
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//short-circuiting and AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

// For of loop
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// for (let item of menu) console.log(item);

//ES6 Enhanced Object literal
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[`day-${2 + 4}`]: {
		open: 0,
		close: 24,
	},
};
// console.log(openingHours);
const restaurant = {
	fname: "Priyank",
	lname: "Dave",
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "caprese salad"],
	mainMenu: ["Pizza", "pasta", "risotto"],
	categories: ["Italian", "Pizzeria", "Vegetarianl", "Organic"],
	openingHours,
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = "20:00",
		address,
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
};

// We can just name it inside restaurant object and it can take it from outside that object without redefining it again in restaurant object
// console.log(restaurant.openingHours);

//Optional Chaining
// console.log(restaurant.openingHours.mon.open); //Will give error
// WITHOUT optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open); //Will give undefined
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
// 	// console.log(day);
// 	const open = restaurant.openingHours[day]?.open ?? "closed";
// 	console.log(`On ${day}, we open at ${open}`);
// }

// const cheeze = {
// 	spread: [],
// };
// if (cheeze?.spread) console.log("Hello");

//Object keys, values, and entries
// const properties = Object.keys(openingHours);
// const values = Object.values(openingHours);
// const entries = Object.entries(openingHours);
// console.log(properties);
// console.log(values);
// console.log(entries);
// for (const day of Object.keys(openingHours)) {
// 	console.log(day);
// }

// Sets
// const ordersSet = new Set([
// 	"Pasta",
// 	"Pasta",
// 	"Pasta",
// 	"Rissotto",
// 	"Pasta",
// 	"Pizza",
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has("pasta"));
// console.log(new Set("Jonas"));
// ordersSet.add("Garlic bread");
// ordersSet.add("Garlic bread");
// console.log(ordersSet);
// ordersSet.delete("Rissotto");
// console.log(ordersSet);
// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) {
// 	console.log(order);
// }
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Maps
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest);
// console.log(rest.set(2, "Lisbon,Portugal"));

// rest
// 	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
// 	.set("open", 11)
// 	.set(true, "We are open :D")
// 	.set(false, "We are closed :(");
// console.log(rest.get(true));

// console.log(rest);
// console.log(rest.get(2));
// rest.delete(2);
// console.log(rest);
// rest.delete("name");
// console.log(rest.size);
// // rest.clear();

// //Generating error
// rest.set([1, 2], "Test");
// console.log(rest.get([1, 2])); //undefined
// //Instead
// const arr = [1, 2];
// const brr = [2, 4];
// rest.set(arr, "Test");
// rest.set(brr, "Taste");
// console.log(rest.get(arr));
// console.log(rest.get(brr));
// console.log(rest);
// for (const key of rest.keys()) {
// 	console.log(key);
// }
// rest.set(true, "We're all gonna die!");
// console.log(rest);

// const question = new Map([
// 	["question", "What is the best programming language in the world?"],
// 	[1, "C"],
// 	[2, "Java"],
// 	[3, "Javascript"],
// 	["correct", 3],
// 	[true, "Correct!! :)"],
// 	[false, "Try Again :("],
// ]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
// 	if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }
// const answer = Number(prompt("Your answer"));
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));
// console.log([...question]);

// Strings P-1

// const airline = "TAP Air Portugal";
// const plane = "A320";
// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);
// console.log(arr.indexOf(2));
// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.lastIndexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
// 	const s = seat.slice(-1);
// 	if (s === "B" || s === "E") console.log("You got the middle seat!");
// 	else console.log("You got lucky!!");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("Priyank"));
// console.log(typeof new String("Priyank"));
// console.log(typeof new String("Priyank").slice(1));

// Strings P-2
// const airline = "TAP Air Portugal";
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = "pRiyANK";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
// 	passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = "hello@priyank.com";
// const loginEmail = " Hello@Priyank.com \n";

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = "288,97#";
// const priceUS = priceGB.replace("#", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
// 	"All passengers come to boarding door 23. Boarding door 23!";
// // console.log(announcement.replace("door", "gate"));
// console.log(announcement.replace(/door/g || /Door/g, "gate"));

// //Booleans
// const plane = "Airbus A320neo";
// console.log(plane);
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.includes("Airb"));
// if (plane.startsWith("Airbus") && plane.endsWith("neo"))
// 	console.log("Part of the NEW Airbus family");

// const checkBaggage = function (items) {
// 	const baggage = items.toLowerCase();
// 	if (baggage.includes("knife") || baggage.includes("gun"))
// 		console.log("You are NOT allowed on board");
// 	else console.log("Welcome aboard!");
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// String P-3
// Split
console.log("a+very+nice+string".split("+"));
console.log("priyank dave".split(" "));
const [firstName, lastName] = "Priyank Dave".split(" ");
//Join
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const capitalizeName = function (name) {
	const names = name.split(" ");
	const namesUpper = [];
	for (const n of names) {
		// namesUpper.push(n[0].toUpperCase() + n.slice(1));
		namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
	}
	console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("priyank dave");
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Priyank".padStart(20, "+").padEnd(30, "+"));
console.log("P".padStart(20, "+").padEnd(30, "+"));
console.log(message.padEnd(20, "+").padStart(30, "+"));
console.log("Priyank".padEnd(20, "+").padStart(30, "+"));
console.log("P".padEnd(20, "+").padStart(30, "+"));

const maskCreditCard = function (number) {
	const str = number + "";
	const last = str.slice(-4);
	return last.padStart(str.length, "*");
};
console.log(maskCreditCard(191919100392019));

// Repeat
const message2 = "Bad weather.. All Depatures Delayed...";
console.log(message2.repeat(5));
