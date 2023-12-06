/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
             navToggle = document.getElementById('nav-toggle'),
             navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('active-menu')
    })
}


if(close){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('active-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/


const navlink = document.querySelectorAll('.nav_link')


const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('active-menu')
}

navlink.forEach(n=>n.addEventListener('click' , linkAction))


/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
