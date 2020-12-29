import {getRezsurs} from '../services/services';
function getItem() {
    class AddItem {
        constructor(src, alt, title, about, price, praerntselector, ...clases) {
            this.src = src;
            this.title = title;
            this.about = about;
            this.alt = alt;
            this.clases = clases;
            this.price = price;
            this.praerntselector = document.querySelector(praerntselector);
            this.transfer = 22;
            this.transferr();
        }
        transferr() {
            this.price = this.price * this.transfer
        }
        contsructionItem() {
            const itm = document.createElement('div');
            if (this.clases.length === 0) {
                itm.classList.add('menu__item');
            } else {
                this.clases.forEach(clasesName => {
                    itm.classList.add(clasesName);
                });
            }
            itm.innerHTML =
                `<img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.about}</div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>`;
            this.praerntselector.append(itm);
        }
    }

    getRezsurs();
    axios.get('http://localhost:3000/menu')
        .then(function (response) {
            // handle success
            response.data.forEach(({ img, altimg, title, descr, price }) => {
                new AddItem(img, altimg, title, descr, price, '.menu .container').contsructionItem();
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}

export default getItem;