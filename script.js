const openBtn = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", function () {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
