let lifetime__membership = document.querySelector(".lifetime__membership");
let one__year = document.querySelector(".one__year");
let exclusive__membership = document.querySelector(".exclusive__membership");
let lifetime__button = document.querySelector(".lifetime__button");
let one__year__button = document.querySelector(".one__year__button");
let exclusive__buton = document.querySelector(".exclusive__button");

lifetime__button.addEventListener("click", () => {
  lifetime__membership.style.display = "block";
  one__year.style.display = "none";
  exclusive__membership.style.display = "none";
  lifetime__button.classList.add("active__lifetime__button");
  one__year__button.classList.remove("active__one__year__button");
  exclusive__buton.classList.remove("active__exclusive__button");
});
one__year__button.addEventListener("click", () => {
  lifetime__membership.style.display = "none";
  one__year.style.display = "block";
  exclusive__membership.style.display = "none";
  lifetime__button.classList.remove("active__lifetime__button");
  one__year__button.classList.add("active__one__year__button");
  exclusive__buton.classList.remove("active__exclusive__button");
});
exclusive__buton.addEventListener("click", () => {
  lifetime__membership.style.display = "none";
  one__year.style.display = "none";
  exclusive__membership.style.display = "block";
  lifetime__button.classList.remove("active__lifetime__button");
  one__year__button.classList.remove("active__one__year__button");
  exclusive__buton.classList.add("active__exclusive__button");
});

Array.from(document.querySelectorAll(".js-click-member")).forEach((item) => {
  item.addEventListener("click", () => {
    togglePopup(1);
  });
});

function togglePopup(index) {
  var popup = document.querySelectorAll("#popup");
  popup[index].classList.toggle("hidden");
  popup[index].style.backgroundColor = "rgba(0,0,0,0.5)";
}
function closePopup(index) {
  var popup = document.querySelectorAll("#popup");
  popup[index].classList.add("hidden");
}
