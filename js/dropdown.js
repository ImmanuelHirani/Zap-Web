const Chooseby = document.getElementById('Chooseby');
const BoxDrop = document.querySelector('.BoxDrop');

Chooseby.addEventListener('click', () => {
    Chooseby.classList.toggle('Choose-Active');

    const nextElement = Chooseby.nextElementSibling;
    console.log(Chooseby, nextElement);
    nextElement.classList.toggle('Box-Active');
});
