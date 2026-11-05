const openBtn = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-modal");

// Make sure the modal starts hidden when the page loads
modal.classList.remove("show");

openBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  modal.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});

// Close when clicking anywhere outside the modal content
document.addEventListener("click", function (event) {
  if (
    modal.classList.contains("show") &&
    !modalContent.contains(event.target)
  ) {
    modal.classList.remove("show");
  }
});