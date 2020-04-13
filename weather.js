const weather = document.querySelector(".js-weather");

const API_KEY = "ba17cab4bfababd9d5081bae27a1627e";
const COORDS = 'coords';

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){ // then() 은 이전의 실행문이 다 끝난 상태 후에 실행할 문장
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   // latitude = latitude;
        longitude   // longitude = longitude; 의 축약형
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geolocation");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}



function loadCoords(){
    const loadedCoords =localStorage.getItem(COORDS);
    if(loadedCoords === null){ // 위치정보가 localStorage에 없다면 위치정보 요청함수 호출
        askForCoords();
    }else{ // 위치정보가 있으면 로컬스토리지에서 불러옴
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();