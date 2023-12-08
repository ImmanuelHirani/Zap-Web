const PopUpBox = document.getElementById("PopUpBox");
const VidioPopUpToggler = document.querySelectorAll(".VidioPopUpToggler");
const closeBoxVidio = document.querySelectorAll(".closeModal");
const body = document.body;

VidioPopUpToggler.forEach((OtherToggler) => {
  OtherToggler.addEventListener("click", () => {
    PopUpBox.classList.add("VidioBox-Active");
    body.style.overflow = "hidden"; // Menghentikan scrolling saat PopUpBox aktif
  });
});



closeBoxVidio.forEach((box) => {
  box.addEventListener("click", () => {
    PopUpBox.classList.remove("VidioBox-Active");
    body.style.overflow = ""; // Mengizinkan scrolling kembali setelah PopUpBox ditutup
  });
});
