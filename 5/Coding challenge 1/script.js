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
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};
const [players1, players2] = game.players;
// console.log(players1, players2);

const gk1 = players1[0];
const gk2 = players2[0];
const [, ...fieldPlayers1] = players1;
const [, ...fieldPlayers2] = players2;
console.log(fieldPlayers1);
console.log(fieldPlayers2);
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const { team1: team1, x: draw, team2: team2 } = game.odds;

function printGoals(...restParameters) {
	console.log(restParameters);
	console.log(typeof restParameters);
	console.log(restParameters[0].length);
	console.log(`${restParameters.length} goals were scored`);
}

printGoals(["Davies", "Muller", "Lewandowski", "Kimmich"]);

function fun(x, y) {
	console.log(x, y);
	console.log(Array.isArray(arguments));
	console.log(typeof arguments);
}
fun(1, 2);
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
