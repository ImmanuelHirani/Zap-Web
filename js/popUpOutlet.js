const PopUpBoxOutlet = document.getElementById("PopUpOutletCardLocations");
const CardLocation = document.getElementById("CardLocation");
const PopUpTogglerOutlet = document.querySelectorAll(".PopUpTogglerOutlet");

const toggleSchedule = document.querySelectorAll(".ScheduleToggle");
const ModalSchedule = document.querySelector(".modal-schedule");
const closeBoxOutlet = document.querySelectorAll(".closeModal");
const closeBoxSchedule = document.querySelectorAll(".closeModalSchedule");

PopUpTogglerOutlet.forEach((OtherToggler) => {
  OtherToggler.addEventListener("click", () => {
    PopUpBoxOutlet.classList.add("PopUpOutletCardLocations-Active");
    body.style.overflow = "hidden"; // Menghentikan scrolling saat PopUpBox aktif
  });
});

closeBoxOutlet.forEach((box) => {
  box.addEventListener("click", () => {
    PopUpBoxOutlet.classList.remove("PopUpOutletCardLocations-Active");
    CardLocation.classList.remove("hidden");
    body.style.overflow = ""; // Mengizinkan scrolling kembali setelah PopUpBox ditutup
  });
});

closeBoxSchedule.forEach((box) => {
  box.addEventListener("click", () => {
    CardLocation.classList.remove("hidden");
    ModalSchedule.classList.add("hidden");
  });
});

toggleSchedule.forEach((otherschedule) => {
  otherschedule.addEventListener("click", () => {
    ModalSchedule.classList.remove("hidden");
    CardLocation.classList.add("hidden");
  });
});
