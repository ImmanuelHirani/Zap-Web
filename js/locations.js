const toggleSchedule = document.querySelectorAll('.ScheduleToggle');
const ModalSchedule = document.querySelector('.modal-schedule');
const closeBox = document.querySelectorAll('.closeModal');
const parentBox = ModalSchedule.parentNode;

const zap = document.getElementById("zap");
const zapPremire = document.getElementById("zapPremiere");
const zapManlogy = document.getElementById("zapManlogy");
const zapLoc = document.getElementById("zapLoc");
const zapPremireLoc = document.getElementById("zapPremierLoc");
const zapManlogyLoc = document.getElementById("zapManlogyLoc");

toggleSchedule.forEach(otherschedule => {
    otherschedule.addEventListener('click' ,() => {
        ModalSchedule.classList.add('active')
        
        parentBox.classList.add('modalSchedule-active')
        console.log(parentBox , ModalSchedule)

    })
});

closeBox.forEach(otherclose => {
    otherclose.addEventListener('click' , () => {
        ModalSchedule.classList.remove('active')
        parentBox.classList.remove('modalSchedule-active')
    })
});



zap.addEventListener('click', () => {
    toggleElement(zap, [zapPremire, zapManlogy]);
    toggleLocation(zapLoc, [zapPremireLoc, zapManlogyLoc]);
});

zapPremire.addEventListener('click', () => {
    toggleElement(zapPremire, [zap, zapManlogy]);
    toggleLocation(zapPremireLoc, [zapLoc, zapManlogyLoc]);
});

zapManlogy.addEventListener('click', () => {
    toggleElement(zapManlogy, [zap, zapPremire]);
    toggleLocation(zapManlogyLoc, [zapLoc, zapPremireLoc]);
});


function toggleElement(element, elements) {
    elements.forEach(el => el.classList.add('opacity-25'));
    element.classList.remove('opacity-25');
}

function toggleLocation(location, locations) {
    locations.forEach(loc => loc.classList.add('hidden'));
    location.classList.remove('hidden');
}
