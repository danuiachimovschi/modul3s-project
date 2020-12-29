function slide({container, slide, next, back, total, curentt, wrapper, field}) {
    
    const sliderImg = document.querySelectorAll( slide),
        leftSlide = document.querySelector(back),
        rightSlide = document.querySelector(next),
        numberTotal = document.querySelector(total),
        numberCurent = document.querySelector(curentt),
        slideInner = document.querySelector(field),
        slider = document.querySelector(container),
        slideWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slideWrapper).width;
    let index = 1;
    let chenge = 0;

    slideInner.style.width = 100 * sliderImg.length + '%';
    slideInner.style.display = 'flex';
    slideInner.style.transition = '0.8s all ';
    slideWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';
    const indicator = document.createElement('ol');
    const dots = [];

    indicator.classList.add('carusel');
    indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    for (let i = 0; i < sliderImg.length; i++) {
        const dot = document.createElement('div');
        dot.setAttribute('data-slide-to', i + 1)
        dot.style.cssText = `
       box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
      `;
        if (i == 0) {
            dot.style.backgroundColor = 'red';
        }
        indicator.append(dot);
        dots.push(dot);
    }
    slider.append(indicator);
    sliderImg.forEach(item => {
        item.style.width = width;
    });

    if (sliderImg.length < 10) {
        numberTotal.textContent = `0${sliderImg.length}`;
        numberCurent.textContent = `0${index}`;
    } else if (sliderImg.length > 10) {
        numberCurent.textContent = index;
    }
    rightSlide.addEventListener('click', () => {
        if (chenge == addWidth(width) * (sliderImg.length - 1)) {
            chenge = 0;
        } else {
            chenge += addWidth(width);
        }
        slideInner.style.transform = `translateX(-${chenge}px)`;

        if (index == sliderImg.length) {
            index = 1;
        } else {
            index++
        }
        lengthTotal();
        addDots();
    })

    leftSlide.addEventListener('click', () => {
        if (chenge == 0) {
            chenge = addWidth(width) * (sliderImg.length - 1);
        } else {
            chenge -= addWidth(width);
        }
        if (index == 1) {
            index = sliderImg.length;
        } else {
            index--
        }
        slideInner.style.transform = `translateX(-${chenge}px)`;
        lengthTotal();
        addDots();
    })

    dots.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            index = slideTo;
            chenge = addWidth(width) * (slideTo - 1);

            if (sliderImg.length < 10) {
                numberCurent.textContent = `0${index}`;
            } else {
                numberCurent.textContent = index;
            }

            slideInner.style.transform = `translateX(-${chenge}px)`;
            addDots();
        })
    });

    function addDots() {
        dots.forEach((item) => {
            item.style.opacity = '.5';
            item.style.backgroundColor = 'white';
        });
        dots[index - 1].style.backgroundColor = 'red';
    }

    function lengthTotal() {
        if (sliderImg.length < 10) {
            numberCurent.textContent = `0${index}`;
        } else {
            numberCurent.textContent = index;
        }
    }


    function addWidth(w) {
        return +w.replace(/\D/g, '');
    }
}

export default  slide;