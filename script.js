"use strict";
const ages = [5, 2, 4, 1, 15, 8, 3];
console.log(ages);
const calcAverageHumanAge = (dogAges) => {
	const avgHumanAge = dogAges
		//1.
		.map((age) => {
			return age <= 2 ? 2 * age : 16 + age * 4;
		})
		//2.
		.filter((hAge) => {
			console.log(hAge);
			return hAge >= 18;
		})
		//3.
		.reduce((acc, age, i, arr) => {
			console.log(arr);
			console.log(`Iteration ${i}: ${acc}`);
			return acc + age / arr.length;
		});

	return avgHumanAge;
};
console.log(calcAverageHumanAge(ages));
