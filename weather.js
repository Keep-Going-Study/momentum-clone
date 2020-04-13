const COORDS = 'coords';

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
}

function handleGeoError(){
    console.log("Cant access geolocation");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}



function loadCoords(){
    const loadedCords =localStorage.getItem(COORDS);
    if(loadedCords === null){ // 위치정보가 localStorage에 없다면 위치정보 요청함수 호출
        askForCoords();
    }else{
        // getWeather
    }
}

function init(){
    loadCoords();
}

init();