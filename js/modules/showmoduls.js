import {closeModal , openModal} from './modal';
import {postData} from '../services/services';
function showModals(formss, modalTimerId) {
    const form = document.querySelectorAll(formss);

    const message = {
        succes: 'done',
        loadding: 'img/form/spinner.svg',
        fail: '404'
    }
    form.forEach(item => {
        addForm(item);
    })
    function addForm(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const block = document.createElement('img');
            block.src = message.loadding;
            block.style.cssText = `
              width:100px;
              height:100px;
              dispaly: block;
              margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', block);


            const formDataa = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formDataa.entries()))

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showmodule(message.succes)
                    block.remove();
                }).catch(() => {
                    showmodule(message.fail);
                }).finally(() => {
                    form.reset();
                })
        })
    }
    function showmodule(message) {
        const prevModule = document.querySelector('.modal__dialog'),
            parentModules = document.querySelector('.modal');

        prevModule.classList.add('hide');
        openModal('[data-modal]', modalTimerId);

        const newModal = document.createElement('div');
        newModal.classList.add('modal__dialog');
        newModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message}</div>
        </div>
        `;
        parentModules.append(newModal);
        setTimeout(() => {
            newModal.remove();
            prevModule.classList.add('show');
            prevModule.classList.remove('hide');
            closeModal('[data-modal]');
        }, 4000);
    }
}
export default showModals;