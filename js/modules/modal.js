
function openModal(moddals, modalTimerId) {
    const modalWindow = document.querySelector(moddals);
    modalWindow.classList.toggle('view');
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}
function closeModal(moddals) {
    const modalWindow = document.querySelector(moddals)
    modalWindow.classList.toggle('view');
    document.body.style.overflow = 'auto';
}
function modall(trigger, moddals, modalTimerId){
    const btnModal = document.querySelectorAll(trigger),
        modalWindow = document.querySelector(moddals),
        modalBox = document.querySelector('.modal');

    btnModal.forEach((item) => {
        item.addEventListener('click', () => openModal(moddals , modalTimerId));
    })

    modalBox.addEventListener('click', (eevnt) => {
        if (eevnt.target === modalBox || eevnt.target.getAttribute('data-close') == "") {
            closeModal(moddals);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalBox.classList.contains('view')) {
            closeModal(moddals);
        }
    })
    function removeEvent(event) {
        for (let i = 0; i < 1; i++) {
            window.removeEventListener('event', eventEvent)
        }
    }

    window.addEventListener('scroll', () => {
        eventEvent();
        removeEvent(scroll);
    })
    function eventEvent() {
        if (window.pageXOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
            openModal(moddals, modalTimerId);
        }
    }
}
export default modall;

export {closeModal};
export {openModal};