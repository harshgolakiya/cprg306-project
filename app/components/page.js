"use client";
import { useState } from 'react';
import PostalCodeInput from './postal_code_input';
import DisplayWeather from './display_weather';
import { fetchWeatherByPostalCode } from './weather_fetch';

export default function Page() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handlePostalCodeSubmit = async (postalCode) => {
    try {
      const weatherData = await fetchWeatherByPostalCode(postalCode);
      setWeather(weatherData);
      setError('');
    } catch (err) {
      setError('Error fetching weather data.');
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-400 text-black p-6">
      {!weather && !error && <PostalCodeInput onSubmit={handlePostalCodeSubmit} />}
      {weather && <DisplayWeather weather={weather} />}
      {error && <p className="text-red-500 text-lg font-semibold text-center">{error}</p>}
    </div>
  );
}
