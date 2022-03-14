const bntMobile = document.getElementById('btn-primary')


function toggleMenu() {
    const navMobile = document.getElementById('nav-mobile')
    navMobile.classList.toggle('active')
}



bntMobile.addEventListener(
    'click',
    toggleMenu
)
    
