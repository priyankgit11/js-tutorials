const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: 4.0,
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const player of Object.entries(game.scored)) {
	console.log(`Goal ${Number(player[0]) + 1}: ${player[1]}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

let sumOdd = 0;
let averageOdd = 0;
for (const odd of Object.values(game.odds)) {
	sumOdd += odd;
}
averageOdd = sumOdd / Object.keys(game.odds).length;
console.log(`Average of Odds are ${averageOdd}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const odd of Object.keys(game.odds)) {
	let message = `Odd of ${
		game?.[odd] ? `victory ${game[odd]} : ` : `draw : `
	} ${game.odds[odd]}`;
	console.log(message);
}
game.scorers = {
	Gnarby: 1,
	Hummels: 1,
	Lewandowski: 2,
};
console.log(game.scorers);
