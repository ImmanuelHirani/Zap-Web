const navBurger = document.getElementById("navBurger");
const navCont = document.getElementById("navCont");
const navLinks = document.getElementById("navLinks");
const dropdownNavs = document.querySelectorAll(".dropdownNav");

const nav = document.querySelector("header");

// Language
const languages = document.querySelectorAll(".language");
const languageBoxes = document.querySelectorAll(".languageBox");
const languageSelector = document.querySelector(".language img"); // Menggunakan selektor yang benar untuk gambar bahasa
const defaultLanguageButton = document.querySelector(".languageBox a[data-lang='ID']"); // Menemukan tombol bahasa default (ID)

// const NavlinkTreatmentActions = document.querySelectorAll(".NavlinkTreatment-Actions");
// const NavlinkActions = document.querySelectorAll(".Navlink-Actions");

// Navlink Active Navbar
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();
// Navlink
if (pageName === "solution.html") {
  document.querySelectorAll(".Solution").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "about-us.html") {
  document.querySelectorAll(".TentangZAP").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "lokasi.html") {
  document.querySelectorAll(".Lokasi").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}


if (pageName === "artikel.html") {
  document.querySelectorAll(".Artikel").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "artikel-detail.html") {
  document.querySelectorAll(".Artikel").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "store.html" || pageName === "store-itemDetails.html") {
  document.querySelectorAll(".EStore").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "fulldetails.html") {
  document.querySelectorAll(".Treatment").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "promo.html") {
  document.querySelectorAll(".Promo").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "membership.html") {
  document.querySelectorAll(".Promo").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}

if (pageName === "series.html") {
  document.querySelectorAll(".Promo").forEach(function (element) {
    element.classList.add("Navlink-Active");
  });
}
// Navlink end

// Navlink Active Navbar End

// Mengatur bahasa default (ID) tercentang
defaultLanguageButton.querySelector("svg").classList.toggle("opacity-100");

languages.forEach((language, index) => {
  language.addEventListener("click", () => {
    language.classList.toggle("language-Active");

    // Mengecek apakah languageBox terkait sudah aktif atau tidak
    const isActive = languageBoxes[index].classList.contains("languageBox-Active");

    // Menghapus kelas 'languageBox-Active' dari semua elemen languageBoxes
    languageBoxes.forEach((box) => box.classList.remove("languageBox-Active"));

    // Jika languageBox terkait tidak aktif, maka aktifkan kembali
    if (!isActive) {
      languageBoxes[index].classList.add("languageBox-Active");
    }
  });
});

// Menambahkan event listener untuk setiap tombol di dalam languageBox
languageBoxes.forEach((languageBox) => {
  const buttons = languageBox.querySelectorAll("a");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Mengambil teks tombol yang dipilih dari atribut data-lang
      const selectedText = button.getAttribute("data-lang");

      // Mengatur teks pada elemen .language
      languageSelector.src = `temp-asset/statis-asset/${selectedText}-Bahasa.png`;

      // Mengatur opacity untuk svg check
      buttons.forEach((btn) => btn.querySelector("svg").classList.remove("opacity-100"));
      button.querySelector("svg").classList.add("opacity-100");

      // Menutup languageBox saat tombol dipilih
      languageBox.classList.remove("languageBox-Active");

      // Hapus 'language-Active' dari semua elemen language setelah tombol dipilih
      languages.forEach((lang) => lang.classList.remove("language-Active"));
    });
  });
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("nav-ActiveCont");
  } else {
    nav.classList.remove("nav-ActiveCont");
  }
});

let activeDropdownNav = null; // Variable to track the currently active element

// Function to close the active dropdown
function closeActiveDropdown() {
  if (activeDropdownNav) {
    activeDropdownNav.classList.remove("navDrop-Active");
    const parentNav = activeDropdownNav.parentNode;
    const dropMenu = parentNav.querySelector(".dropDownBox");

    parentNav.classList.remove("pb-active");

    dropMenu.classList.remove("dropMenu-Active");
    dropMenu.classList.add("opacity-0");
    navCont.classList.remove("navCont-active");
    activeDropdownNav = null;
  }
}

function activateDropdown(dropdownNav) {
  dropdownNav.classList.add("navDrop-Active");
  const parentNav = dropdownNav.parentNode;
  const dropMenu = parentNav.querySelector(".dropDownBox");

  parentNav.classList.add("pb-active");

  dropMenu.classList.add("dropMenu-Active");
  dropMenu.classList.remove("opacity-0");
  navCont.classList.add("navCont-active");
  activeDropdownNav = dropdownNav;
}

dropdownNavs.forEach((dropdownNav) => {
  dropdownNav.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document click event handler

    if (activeDropdownNav === dropdownNav) {
      // Clicked on the currently active element, close the dropdown
      closeActiveDropdown();
      activeDropdownNav = null; // Reset the activeDropdownNav variable
    } else {
      // Close the active dropdown if there is one
      closeActiveDropdown();

      // Activate the new dropdown
      activateDropdown(dropdownNav);
    }
  });
});

// Close the active dropdown when leaving the navContainer
navCont.addEventListener("mouseleave", () => {
  closeActiveDropdown();
});

navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("nav-active");
});

const mobileMenuButton = document.getElementById("navBurger");
const mobileMenu = document.getElementById("offCanvasSm");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});
