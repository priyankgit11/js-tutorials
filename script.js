"use strict";

// NOTIFICATION CODE
// request permission on page load
// document.addEventListener("DOMContentLoaded", function () {
// 	if (!Notification) {
// 		alert("Desktop notifications not available in your browser. Try Chromium.");
// 		return;
// 	}

// 	if (Notification.permission !== "granted") Notification.requestPermission();
// });

// function notifyMe() {
// 	if (Notification.permission !== "granted") Notification.requestPermission();
// 	else {
// 		const notif = function () {
// 			var notification = new Notification("Notification title", {
// 				icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
// 				body: "Hey there! You've been notified!",
// 				timestamp: Date.now() + 4000,
// 			});
// 			notification.onclick = function () {
// 				window.open("http://stackoverflow.com/a/13328397/1269037");
// 			};
// 		};
// 		setTimeout(notif, 10000);
// 	}
// }

// const n = "foo3bar5".match(/\d/g).join("");

// let arr = [1, 2, 4, 3];
// let arr = ["a", "Fd", "1a"];
// arr.sort((a, b) => {
// 	return a.toLowerCase().localeCompare(b.toLowerCase());
// });
// console.log(arr);

// setTimeout(() => {
// 	console.log("Hello");
// }, 4000);
// console.log("World");
