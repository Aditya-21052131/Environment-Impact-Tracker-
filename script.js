document.addEventListener('DOMContentLoaded', function() {
    const city = 'London'; // Change this to the desired city

    fetch(`http://127.0.0.1:5000/weather/${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Display the weather data in the console
            const weatherInfo = document.getElementById('weather-info');
            if (data.main && data.weather) {
                weatherInfo.textContent = `Temperature in ${city}: ${data.main.temp}K, Weather: ${data.weather[0].description}`;
            } else {
                weatherInfo.textContent = 'Weather data not available';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.textContent = 'Error fetching weather data';
        });
});