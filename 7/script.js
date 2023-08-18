"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

///////////////.////////////////////////////////////////// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// // SLICE(does not mutate)
// console.log(arr);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // (index, index)
// console.log(arr.slice(-2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE(mutates original array)
// // console.log(arr.splice(2));
// // console.log(arr.splice(-1));
// arr.splice(2, 1); //(index, no. of elements to remove)
// console.log(arr);

// // REVERSE(mutates original array)
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT (does not mutate)
// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN
// console.log(letters.join('-'));

// AT (does not mutate)
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// FOREACH arrays loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`Movement ${i} You deposited ${movement}`);
//   else console.log(`Movement ${i} You withdrew ${Math.abs(movement)}`);
// }
// IMPORTANT!!! YOU CAN'T USE BREAK AND CONTINUE IN FOREACH LOOP
// movements.forEach(function (movement, index, arr) {
//   if (movement > 0) console.log(`Movement ${index} You deposited ${movement}`);
//   else console.log(`Movement ${index} You withdrew ${Math.abs(movement)}`);
//   console.log(arr);
// });

// FOREACH maps and sets loop
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (key, value, map) {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// });
//CONVENTION WAS TO KEEP THE SAME NUMBER OF PARAMETERS FOR EVERY DS SO KEY AND VALUE ARE SAME HERE

const displayMovements = function (movements) {
	containerMovements.innerHTML = "";
	movements.forEach(function (mov, i) {
		const type = mov > 0 ? "deposit" : "withdrawal";
		const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};
displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
	labelBalance.textContent = `${acc.balance} EUR`;
};
calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes}€`;

	const out = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out)}€`;

	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
calcDisplaySummary(account1);

const user = "Steven Thomas Williams";
const createUsernames = function (acc) {
	acc.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};
createUsernames(accounts);

// EVENT LISTENERS
let currentAccount;

btnLogin.addEventListener("click", function (e) {
	// Prevent form from submitting
	e.preventDefault();
	currentAccount = accounts.find(
		(acc) =>
			acc.username === inputLoginUsername.value &&
			acc.pin === Number(inputLoginPin.value)
	);
	console.log(currentAccount);
	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// Display UI and message
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;
		containerApp.style.display = "grid";
		containerApp.style.opacity = 1;
		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();
		// UPDATE UI
		updateUI(currentAccount);
	}
});
const updateUI = function (acc) {
	// Display movements
	displayMovements(acc.movements);
	// Display balance
	calcDisplayBalance(acc);
	// Display summary
	calcDisplaySummary(acc);
};
btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		(acc) => acc.username === inputTransferTo.value
	);
	inputTransferAmount.value = inputTransferTo.value = "";

	console.log(amount, receiverAcc);
	if (
		amount >= 0 &&
		receiverAcc &&
		receiverAcc?.username !== currentAccount.username &&
		currentAccount.balance >= amount
	) {
		console.log("Transfir Valid");
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);
		updateUI(currentAccount);
	}
});

btnClose.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("Delete");
	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		console.log(currentAccount.username);
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);
		console.log(index);
		accounts.splice(index, 1);
		containerApp.style.opacity = 0;
	}
	inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = Number(inputLoanAmount.value);
	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		currentAccount.movements.push(amount);
		updateUI(currentAccount);
	}
	inputLoanAmount.value = "";
});

const eurToUsd = 1.1;
const movementsToUsd = movements.map(function (mov) {
	// return (mov * eurToUsd).toFixed(2);
	return mov * eurToUsd;
});
console.log(movements);
console.log(movementsToUsd);

// const movementsDescription = movements.map(function (mov, i) {
// 	if (mov > 0) return `Movement ${i + 1}: You deposited ${mov}`;
// 	else return `Movement ${i + 1}: You withdrew ${mov}`;
// });
const movementsDescription = movements.map(
	(mov, i) =>
		`Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
			mov
		)}`
);

console.log(movementsDescription);
const deposites = movements.filter(function (mov) {
	return mov > 0;
});
const withdrawals = movements.filter(function (mov) {
	return mov < 0;
});
console.log(deposites);
console.log(withdrawals);
console.log(movements.length);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) => {
	if (acc > mov) return acc;
	else return mov;
}, movements[0]);

console.log(max);

// Magic of chaining methods
const totalDepositsUSD = movements
	.filter((mov) => mov > 0)
	.map((mov) => mov * eurToUsd)
	.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// Find
// const firstWitdrawal = movements.find((mov) => mov < 0);
// console.log(firstWitdrawal);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// SOME
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some((mov) => mov >= 3000);
// console.log(anyDeposits);

// EVERY
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// FLAT
// const arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8],
// ];
// console.log(arr.flat());
// const arrDeep = [
// 	[1, 2, 3],
// 	[4, [5, 6]],
// 	[7, 8],
// ];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = accounts
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// FLATMAP
// const overBalance2 = accounts
// 	.flatMap((acc) => acc.movements)
// 	.reduce((acc, mov) => acc + mov, 0);
// console.log(overBalance2);

// Sort
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());
// console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); //Sorting according to strings thats why unexpected result

// movements.sort((a, b) => {
// 	if (a >= b) return 1;
// 	else return -1;
// });
// movements.sort((a, b) => a - b);
// console.log(movements);

// Creating arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
	console.log(document.querySelectorAll(".movements__value"));
	const movementsUI = Array.from(
		document.querySelectorAll(".movements__value"),
		(el) => Number(el.textContent.replace("€", ""))
	);
	console.log(movementsUI);
});

// Arrays Practice
const bankDepositSum = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov > 0)
	.reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);
// 3.
const { deposit, withdrawal } = accounts
	.flatMap((acc) => acc.movements)
	.reduce(
		(sums, cur) => {
			sums[cur > 0 ? "deposit" : "withdrawal"] += Math.abs(cur);
			return sums;
		},
		{ deposit: 0, withdrawal: 0 }
	);
console.log(deposit, withdrawal);

// 4.
const convertTitleCase = function (title) {
	const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);

	const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

	const titleCase = title
		.toLowerCase()
		.split(" ")
		.map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
		.join(" ");

	return capitzalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
