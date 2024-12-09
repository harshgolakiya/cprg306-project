export async function fetchWeatherByPostalCode(postalCode) {
    const geocodeApiKey = '4bf9a0858c2e4057ac63db8f396c4a3d'; 
    const weatherApiKey = 'c854e47168d4e9004ad0a9200ddd27e4'; 
  
    try {
      // Fetch coordinates from the geocoding API
      const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(postalCode)}&key=${geocodeApiKey}`;
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();
      if (geocodeData.results.length === 0) {
        throw new Error('No geographic coordinates found for this postal code.');
      }
  
      const { lat, lng } = geocodeData.results[0].geometry;
  
      // Fetch weather data using the coordinates
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
  
      return weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
  