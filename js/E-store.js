const toggleShared = document.querySelectorAll(".sharedToggle");
const cardShared = document.querySelector(".share-card");
const closeBox = document.querySelector(".closeModal");
const parentBox = cardShared.parentNode;
const EstoreCategoriesLink = document.querySelectorAll(".EstoreCategoriesLink");

EstoreCategoriesLink.forEach((otherlink) => {
  otherlink.addEventListener("click", () => {
    EstoreCategoriesLink.forEach((link) => {
      if (link !== otherlink) {
        link.classList.remove("CategoriesLinkStore-Active");
      }
    });
    otherlink.classList.add("CategoriesLinkStore-Active");
  });
});

toggleShared.forEach((othertoggle) => {
  othertoggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah event klik menyebar ke atas (ke elemen di luar sharedToggle)
    othertoggle.classList.add("active");
    cardShared.classList.add("modal-share-active");
    parentBox.classList.add("box-active");

    console.log(cardShared, parentBox);
  });
});

closeBox.addEventListener("click", () => {
  cardShared.classList.remove("modal-share-active");
  parentBox.classList.remove("box-active");

  // Hapus kelas 'active' dari elemen-elemen 'othertoggle' yang memiliki kelas tersebut
  toggleShared.forEach((othertoggle) => {
    if (othertoggle.classList.contains("active")) {
      othertoggle.classList.remove("active");
    }
  });
});
