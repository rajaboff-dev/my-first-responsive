let toggle = document.getElementById('hamburger')
let navList = document.getElementById('nav-link')
let themeSwitch = document.getElementById('switch')

toggle.addEventListener('click', () => {
    navList.classList.toggle('active')
})