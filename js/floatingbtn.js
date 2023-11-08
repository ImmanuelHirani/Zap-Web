const backToTop = document.getElementById('backToTop');
const liveChat = document.getElementById('liveChat');
const liveChatBox = document.getElementById('liveChatBox');
const whatsApp = document.getElementById('Whatsapp');
const closeBtn = document.getElementById('CloseBtn');
const closeBtnLiveChat = document.getElementById('CloseBtnlivechat'); // Perbaikan di sini
const openBtn = document.getElementById('chatBtnOpen');

openBtn.addEventListener('click' ,() => {
    backToTop.classList.add('b-active')
    openBtn.classList.add('o-active')
    closeBtn.classList.add('C-active')
    whatsApp.classList.add('w-active')
    liveChat.classList.add('l-active')
})

liveChat.addEventListener('click' , () => {
    liveChatBox.classList.add('livechat-active')
    backToTop.classList.add('b-active')
    openBtn.classList.add('o-active')
    closeBtn.classList.remove('C-active')
    whatsApp.classList.remove('w-active')
    liveChat.classList.remove('l-active')
})

closeBtnLiveChat.addEventListener('click' , () => {
    liveChatBox.classList.remove('livechat-active')
    closeBtn.classList.add('C-active')
    whatsApp.classList.add('w-active')
    liveChat.classList.add('l-active')
})


closeBtn.addEventListener('click' ,() => {
    backToTop.classList.remove('b-active')
    openBtn.classList.remove('o-active')
    closeBtn.classList.remove('C-active')
    whatsApp.classList.remove('w-active')
    liveChat.classList.remove('l-active')
})


