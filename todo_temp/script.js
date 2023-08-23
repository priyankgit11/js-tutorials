"use strict";
// Defining variables
const allTasks = [];
var barEvent = "add";
var taskType = "all";
var sortState = "";
var showArr = [];
var showSpecificArr = [];
// /////////////////////
allTasks.push(["asfd", false]);
allTasks.push(["asd", false]);
allTasks.push(["bsd", false]);
allTasks.push(["Fsd", true]);
// Selecting all buttons and divs
const searchbar = document.getElementById("searchbox");
const divTasks = document.querySelector(".tasks");
const divNoItems = document.querySelector(".no-items");
const addBtn = document.getElementById("add");
const searchBtn = document.getElementById("search");
const actionBtn = document.getElementById("actions");
const sortBtn = document.getElementById("sort");
const selectionBtn = document.getElementsByName("selection");

const selectionArray = Array.from(selectionBtn);
///////////////////////////////////////////////////// Event Listeners
// Add button
addBtn.addEventListener("click", () => {
	searchbar.focus();
	barEvent = "add";
	sortState = "";
});
// Search button
searchBtn.addEventListener("click", () => {
	searchbar.focus();
	barEvent = "search";
	sortState = "specific";
});

// sorting droplist
sortBtn.addEventListener("change", () => {
	showHelper();
});
// searchbar
searchbar.addEventListener("keyup", (e) => {
	if (barEvent === "add") {
		if (e.key === "Enter") {
			const val = searchbar.value;
			allTasks.push([val, false]);
			showHelper();
			searchbar.value = "";
		}
	} else {
		sortState = "specific";
		showHelper();
	}
});
///////////////////////////////////////////////// Functions
// Sort the array according to user selection
const setOrder = function (arr) {
	const selectedOrder = sortBtn.value;
	const [otype, order] = selectedOrder.split("_");
	console.log(otype, order);
	if (otype !== "sort") {
		if (otype === "time") {
			if (order === "dsc") arr.reverse();
			console.log(arr);
		} else {
			if (order === "asc") {
				arr.sort((a, b) => {
					return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
				});
			} else {
				arr.sort((a, b) => {
					return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
				});
				arr.reverse();
			}
		}
	}
};

// show list of tasks
const show = function (filteredArr = allTasks) {
	showArr = filteredArr;
	// console.log(showArr);
	// Ordering array
	setOrder(showArr);
	if (showArr.length === 0) {
		divNoItems.style.display = "flex";
		return;
	} else {
		divNoItems.style.display = "none";
	}
	// Clearing tasks div
	clearTaskDiv();
	// Showing tasks
	showArr.forEach((ele, i) => {
		const html = `<div class="task-item">
        <div class="task-check">
        <input
        type="checkbox"
        class="task-names"
        name="${ele[0]}"
        id="name${i}" 
		${ele[1] === true ? "checked" : ""}
        />
        ${ele[0]}
        </div>
        <div class="task-setting">
        <img
        src="images/edit-icon.png"
        alt=""
        class="icon edit"
        id="edit${i}" 
        name="${ele[0]}"
        />
        <img
        src="images/delete-icon.png"
        alt=""
        class="icon delete"
        id="delete${i}"
        name="${ele[0]}"
        />
        </div>
        </div>
        <hr />`;
		divTasks.insertAdjacentHTML("beforeend", html);
	});
	// addTaskEvents();
};
// Clear tasks div
const clearTaskDiv = function () {
	divTasks.textContent = "";
};
const showSpecific = function (arr) {
	showSpecificArr = arr;
	if (showSpecificArr.length === 0) {
		clearTaskDiv();
		divNoItems.style.display = "flex";
		return;
	} else {
		divNoItems.style.display = "none";
	}
	setOrder(showSpecificArr);
	clearTaskDiv();
	showSpecificArr.forEach((ele, i) => {
		const html = `<div class="task-item">
        <div class="task-check">
        <input
        type="checkbox"
        class="task-names"
        name="${ele[0]}"
        id="name${i}" 
		${ele[1] === true ? "checked" : ""}
        />
        ${ele[0]}
        </div>
        <div class="task-setting">
        <img
        src="images/edit-icon.png"
        alt=""
        class="icon edit"
        name="${ele[0]}"
        id="edit${i}" 
        />
        <img
        src="images/delete-icon.png"
        alt=""
        class="icon delete"
        name="${ele[0]}"
        id="delete${i}"
        />
        </div>
        </div>
        <hr />`;
		divTasks.insertAdjacentHTML("beforeend", html);
	});
	// addTaskEvents();
};

// Separate search function to handle sorting
const search = function () {
	let val = "";
	val = searchbar.value;
	console.log(showArr);
	const tempArr = showArr.filter((str) => {
		if (str[0].toLowerCase().includes(val.toLowerCase())) {
			return str;
		}
	});
	console.log(tempArr);
	showSpecific(tempArr);
	// filteredStrings = filterstrings.filter((str) => str.toLowerCase().includes(passedinstring.toLowerCase()));
};

// Show helper function

// To add events to icons and checkboxes to showed tasks
const addTaskEvents = function () {
	////////////////////// checkboxes event listener
	const checkboxes = Array.from(document.querySelectorAll(".task-names"));
	checkboxes.map((box) => {
		box.addEventListener("change", () => {
			let tasks = allTasks;
			const specificTask = tasks.find((task) => {
				if (box.name === task[0]) return task;
			});
			if (box.checked === true) {
				specificTask[1] = true;
			} else {
				specificTask[1] = false;
			}
			console.log(box.checked);
		});
	});

	//////////////////// edit event listener

	//////////////////// delete event listener
	const allDeleteBtn = Array.from(document.querySelectorAll(".delete"));
	// console.log(allDeleteBtn);
	allDeleteBtn.map((del) => {
		del.addEventListener("click", () => {
			let tasks = allTasks;
			const i = tasks.findIndex((task) => {
				console.log(task[0]);
				console.log(del.name);
				if (del.name === task[0]) return task;
			});
			console.log(i);
			tasks.splice(i, 1);
			showHelper();
			console.log(allTasks, "alltasks");
		});
	});
};
const showHelper = function (arr) {
	sortState === "specific" ? search() : show();
	console.log("Hello");
	addTaskEvents();
	console.log("World");
};
// const tasks = [...allTasks].map((ele) => ele[0]);
// console.log(tasks);
// console.log(allTasks);
// console.log([...allTasks][0]);
// Init function
// const init = function () {};
// console.log(allCheckbox.value);
showHelper();
// const z = Array.from(allCheckbox);
// console.log(z[0]);
// Array.from(z, (ele) => {
// 	console.log(ele.checked);
// });
