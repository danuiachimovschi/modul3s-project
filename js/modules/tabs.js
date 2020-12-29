function tabs(tabparents, activaClass, content, tabClick) {
    const tab = document.querySelectorAll(tabClick);
    const tabContent = document.querySelectorAll(content);
    const tabParent = document.querySelector(tabparents);

    function hideTab() {
        tabContent.forEach((item) => {
            item.style.display = "none";
        })
        tab.forEach((tab) => {
            tab.classList.remove(activaClass)
        })
    }
    function showTab(i = 0) {
        tabContent[i].style.display = "block";
        tab[i].classList.add(activaClass);
    }

    hideTab();
    showTab();

    tabParent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains(tabClick.slice(1))) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTab();
                    showTab(i);
                }
            })
        }
    });
}
export default  tabs;