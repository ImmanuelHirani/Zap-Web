let question_array = [false, false, false, false, false, false];
let jawaban = document.querySelectorAll(".jawaban");
let question = document.querySelectorAll(".question");
Array.from(question).forEach((item, index) => {
    item.addEventListener("click", () => {
        if (question_array[index] === false) {
            question_array = [false, false, false, false, false, false];
        }
        question_array[index] = !question_array[index];

        Array.from(jawaban).forEach((_, index2) => {
            if (question_array[index2] === true) {
                jawaban[index2].style.display = "block";
                question[index2].classList.add("active__series");
            } else {
                jawaban[index2].style.display = "none";
                question[index2].classList.remove("active__series");
            }
        });
    });
});
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
    const questionButton = accordionHeader.querySelector(".question");
    accordionHeader.addEventListener("click", () => {
        const accordionBody = accordionHeader.nextElementSibling;

        // Toggle active class for the clicked header
        accordionHeader.classList.toggle("active__series");

        // Toggle rotation for the question button
        questionButton.classList.toggle("active__series");

        if (accordionHeader.classList.contains("active__series")) {
            // Hide the line and expand the accordion body
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            // Show the line and collapse the accordion body
            accordionBody.style.maxHeight = 0;
        }

        // Loop through other headers to deactivate them
        accordionHeaders.forEach((otherAccordionHeader) => {
            if (otherAccordionHeader !== accordionHeader) {
                const otherAccordionBody =
                    otherAccordionHeader.nextElementSibling;

                // Deactivate other headers
                otherAccordionHeader.classList.remove("active__series");
                otherAccordionBody.style.maxHeight = 0;

                // Rotate other question buttons back to default
                const otherQuestionButton =
                    otherAccordionHeader.querySelector(".question");
                otherQuestionButton.classList.remove("active__series");
            }
        });
    });
});
