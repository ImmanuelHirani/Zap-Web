const EstoreCategoriesLink = document.querySelectorAll(".EstoreCategoriesLink");

// Mengambil elemen pertama dari EstoreCategoriesLink
const firstLink = EstoreCategoriesLink[0];

// Menambahkan kelas CategoriesLinkStore-Active ke elemen pertama
firstLink.classList.add("CategoriesLinkStore-Active");

// Menangani klik pada setiap link
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
