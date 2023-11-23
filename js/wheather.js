const API_KEY = "39f3d521aff409c011d180030e5487b0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live it,",lat,lon);
    //You live it, 37.470208 126.7924992   
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const wheather = document.querySelector("#wheather span:first-child");
            const city = document.querySelector("#wheather span:last-child");
            city.innerText = data.name;
            wheather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError(){
    alert("Can't find you, No wheather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
