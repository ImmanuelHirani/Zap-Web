const variantChoose = document.querySelectorAll('.variantChoose')

variantChoose.forEach(otherVariant => {
    otherVariant.addEventListener('click' ,() => {
        otherVariant.classList.toggle('VariantActive')
    })
});