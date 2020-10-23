const time = document.querySelector('.time'),
    date = document.querySelector('.date'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    humidity = document.querySelector('.humidity'),
    wind = document.querySelector('.wind'),
    weatherDescription = document.querySelector('.weather-description'),
    city = document.querySelector('.city'),
    blockquote = document.querySelector('blockquote'),
    figcaption = document.querySelector('figcaption'),
    nextQuote = document.querySelector('.next-quote'),
    body = document.querySelector('body'),
    img = document.createElement('img'),
    btnImg = document.querySelector('.icon-image'),
    errorMess = document.querySelector('.error');



const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'],
      nameWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      nameMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let i = 0;

//TIME
//const date1 = new Date('December 17, 1995 03:24:00');
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        day = today.getDate(),
        month = today.getMonth(),
        week = today.getDay();

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    date.innerHTML = `${nameWeek[week]}<span>,</span> ${day} ${nameMonth[month]} `;

    setTimeout(showTime, 1000);

    if (min === 0 && sec === 0) getImage();

    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
}

//BG-image
let linkThisImg;
let arrayToday = [];
function randomArr(array) {
    let arr;
    for (let i = 0; i < 4; i++) {
        arr = [];
        let arrMap;
        arr = (array.sort(() => Math.random() - 0.5))
        arr.splice(6);
        if (i === 0) arrMap = arr.map((item) => `assets/images/night/${item}`);
        if (i === 1) arrMap = arr.map((item) => `assets/images/morning/${item}`);
        if (i === 2) arrMap = arr.map((item) => `assets/images/day/${item}`);
        if (i === 3) arrMap = arr.map((item) => `assets/images/evening/${item}`);
        arrayToday = arrayToday.concat(arrMap);
    }
    return arrayToday;
}
function setBgGreet() {
    randomArr(images);
    let today = new Date(),
        hour = today.getHours();

    if (hour >= 0 && hour < 6) {
        getImage();
        greeting.textContent = 'Доброй ночи, ';
        document.body.style.color = 'white';
    } else if (hour < 12) {
        getImage();
        greeting.textContent = 'Доброе утро, ';
    } else if (hour < 18) {
        getImage();
        greeting.textContent = 'Добрый день, ';
    } else if (hour < 24) {
        getImage();
        greeting.textContent = 'Добрый вечер, ';
        document.body.style.color = 'white';
    }
}
let animationIsActive = false;

function viewBgImage(data) {
    animationIsActive = true;
    const src = data;
    img.src = src;
    setTimeout(waitingFinishAnim, 700)
    img.onload = () => {
        body.style.backgroundImage = `url(${src})`;  
        
    };
    function waitingFinishAnim() {
        animationIsActive = false;
      }
}

function getImage() {
    let today = new Date();
    let index = today.getHours();
    const imageSrc = arrayToday[index];
    linkThisImg = arrayToday[index];
    viewBgImage(imageSrc);
    index++;
}

function viewAllImg() {
    let curIndex = arrayToday.indexOf(linkThisImg);
    const imageSrc = (curIndex) === 23 ? arrayToday[0] : arrayToday[curIndex + 1];
    linkThisImg = imageSrc;
    if (animationIsActive === false){
        viewBgImage(imageSrc);
    }
 
    //   setTimeout(function(){
    //     viewBgImage(imageSrc);
    //   }, 500);
    
}

//NAME

function getName() {
    let item = localStorage.getItem('name');
    if (!item) {
         name.textContent = '[Введите имя]';
    } else {
        name.textContent = item;
    }
}

name.addEventListener('mousedown', () => {
    name.innerText = '';
});

name.onblur = function () {
    getName();
};

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//FOCUS
focus.addEventListener('mousedown', () => {
    focus.innerText = '';
});

focus.onblur = function () {
    getFocus();
};

function getFocus() {
    let item = localStorage.getItem('focus');
      if (!item) focus.textContent = '[Введите цель]';
    else focus.textContent = item;   
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else localStorage.setItem('focus', e.target.innerText);
    
}

//CITY
let firstVisit = !localStorage.getItem('firstVisit');
if (firstVisit) {
    localStorage.setItem('firstVisit', 'Первая загрузка');
    localStorage.setItem('city', 'Санкт-Петербург');
    localStorage.setItem('name', '[Введите имя]');
    localStorage.setItem('focus', '[Введите цель]');
}

let curCity= localStorage.getItem('city');


city.addEventListener('mousedown', () => {
    city.innerText = '';
});

city.onblur = function () {
    let item = localStorage.getItem('city');
    if (!item) city.textContent = item;
    else city.textContent = item;    
};

function setCity(e) {
    if (e.which == 13 || e.keyCode == 13) {
        curCity= localStorage.getItem('city');
        localStorage.setItem('city', e.target.innerText);
        city.blur();
        getWeather();
    } 
}
//WEATHER
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=93f3893d8ca2513b9dff95fa5ec0f1ca&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    try {
        city.textContent = localStorage.getItem('city');
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        wind.textContent = `${data.wind.speed}м/с`;
        humidity.textContent = `${data.main.humidity}%`;
        weatherDescription.textContent = data.weather[0].description;
      } catch(err) {
        //alert(`Город ${city.textContent} не найден!`); 
        city.textContent = curCity;  
        localStorage.setItem('city', curCity);
        errorMess.textContent = `Город не найден!`;
        errorMess.classList.toggle("error-active");
        setTimeout(() => errorMess.classList.remove("error-active"), 2000); 
      }
}

//QUOTE
async function getQuote() {
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;
    const res = await fetch(url);
    const data = await res.json();
    blockquote.textContent = data.quoteText;
    figcaption.textContent = data.quoteAuthor;
}

document.addEventListener('DOMContentLoaded', getQuote);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//btnImg.addEventListener('click', setTimeout(viewAllImg, 1000));
btnImg.addEventListener('click', viewAllImg);
nextQuote.addEventListener('click', getQuote);


randomArr(images);
showTime();
setBgGreet();
getName();
getFocus();
getWeather();