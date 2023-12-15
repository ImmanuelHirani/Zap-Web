let question_array = [false, false];
let jawaban = document.querySelectorAll(".jawaban__online__booking");
let question = document.querySelectorAll(".question__online__booking");
Array.from(question).forEach((item, index) => {
    item.addEventListener("click", () => {
        if (question_array[index] === false) {
            question_array = [false, false];
        }
        question_array[index] = !question_array[index];

        Array.from(jawaban).forEach((_, index2) => {
            if (question_array[index2] === true) {
                jawaban[index2].style.display = "flex";
                question[index2].classList.add("active__online__booking");
            } else {
                jawaban[index2].style.display = "none";
                question[index2].classList.remove("active__online__booking");
            }
        });
    });
});

let lokasi = document.querySelector(".lokasi");
let outlet = document.querySelector(".outlet");
let isi = document.querySelectorAll(".isi");
let isi_outlet = document.querySelectorAll(".isi-outlet");

Array.from(isi).forEach((items, index2) => {
    items.addEventListener("click", () => {
        lokasi.innerText = items.innerText;
        jawaban[0].style.display = "none";
    });
});

Array.from(isi_outlet).forEach((itemss, index2) => {
    itemss.addEventListener("click", () => {
        outlet.innerText = itemss.innerText;
        jawaban[1].style.display = "none";
    });
});
