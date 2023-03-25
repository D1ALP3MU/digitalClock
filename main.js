let seconds = document.querySelector('#seconds');
let minutes = document.querySelector('#minutes');
let hours = document.querySelector('#hours');

// Digital Clock
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

setInterval( () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    if(h > 12){
        h = h - 12;
    }

    // Add zero before single digit number(Agregue cero antes del número de un solo dígito)
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hour.innerHTML = h;
    min.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;
})