;(function getAlerts() {
    fetch('https://api.weather.gov/alerts?active=1&point=43.07,-89.40')
        .then(res => res.json())
        .then(alerts => {
            // Get current weather data
            let eventType = alerts.features[0]['properties'].event;

            // Embed weather data variables in the DOM
            document.getElementById('eventType').innerHTML = eventType;
        })
        .catch(err => console.log(err))
})();