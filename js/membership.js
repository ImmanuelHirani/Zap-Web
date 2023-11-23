let lifetime__membership = document.querySelector(".lifetime__membership");
let one__year = document.querySelector(".one__year");
let lifetime__button = document.querySelector(".lifetime__button");
let one__year__button = document.querySelector(".one__year__button");

lifetime__button.addEventListener("click", () => {
    lifetime__membership.style.display = "block";
    one__year.style.display = "none";
    lifetime__button.classList.add("active__lifetime__button");
    one__year__button.classList.remove("active__one__year__button");
});
one__year__button.addEventListener("click", () => {
    lifetime__membership.style.display = "none";
    one__year.style.display = "block";
    lifetime__button.classList.remove("active__lifetime__button");
    one__year__button.classList.add("active__one__year__button");
});
