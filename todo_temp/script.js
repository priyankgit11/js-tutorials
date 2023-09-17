"use strict";
// Defining variables
const allTasks = [];
var barEvent = "add";
var taskType = "all";
var sortState = "";
var whichElements = "all";
var showArr = [];
var showSpecificArr = [];
// /////////////////////
allTasks.push(["asfd", false, Date.now()]);
allTasks.push(["asd", false, Date.now() + 1]);
allTasks.push(["bsd", false, Date.now() + 2]);
allTasks.push(["Fsd", true, Date.now() + 3]);
// Selecting all buttons and divs
const searchbar = document.getElementById("searchbox");
const divTasks = document.querySelector(".tasks");
const divNoItems = document.querySelector(".no-items");
const addBtn = document.getElementById("add");
const searchBtn = document.getElementById("search");
const actionBtn = document.getElementById("actions");
const sortBtn = document.getElementById("sort");
const selectionBtn = document.getElementsByName("selection");

/////////////////////////////////////////////////// Event Listeners
// Custom check Event
// const event = new Event("click");
// box.addEventListener("check", () => {
// 	let tasks = allTasks;
// 	const specificTask = tasks.find((task) => {
// 		if (box.name === task[0]) return task;
// 	});
// 	box.checked === true ? (specificTask[1] = true) : (specificTask[1] = false);
// 	console.log(box.checked);
// });

// Add button
addBtn.addEventListener("click", () => {
	searchbar.placeholder = "Add";
	searchbar.focus();
	barEvent = "add";
	sortState = "";
	showHelper();
});
// Search button
searchBtn.addEventListener("click", () => {
	searchbar.placeholder = "Search";
	searchbar.focus();
	barEvent = "search";
	sortState = "specific";
	showHelper();
});

// sorting droplist
sortBtn.addEventListener("change", () => {
	showHelper();
});
// searchbar
searchbar.addEventListener("keyup", (e) => {
	if (barEvent === "add") {
		console.log(barEvent);
		if (e.key === "Enter") {
			const val = searchbar.value;
			if (regexTest(val) && isDuplicate(val)) {
				allTasks.push([val, false, Date.now()]);
				showHelper();
				searchbar.value = "";
			}
		}
	} else {
		sortState = "specific";
		showHelper();
	}
	showHelper();
});
// selection buttons
const selection = Array.from(selectionBtn);
selection.map((sel) => {
	sel.addEventListener("click", () => {
		whichElements = sel.id;
		showHelper();
	});
});

// Action buttons
actionBtn.addEventListener("change", () => {
	const val = actionBtn.value;
	const allCheckbox = Array.from(document.querySelectorAll(".task-names"));
	allCheckbox.map((box) => {
		if (val === "select_all") {
			box.checked = true;
			changeCompletion.call(box);
		} else if (val === "unselect_all") {
			box.checked = false;
			changeCompletion.call(box);
		} else if (val === "delete_all" && box.checked === true) {
			deleteElement(box.name);
		}
	});
	showHelper();
});

