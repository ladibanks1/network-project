document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = "YOUR_API_KEY"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('cityName').innerText = cityName;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('description').innerText = `Description: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('cityName').innerText = 'Error';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
        });
});
