function calc() {
    const result = document.querySelector('#calories');
    let ratio, weight, height, age, sex;

    if (localStorage.getItem('ratio')) {
        ratio = +localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', "1.375");
    }

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    }else{
        sex = 'famale';
        localStorage.setItem('sex' , 'famale');
    }

    function initLocal(parent, activeClass) {
        const element = document.querySelectorAll(`${parent} .calculating__choose-item`);
        element.forEach(item => {
            item.classList.remove(activeClass);
            if (item.getAttribute('id') == localStorage.getItem('sex')) {
                item.classList.add(activeClass)
            }
            if (item.getAttribute('data-calc') === localStorage.getItem('ratio')) {
                item.classList.add(activeClass)
            }
        })
    }
    initLocal('#gender', 'calculating__choose-item_active');
    initLocal('.calculating__choose_big', 'calculating__choose-item_active');

    function calculateTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '___';
            return;
        }
        if (sex === 'famale') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calculateTotal();
    
    function getStaticInfo(parent, activeClass) {
        const element = document.querySelectorAll(`${parent} .calculating__choose-item`);
        element.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-calc')) {
                    ratio = +e.target.getAttribute('data-calc');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-calc'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex',  e.target.getAttribute('id'));
                }
                element.forEach(item => {
                    item.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);

                calculateTotal();
            })
        })

    }
    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

    function getDynammicInfo(selector) {
        const inputData = document.querySelector(selector);
        inputData.addEventListener('input', () => {
            switch (inputData.getAttribute('id')) {
                case 'height':
                    height = +inputData.value;
                    break;
                case 'weight':
                    weight = +inputData.value;
                    break;
                case 'age':
                    age = +inputData.value;
                    break;
            }
            if (inputData.value.match(/\D/g)) {
                inputData.style.border = '1px solid red';
            }else{
                inputData.style.border = '';
            }
            calculateTotal();
        });
    }
    getDynammicInfo('#weight');
    getDynammicInfo('#height');
    getDynammicInfo('#age');
}

export default calc;