export function def() {
    const burger = document.querySelector('.burger')
    const navLinks = document.querySelector('.nav_links')
    
    navLinks.addEventListener('click', () => {
        if(menuOpen) {
            navLinks.classList.remove('open')
            menuOpen = false
        } 
    })
    let menuOpen = false
    burger.addEventListener('click', () => {
        if(!menuOpen) {
            navLinks.classList.add('open')
            menuOpen = true
        } 
        else {
            navLinks.classList.remove('open')
            menuOpen = false
        }
    })
}
def()
