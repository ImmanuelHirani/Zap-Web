const jobDesc = document.getElementById('jobDesc')
const modalSuccess = document.getElementById('modalSuccess')
const okClosebtn = document.getElementById('okClosebtn')
const form = document.getElementById('form')
const toggleCarrier = document.querySelectorAll('.toggleCarrier-ZAP')
const cardCarrier = document.querySelector('.card-carrier')
const closeBox = document.querySelector('.closeModal')
const applyBtn = document.querySelector('.apply-btn')
const kirimBtn = document.querySelector('.kirim-button')
const parentBox = cardCarrier.parentNode



toggleCarrier.forEach(othertoggle => {
    othertoggle.addEventListener('click', () => {
        othertoggle.classList.add('active');
        cardCarrier.classList.add('modal-carrier-active');
        parentBox.classList.add('box-active');

    });
});

closeBox.addEventListener('click', () => {
    cardCarrier.classList.remove('modal-carrier-active');
    parentBox.classList.remove('box-active');

    // Hapus kelas 'active' dari elemen-elemen 'othertoggle' yang memiliki kelas tersebut
    toggleCarrier.forEach(othertoggle => {
        if (othertoggle.classList.contains('active')) {
            othertoggle.classList.remove('active');
        }
    });

    jobDesc.classList.remove('hidden')
    form.classList.add('hidden')
});

kirimBtn.addEventListener('click' ,() => {
    cardCarrier.classList.remove('modal-carrier-active');
    cardCarrier.classList.add('hidden');
    modalSuccess.classList.add('modalSucces-Active')
    modalSuccess.classList.remove('hidden')

})

okClosebtn.addEventListener('click', () => {
    parentBox.classList.remove('box-active');
    cardCarrier.classList.remove('hidden');
    modalSuccess.classList.remove('modalSucces-Active')
    modalSuccess.classList.add('hidden')
    toggleCarrier.forEach(othertoggle => {
        if (othertoggle.classList.contains('active')) {
            othertoggle.classList.remove('active');
        }
    });

        
    jobDesc.classList.remove('hidden')
    form.classList.add('hidden')
})

applyBtn.addEventListener('click' ,() => {
    jobDesc.classList.add('hidden')
    form.classList.remove('hidden')
})


    // Fungsi untuk menampilkan pop-up
    function showPopup(imageSrc) {
        const popup = document.getElementById('image-popup');
        const popupImage = document.getElementById('popup-image');
        popupImage.src = imageSrc;
        popup.classList.add('popImg-Active')
  
      }
    
      // Fungsi untuk menyembunyikan pop-up
      function hidePopup() {
        const popup = document.getElementById('image-popup');
        popup.classList.remove('popImg-Active')
  
      }
    
      // Tambahkan event listener untuk gambar dengan kelas "popup-trigger"
      const popupTriggers = document.querySelectorAll('.popup-trigger');
      popupTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
          showPopup(event.target.src);
        });
      });
    
      // Tambahkan event listener untuk tombol close
      const closeButton = document.getElementById('close-popup');
      closeButton.addEventListener('click', () => {
        hidePopup();
      });