///////////////////////////////////////////////// Functions
// Sort the array according to user selection
const setOrder = function (arr) {
	const selectedOrder = sortBtn.value;
	const [otype, order] = selectedOrder.split("_");
	console.log(otype, order);
	if (otype !== "sort") {
		if (otype === "time") {
			if (order === "asc") {
				arr.sort((a, b) => {
					if (a[2] < b[2]) return 1;
					else return -1;
				});
			} else {
				arr.sort((a, b) => {
					if (a[2] < b[2]) return 1;
					else return -1;
				});
				arr.reverse();
			}
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
// Function to generate task HTML
function generateTaskHTML(task, i) {
	return `<div class="task-item">
    <div class="task-check">
      <div class="task-text">
        <input
          type="checkbox"
          class="task-names"
          name="${task[0]}"
          id="name${i}" 
          ${task[1] === true ? "checked" : ""}
        />
        ${task[0]}
      </div>
      <input type="text" class="edit-task" name="${
		task[0]
	}" id="edit-text${i}" />
    </div>
    <div class="task-setting">
      <img
        src="images/edit-icon.png"
        alt=""
        class="icon edit"
        id="edit${i}" 
        name="${task[0]}"
      />
      <img
        src="images/delete-icon.png"
        alt=""
        class="icon delete"
        id="delete${i}"
        name="${task[0]}"
      />
    </div>
  </div>
  <hr />`;
}
// Toggle No Tasks div
// show list of tasks
const show = function () {
	// Determine elements to show
	showArr = getWhichElements(allTasks);
	// console.log(showArr);
	// Ordering array
	setOrder(showArr);
	if (showArr.length === 0) {
		divNoItems.style.display = "flex";
		divTasks.style.display = "none";
		return;
	} else {
		divNoItems.style.display = "none";
		divTasks.style.display = "flex";
	}
	// Clearing tasks div
	clearTaskDiv();

	// Showing tasks
	showArr.forEach((ele, i) => {
		const html = generateTaskHTML(ele, i);
		divTasks.insertAdjacentHTML("beforeend", html);
	});
	// addTaskEvents();
};
// Clear tasks div
const clearTaskDiv = function () {
	divTasks.textContent = "";
	const showSpecific = function (arr) {
		showSpecificArr = getWhichElements(arr);
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
			const html = generateTaskHTML(ele, i);
			divTasks.insertAdjacentHTML("beforeend", html);
		});
		// addTaskEvents();
	};
};
const showSpecific = function (arr) {
	showSpecificArr = getWhichElements(arr);
	if (showSpecificArr.length === 0) {
		clearTaskDiv();
		divNoItems.style.display = "flex";
		return;
	} else {
		divNoItems.style.display = "none";
	}
	setOrder(showSpecificArr);
	clearTaskDiv();
	showSpecificArr.forEach((task, i) => {
		const html = generateTaskHTML(task, i);
		divTasks.insertAdjacentHTML("beforeend", html);
	});
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

// To add events to icons and checkboxes to showed tasks
const addTaskEvents = function () {
	////////////////////// checkboxes event listener
	const checkboxes = Array.from(document.querySelectorAll(".task-names"));
	checkboxes.map((box) => {
		box.addEventListener("change", changeCompletion);
	});

	////////////////////// edit event listener
	const allEditBtn = Array.from(document.querySelectorAll(".edit"));
	allEditBtn.map((ed) => {
		ed.addEventListener("click", () => {
			console.log(ed, "ed");
			const textParent = ed.parentNode.previousElementSibling;
			const textBox = textParent.querySelector(".edit-task");
			const checkboxContent = textParent.querySelector(".task-text");
			checkboxContent.style.display = "none";
			textBox.style.display = "block";
			console.log(checkboxContent, "checkbox");
			console.log(textBox, "textBox");
			console.log(textBox.style.display);
			console.log(checkboxContent.style.display);
			textBox.focus();
			textBox.value = textBox.name;
			textBox.addEventListener("keyup", (e) => {
				if (e.key === "Enter") {
					const task = allTasks.find((ele) => {
						return ele[0] === textBox.name;
					});
					if (regexTest(textBox.value) && isDuplicate(textBox.value)) {
						task[0] = textBox.value;
						textBox.style.display = "none";
						checkboxContent.style.display = "block";
						showHelper();
					}
				}
			});
			console.log(textBox.style.display);
			console.log(checkboxContent.style.display);
		});
	});
	////////////////////// delete event listener
	const allDeleteBtn = Array.from(document.querySelectorAll(".delete"));
	// console.log(allDeleteBtn);
	allDeleteBtn.map((del) => {
		del.addEventListener("click", () => {
			deleteElement(del.name);
			showHelper();
			console.log(allTasks, "alltasks");
		});
	});
};
// Delete function
const deleteElement = function (name) {
	let tasks = allTasks;
	const i = tasks.findIndex((task) => {
		console.log(task[0]);
		console.log(name);
		if (name === task[0]) return task;
	});
	console.log(i);
	tasks.splice(i, 1);
};

// filter elements to show
const getWhichElements = function (arr) {
	console.log(whichElements);
	let retArr = arr;
	if (whichElements === "active") {
		retArr = arr.filter((ele) => {
			return ele[1] === false;
		});
	} else if (whichElements === "completed") {
		retArr = arr.filter((ele) => {
			return ele[1] === true;
		});
	}
	return retArr;
};
// Check Duplicates
const isDuplicate = function (task) {
	let tasks = [...allTasks];
	console.log(tasks);
	const res = tasks.some((ele) => {
		console.log(ele[0]);
		return ele[0] === task;
	});
	return !res;
};

// Helper function for show/display
const showHelper = function (arr) {
	sortState === "specific" ? search() : show();
	console.log("Hello");
	addTaskEvents();
	console.log("World");
};
// Change completed value of task
const changeCompletion = function () {
	let tasks = allTasks;
	const specificTask = tasks.find((task) => {
		if (this.name === task[0]) return task;
	});
	this.checked === true ? (specificTask[1] = true) : (specificTask[1] = false);
	console.log(this.checked);
	showHelper();
};
// Regex text
const regexTest = function (str) {
	var specials = /[A-Za-z_0-9]/g;
	return specials.test(str);
};
console.log(regexTest(""));
// const tasks = [...allTasks].map((ele) => ele[0]);
// console.log(tasks);
// console.log(allTasks);
// console.log([...allTasks][0]);
// Init function
// const init = function () {};
// console.log(allCheckbox.value);
showHelper();
console.log(isDuplicate("bsd"));
// const z = Array.from(allCheckbox);
// console.log(z[0]);
// Array.from(z, (ele) => {
// 	console.log(ele.checked);
// });
