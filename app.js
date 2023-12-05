const menubtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.nav-links')

menubtn.addEventListener('click', () => {
    menu.classList.toggle("mobile-menu")

}
)