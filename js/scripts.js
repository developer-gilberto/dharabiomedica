const arrowUp = document.querySelector('#arrowUp')
window.addEventListener('scroll', () => {
    if (scrollY >= 900) {
        arrowUp.style.display = 'block'
    } else {
        arrowUp.style.display = 'none'
    }
})

const iconMenuHamburguer = document.querySelector('.menu_hamburguer')
const containerMenuMobile = document.querySelector('.container_menu_mobile')
iconMenuHamburguer.addEventListener('click', () => {
    containerMenuMobile.style.display = 'flex'
})

const iconCloseMenuMobile = document.querySelector('.icon_close_menu_mobile')
iconCloseMenuMobile.addEventListener('click', () => {
    containerMenuMobile.style.display = 'none'
})

let linksMenuMobile = document.querySelectorAll('.links_menu_mobile')
linksMenuMobile.forEach(linkMenuMobile => {
    linkMenuMobile.addEventListener('click', () => {
        containerMenuMobile.style.display = 'none'
    })
})