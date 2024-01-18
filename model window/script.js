"use strick";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal); // no need to call this openmodal function.....because whenever the click is happen js automatically call the openModal function.
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
