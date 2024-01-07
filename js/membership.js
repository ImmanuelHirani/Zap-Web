let lifetime__membership = document.querySelector(".lifetime__membership");
let one__year = document.querySelector(".one__year");
let exclusive__membership = document.querySelector(".exclusive__membership");
let test__membership = document.querySelector(".test__membership");
let lifetime__button = document.querySelector(".lifetime__button");
let one__year__button = document.querySelector(".one__year__button");
let exclusive__button = document.querySelector(".exclusive__button");
let test__button = document.querySelector(".test__button");

lifetime__button.addEventListener("click", () => {
  lifetime__membership.style.display = "block";
  one__year.style.display = "none";
  exclusive__membership.style.display = "none";
  test__membership.style.display = "none";
  lifetime__button.classList.add("active__lifetime__button");
  one__year__button.classList.remove("active__one__year__button");
  exclusive__button.classList.remove("active__exclusive__button");
  test__button.classList.remove("active__test__button");
});
one__year__button.addEventListener("click", () => {
  lifetime__membership.style.display = "none";
  one__year.style.display = "block";
  exclusive__membership.style.display = "none";
  test__membership.style.display = "none";
  lifetime__button.classList.remove("active__lifetime__button");
  one__year__button.classList.add("active__one__year__button");
  exclusive__button.classList.remove("active__exclusive__button");
  test__button.classList.remove("active__test__button");
});
exclusive__button.addEventListener("click", () => {
  lifetime__membership.style.display = "none";
  one__year.style.display = "none";
  exclusive__membership.style.display = "block";
  test__membership.style.display = "none";
  lifetime__button.classList.remove("active__lifetime__button");
  one__year__button.classList.remove("active__one__year__button");
  exclusive__button.classList.add("active__exclusive__button");
  test__button.classList.remove("active__test__button");
});

test__button.addEventListener("click", () => {
  lifetime__membership.style.display = "none";
  one__year.style.display = "none";
  exclusive__membership.style.display = "none";
  test__membership.style.display = "block";
  lifetime__button.classList.remove("active__lifetime__button");
  one__year__button.classList.remove("active__one__year__button");
  exclusive__button.classList.remove("active__exclusive__button");
  test__button.classList.add("active__test__button");
});

Array.from(document.querySelectorAll(".js-click-member")).forEach((item) => {
  item.addEventListener("click", () => {
    togglePopup(1);
  });
});

function togglePopup(index) {
  var popup = document.querySelectorAll("#popup");
  popup[index].classList.toggle("hidden");
  popup[index].style.backgroundColor = "rgba(0,0,0,0.3)";
}
function closePopup(index) {
  var popup = document.querySelectorAll("#popup");
  popup[index].classList.add("hidden");
}
