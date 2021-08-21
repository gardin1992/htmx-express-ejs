(() => {
    const iconsVariants = {
        menu_close: "menu_close",
        menu_open: "menu_open"
    }

    var btnMenuToggle = document.querySelector("#menu-toggle")
    var iconMenuToggle = btnMenuToggle.querySelector(".c-icon")
    var sideBar = document.querySelector(".c-sidebar")

    btnMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();

        if (btnMenuToggle.classList.contains("opened")) {
            iconMenuToggle.setAttribute("variant", iconsVariants.menu_close)
            btnMenuToggle.classList.remove("opened")
            sideBar.classList.remove("opened")
        } else {
            btnMenuToggle.classList.add("opened")
            sideBar.classList.add("opened")
            iconMenuToggle.setAttribute("variant", iconsVariants.menu_open)
        }
    })
})()
