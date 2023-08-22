"use strict";
// Defining variables
const tasks = {
	allTasks: [],
	activeTasks: [],
	completedTasks: [],
};
var barEvent = "add";
var taskType = "all";
var showArr = [];
// Selecting all buttons and divs
const searchbar = document.getElementById("searchbox");
const allEditBtn = document.querySelectorAll(".edit");
const allDeleteBtn = document.querySelectorAll(".delete");
const allCheckbox = document.querySelectorAll(".task-names");
const divTasks = document.querySelector(".tasks");
const divnoItems = document.querySelector(".no-items");
const addBtn = document.getElementById("add");
const searchBtn = document.getElementById("search");
const actionBtn = document.getElementById("actions");
const sortBtn = document.getElementById("sort");
const selectionBtn = document.getElementsByName("selection");

const selectionArray = Array.from(selectionBtn);
console.log(Array.from(sortBtn));
///////////////////////////////////////////////////// Event Listeners
// Add button
addBtn.addEventListener("click", () => {
	searchbar.focus();
	barEvent = "add";
});
// Search button
searchBtn.addEventListener("click", () => {
	searchbar.focus();
	barEvent = "search";
});
// checkbox
Array.from(allCheckbox, () => {
	addEventListener("click", () => {});
});
// searchbar
searchbar.addEventListener("keyup", (e) => {
	if (barEvent === "add") {
		if (e.key === "Enter") {
			const val = searchbar.value;
			tasks.allTasks.push(val);
			show();
			searchbar.value = "";
		}
	} else {
		let val = "";
		val = searchbar.value;
		const tempArr = showArr.filter((str) => {
			if (str.toLowerCase().includes(val.toLowerCase())) {
				return str;
			}
		});
		console.log(tempArr);
		showSpecific(tempArr);
		// filteredStrings = filterstrings.filter((str) => str.toLowerCase().includes(passedinstring.toLowerCase()));
	}
});

///////////////////////////////////////////////// Functions
// returns array name you need
const setArrName = function (aname = taskType) {
	return aname + "Tasks";
};

// Sort the array according to user selection
const setOrder = function (arr) {
	const selectedOrder = Array.from(sortBtn).find((ele) => {
		if (ele.selected == true) return ele;
	}).value;
	const [otype, order] = selectedOrder.split("_");
	console.log(otype, order);
	if (otype !== "sort") {
		if (otype === "time") {
			if (order === "dsc") arr.reverse();
			console.log(arr);
		} else {
			if (order === "asc") {
				arr.sort((a, b) => {
					return a.toLowerCase().localeCompare(b.toLowerCase());
				});
			} else {
				arr.sort((a, b) => {
					return a.toLowerCase().localeCompare(b.toLowerCase());
				});
				arr.reverse();
			}
		}
	}
	return arr;
};

// show list of tasks
const show = function (filteredArr = undefined) {
	// If array not defined
	if (filteredArr === undefined) {
		const arrName = setArrName();
		showArr = [...tasks[arrName]];
		console.log(showArr);
	} else showArr = [...filteredArr];
	// Ordering array
	showArr = setOrder(showArr);
	if (showArr.length === 0) {
		divnoItems.style.display = "flex";
		return;
	} else {
		divnoItems.style.display = "none";
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
        name="task-names"
        id="name${i}"
        />
        ${ele}
        </div>
        <div class="task-setting">
        <img
							src="images/edit-icon.png"
							alt=""
							class="icon edit"
							id="edit${i}"
						/>
						<img
                        src="images/delete-icon.png"
                        alt=""
                        class="icon delete"
                        id="delete${i}"
						/>
					</div>
                    </div>
				<hr />`;
		divTasks.insertAdjacentHTML("beforeend", html);
	});
};
// Clear tasks div
const clearTaskDiv = function () {
	divTasks.textContent = "";
};
const showSpecific = function (specificArr) {
	if (specificArr.length === 0) {
		clearTaskDiv();
		divnoItems.style.display = "flex";
		return;
	} else {
		divnoItems.style.display = "none";
	}
	specificArr = setOrder(specificArr);
	clearTaskDiv();
	specificArr.forEach((ele, i) => {
		const html = `<div class="task-item">
        <div class="task-check">
        <input
        type="checkbox"
        class="task-names"
        name="task-names"
        id="name${i}"
        />
        ${ele}
        </div>
        <div class="task-setting">
        <img
        src="images/edit-icon.png"
        alt=""
        class="icon edit"
        id="edit${i}"
        />
        <img
        src="images/delete-icon.png"
        alt=""
        class="icon delete"
        id="delete${i}"
        />
        </div>
        </div>
        <hr />`;
		divTasks.insertAdjacentHTML("beforeend", html);
	});
};
// tasks.allTasks.push(["asfd", false]);
// tasks.allTasks.push(["asd", false]);
// tasks.allTasks.push(["bsd", false]);
// tasks.allTasks.push(["Fsd",false]);
show();
// Init function
// const init = function () {};
