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
        












    })






}