;(function getCurrents() {
    fetch('https://api.weather.gov/stations/KMSN/observations/current')
    .then(res => res.json())
    .then(obs => {
        // Get current weather data
        let tCelsius = obs.properties.temperature.value;
        let wDir = obs.properties.windDirection.value;
        let wSpd = obs.properties.windSpeed.value;
        
        // Make temperature conversion
        let temperature = convertTemperature(tCelsius);
        let tFahrenheit = temperature.fahrenheit

        // Convert wind direction to 8-point compass rose
        let windDirection = convertDirection(wDir);

        // Convert wind speed from ms^-1 to mph
        let windSpeed = convertMsToMph(wSpd);

        // Embed weather data variables in the DOM
        document.getElementById('output').innerHTML = tFahrenheit + '&deg;'
    })
    .catch(err => console.log(err))
})();