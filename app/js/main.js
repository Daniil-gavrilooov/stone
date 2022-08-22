let burgerBtn = document.querySelector('.header__burger-btn')
let burgerMenu = document.querySelector('.header__burger-menu')
let burgerMenuItem = document.querySelectorAll('.header__menu-link')
let body = document.querySelector('body')

burgerBtn.onclick = function() {
    this.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
    body.classList.toggle('lock')
}

burgerMenuItem.forEach(item => item.onclik = function() {
    burgerMenu.classList.remove('header__burger-menu--active')
    burgerBtn.classList.remove('header__burger-btn--active')
})