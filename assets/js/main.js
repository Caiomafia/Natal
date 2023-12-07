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


/*============== Quanto falta para o proximo natal  ===============*/


const titleData = document.querySelector('title-data'),
       numberData = document.getElementById('number-data'),
       textData = document.getElementById('text-data'),
       msgChristmas = document.getElementById('msn-christmas')


       const msgChristmasdown = () => {
        let now = new Date(),
              currentMonth = now.getMonth() + 1,
              currentDay = now.getDate()
            //calculate os years the next Christmas
              let nextChristwasYear = now.getFullYear()
              if(currentMonth == 12 && currentDay > 25){
                nextChristwasYear =+1
              }

             let nextChristwasDate = `Dec 25 ${nextChristwasYear} 00:00:00`,
              christmasDay = new Date(nextChristwasDate),
              timeLeft  = christmasDay - now ;


        let day = 0,
             hours = 0,
             minutes = 0,
             seconds = 0;


             // Don't calculate the time left if it is Christmas day
        }



        setInterval(msgChristmasdown , 1000)