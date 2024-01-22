const countdate = new Date('Mar 14, 2024 00:00:00').getTime()

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const para = document.getElementById('para')
const mainheading = document.getElementById('main-heading')

const x = setInterval(()=>{
    const now = new Date().getTime()
    const distance = countdate - now

    days.innerHTML = Math.floor(distance/(1000*60*60*24))
    hours.innerHTML = Math.floor((distance % (1000*60*60*24)) / (1000*60*60))
    minutes.innerHTML = Math.floor((distance % (1000*60*60))/(1000*60))
    seconds.innerHTML = Math.floor((distance % (1000*60))/(1000))

    if(distance<0)
    {
        clearInterval(x)
        days.innerHTML = '00'
        hours.innerHTML = '00'
        minutes.innerHTML = '00'
        seconds.innerHTML = '00'
        para.innerHTML = `Welcome To DeltaX`
        mainheading.innerHTML = `Build With <span>Your</span> Creativity`
    }
},1000)