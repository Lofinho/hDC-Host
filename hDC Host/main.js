const botaoMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu-principal ul')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})