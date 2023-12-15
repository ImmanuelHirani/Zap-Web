const toggleSchedule = document.querySelectorAll('.ScheduleToggle');
const ModalSchedule = document.querySelector('.modal-schedule');
const closeBox = document.querySelectorAll('.closeModal');
const parentBox = ModalSchedule.parentNode;

toggleSchedule.forEach(otherschedule => {
    otherschedule.addEventListener('click' ,() => {
        ModalSchedule.classList.add('active')
        
        parentBox.classList.add('modalSchedule-active')
    })
});

closeBox.forEach(otherclose => {
    otherclose.addEventListener('click' , () => {
        ModalSchedule.classList.remove('active')
        parentBox.classList.remove('modalSchedule-active')
    })
});


const zap = document.getElementById("zap");
const zapPremire = document.getElementById("zapPremiere");
const zapManlogy = document.getElementById("zapManlogy");
const zapLoc = document.getElementById("zapLoc");
const zapPremireLoc = document.getElementById("zapPremierLoc");
const zapManlogyLoc = document.getElementById("zapManlogyLoc");




// Add 'loc-Active' class to the initial active element
zap.classList.add('loc-Active');
zapPremire.classList.add('loc-NActive');
zapManlogy.classList.add('loc-NActive');

zap.addEventListener('click', () => {
    toggleElement(zap, [zapPremire, zapManlogy]);
    toggleLocation(zapLoc, [zapPremireLoc, zapManlogyLoc]);
});

zapPremiere.addEventListener('click', () => {
    toggleElement(zapPremiere, [zap, zapManlogy]);
    toggleLocation(zapPremireLoc, [zapLoc, zapManlogyLoc]);
});

zapManlogy.addEventListener('click', () => {
    toggleElement(zapManlogy, [zap, zapPremiere]);
    toggleLocation(zapManlogyLoc, [zapLoc, zapPremireLoc]);
});


function toggleElement(element, elements) {
    elements.forEach(el => el.classList.add('loc-NActive'));
    elements.forEach(el => el.classList.remove('loc-Active'));
    element.classList.add('loc-Active');
    element.classList.remove('loc-NActive');
}

function toggleLocation(location, locations) {
    locations.forEach(loc => loc.classList.add('hidden'));
    location.classList.remove('hidden');
}