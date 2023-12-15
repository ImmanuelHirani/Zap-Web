const Chooseby = document.getElementById('Chooseby');
const BoxDrop = document.querySelector('.BoxDrop');

Chooseby.addEventListener('click', () => {
    Chooseby.classList.toggle('Choose-Active');

    const nextElement = Chooseby.nextElementSibling;
    nextElement.classList.toggle('Box-Active');
});
