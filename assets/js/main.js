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
       msgChristmas = document.getElementById('msn-christmas'),
       txttdata = document.querySelector('.txtdata')


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


        let dias = 0,
             hours = 0,
             minutes = 0,
             seconds = 0;


             // Don't calculate the time left if it is Christmas day

             if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
             dias = Math.floor(timeLeft /1000 / 60 / 60 / 24)
             hours = Math.floor(timeLeft /1000 / 60 / 60 ) % 24
             minutes = Math.floor(timeLeft /1000 / 60 ) % 60
             seconds = Math.floor(timeLeft /1000) % 60

             }
                numberData.innerHTML = dias < 10 ? `0${dias}` : dias
                textData.innerHTML = 'Dias'



                if(currentDay == 24){
                    numberData.innerHTML = hours <10 ? `0${hours}`: hours
                    textData.innerHTML = 'Horas'

                    txttdata.innerHTML = `Últimas`;
                }

                if(currentDay == 24 && hours === 0 ){
                    numberData.innerHTML = minutes < 10 ? `0${minutes}`: minutes
                    textData.innerHTML = `Minutos`
                }
                
                if(currentDay == 24 && hours === 0 && minutes === 0){
                    numberData.innerHTML = seconds < 10 ? `0${seconds}`:seconds 
                    textData.innerHTML = 'Segundos'
                }


                //mensagem de feliz natal 
                if(currentMonth == 12 && currentDay == 25){
                    titleData.style.display = 'none'
                    numberData.style.display = 'none'
                    msgChristmas.style.display = 'block'
                    msgChristmas.innerHTML = 'Feliz natal'
                
                }
                
              
        }



        setInterval(msgChristmasdown , 1000)