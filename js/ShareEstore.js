const toggleShared = document.querySelectorAll(".sharedToggle");
const cardShared = document.querySelector(".share-card");
const closeBox = document.querySelectorAll(".closeModal");
const parentBox = cardShared.parentNode;

toggleShared.forEach((othertoggle) => {
  othertoggle.addEventListener("click", (event) => {
    event.stopPropagation();
    othertoggle.classList.add("active");
    cardShared.classList.add("modal-share-active");
    parentBox.classList.add("box-active");
  });
});

closeBox.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    cardShared.classList.remove("modal-share-active");
    parentBox.classList.remove("box-active");

    toggleShared.forEach((othertoggle) => {
      if (othertoggle.classList.contains("active")) {
        othertoggle.classList.remove("active");
      }
    });
  });
});
