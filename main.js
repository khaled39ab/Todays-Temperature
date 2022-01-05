const APK_Key = "022745711a72745f9c43f9729f1a18f4";

function getWeatherInfo() {
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APK_Key}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayTemperature(data);
        })
        .catch(error => console.log(error));
}

document.getElementById("searchBtn").addEventListener("click", function () {
    if (city.value == "") {
        return;
    }
    else {
        getWeatherInfo();
    }
});

function displayTemperature(temperature){
    const cityName = temperature.name;
    document.getElementById ("displayCity").innerText = cityName;

    const tempInKelvin = temperature.main.temp;
    const kelvinToCelsius = (tempInKelvin - 273.15).toFixed(2);
    document.getElementById ("displayTemp").innerText = kelvinToCelsius;

    const condition = temperature.weather[0].main;
    document.getElementById("condition").innerText = condition;

    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById ("imgIcon").setAttribute ('src',url);
}
