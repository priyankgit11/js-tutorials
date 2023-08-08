"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
// To Close the Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// To Open the Modal by removing hidden class
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
console.log(btnOpenModal);
// Adding click event on every show
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    openModal();
  });
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keyup", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) closeModal();
});
