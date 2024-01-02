const signing = document.querySelector(".signing");
const signModal = document.querySelector(".sign__modal");
const closeBtnModal = document.querySelector(".close__modal");

signing.addEventListener("click", (e) => {
  e.preventDefault();
  signModal.classList.add("openSignModal");
});

closeBtnModal.addEventListener("mouseup", (e) => {
  e.preventDefault();
  signModal.classList.remove("openSignModal");
});
