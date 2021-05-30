//variable 
// for search location
let searchInp = document.getElementById("searchInp");
let locName = "cairo";
//for weather today
let today = document.getElementById("today");
let todayDate = document.getElementById("todayDate");
let locationNow = document.getElementById("locationNow");
let temp = document.getElementById("temp");
let humidty = document.getElementById("humidty");
let wind = document.getElementById("wind");
let compass = document.getElementById("compass");
//for day and date
let date = new Date();
let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];
let DateNextDay = document.getElementById("DateNextDay");
let DateNxtNext = document.getElementById("DateNxtNext");
//for weathet next day
let nextDay = document.getElementById("nextDay");
let nextNextDay = document.getElementById("nextNextDay");
let tempBig= document.getElementById("tempBig");
let tempSmall= document.getElementById("tempSmall");
//for weather next next today
let tempBigNext=document.getElementById("tempBigNext");
let tempSmallNext = document.getElementById("tempSmallNext");
//for images weather
let imgWeather1 = document.getElementById("imgWeather1");
let imgWeather2 = document.getElementById("imgWeather2");
let imgWeather3 = document.getElementById("imgWeather3");
// for describe weather
let describingWeather1= document.getElementById("describingWeather1");
let describingWeather2= document.getElementById("describingWeather2");
let describingWeather3= document.getElementById("describingWeather3");
//for subscribe in site 
let btnSubscribe = document.getElementById("btnSubscribe");
let emailInp= document.getElementById("emailInp");
let succsess = document.getElementById("succsess");
let failed= document.getElementById("failed");


 // search location
searchInp.addEventListener("keyup", function(e) {
    
    e.preventDefault();
    locName = searchInp.value;
    getWeather();
});

async function getWeather (){
    weatherApi = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=931ae7f4bd104dfb8d2135804210905&q=${locName}&days=3&aqi=no&alerts=no`);
    weatherData = await weatherApi.json();
    console.log(weatherData);
    TodayWeather();
    NextDayWeather();
    NextNextDay();
};

getWeather();

function TodayWeather(){

    let date1 = weatherData.forecast.forecastday[0].date;
    let  currentDay = date1.slice(8,10);
    today.innerHTML = weekDays[date.getDay()];
    todayDate.innerHTML =`${currentDay} ${ months[date.getMonth()]}`;
    locationNow.innerHTML = weatherData.location.name;
    temp.innerHTML= `${weatherData.current.temp_c} <sup>o</sup>c`;
    humidty.innerHTML=`${weatherData.current.humidity}%`;
    wind.innerHTML= `${weatherData.current.wind_kph}Km/h`;
    compass.innerHTML= weatherData.current.wind_dir;
    describingWeather1.innerHTML= weatherData.forecast.forecastday[0].day.condition.text;
    imgWeather1.setAttribute("src", `https:${weatherData.forecast.forecastday[0].day.condition.icon}`);
};

function NextDayWeather(){
   
   let date2 = weatherData.forecast.forecastday[1].date;
    let Ndate = date2.slice(8,10);
    DateNextDay.innerHTML =`${Ndate} ${ months[date.getMonth()]}`;
    nextDay.innerHTML = weekDays[date.getDay()+1];
    let day2 = weatherData.forecast.forecastday[1].day;
    tempBig.innerHTML = `${day2.maxtemp_c} <sup>o</sup>c`;
    tempSmall.innerHTML = `${day2.mintemp_c} <sup>o</sup>c`;
     describingWeather2.innerHTML= day2.condition.text;
     imgWeather2.setAttribute("src", `https:${day2.condition.icon}`);

};

function NextNextDay(){
    
    let date3 = weatherData.forecast.forecastday[2].date;
    let Nndate = date3.slice(8,10);
    DateNxtNext.innerHTML =`${Nndate} ${ months[date.getMonth()]}`;
    let day3 = weatherData.forecast.forecastday[2].day;
    nextNextDay.innerHTML= weekDays[date.getDay()+2]
    tempBigNext.innerHTML=`${day3.maxtemp_c} <sup>o</sup>c`;
    tempSmallNext.innerHTML=`${day3.mintemp_c} <sup>o</sup>c`;
    describingWeather3.innerHTML= day3.condition.text;
    imgWeather3.setAttribute("src",`https:${ day3.condition.icon}`)
};

function validationEmail(){
    var str = emailInp.value;
    var emailRegex = /^[a-zA-Z]{3,15}[0-9]{0,}(@)[a-z]{4,8}\.(com)$/;
    if (!emailRegex.test(str)){
        emailInp.classList.add("is-invalid");
        emailInp.classList.remove("is-valid");
        console.log("false");
        return false;
    }else{
        emailInp.classList.add("is-valid");
        emailInp.classList.remove("is-invalid");
        console.log("true");
        return true;
    }

};


btnSubscribe.addEventListener("click",function(e){

    e.preventDefault();

   if(validationEmail()== true){
      succsess.classList.replace("d-none","d-block");
      failed.classList.replace("d-block","d-none");
   }else{
       failed.classList.replace("d-none","d-block");
       succsess.classList.replace("d-block","d-none");
   }

  
});

