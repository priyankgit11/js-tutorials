function calcTime(num) {
	let start = performance.now();
	factorial(num);
	let end = performance.now();
	console.log(end - start);
	return;
	// 0.2 milliseconds without recursion
}
function factorial(num) {
	// Conversion
	factorialOut = document.querySelector(".factorial");
	num = num.value;
	//If no number
	if (!num) {
		let message = "Enter a number!";
		factorialOut.textContent = message;
		return;
	}

	num = parseInt(Math.round(num));
	console.log(num);
	if (num < 0 || num > 125) {
		factorialOut.textContent = "Enter number between 0 and 125";
		return;
	}
	factorialOut.textContent = "";
	//If number is given
	// changing value of num to Number data type

	let message = "";
	var factorial = 1;
	// while (num > 0) {
	// 	flag = false;
	// 	//When num > 1  'num *' is to be printed else 'num = '
	// 	if (num > 1) {
	// 		message += `${num} * `;
	// 		factorial *= num;
	// 	} else message += `${num} = `;
	// 	num--;
	// }
	let output = calcFact(num, message);
	factorial = output[0];
	message = output[1];
	num = num == 0 ? 0 : 1;
	message += `${num} = `;
	//adding factorial at the end of message string
	factorial = BigInt(factorial);
	message += `${factorial}`;
	// printing message in div
	factorialOut.textContent += message;
	return;
}
function calcFact(num, message) {
	// base condition
	if (num <= 1) return [1, ""];
	// recursion call
	let smallOutput = calcFact(num - 1, message);
	//process
	let fact = smallOutput[0];
	message = smallOutput[1];
	message = `${num} * ` + message;
	fact *= num;
	return [fact, message];
}
