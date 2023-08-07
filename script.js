// fetch weather data for city entered buy user
function fetchWeather() {
    //get city name from input field
    const cityName = document.getElementById('cityInput').value;

    //if city name empty, return without doing anything
    if (!cityName) return;

    // the API URl with our API key and city name

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a9042d63ba4ea392d44f3d4175a0d8d0`;

// using fetch to get data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // display the city name
        document.getElementById('cityName').innerText = data.name;

        // convert temperature from kelvin to fahrenheit
        const highTemp = ((data.main.temp_max - 273.15) * 9/5 +32).toFixed(2);
        const lowTemp = ((data.main.temp_min - 273.15) * 9/5 +32).toFixed(2);

        //display the weather data
        document.querySelector('#high span').innerText = highTemp + "°F";
        document.querySelector('#low span').innerText = lowTemp + "°F";
        document.querySelector('#forecast span').innerText = data.weather[0].description;
        document.querySelector('#humidity span').innerText = data.main.humidity













    })






}