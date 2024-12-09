"use client";

export default function DisplayWeather({ weather }) {
  return (
    <div className="bg-sky-400 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-gray-700">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather Information</h1>
        {weather ? (
          <div className="space-y-2">
            <h2 className="text-xl font-bold mb-2">Weather in {weather.name}</h2>
            <p>Temperature: <span className="font-semibold">{weather.main.temp}°C</span></p>
            <p>Description: <span className="font-semibold">{weather.weather[0].description}</span></p>
            <p>Humidity: <span className="font-semibold">{weather.main.humidity}%</span></p>
            <p>Wind Speed: <span className="font-semibold">{weather.wind.speed} m/s</span></p>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading weather data...</p>
        )}
      </div>
    </div>
  );
}
