import React, { useState, useEffect } from 'react';

export default function WeatherAPI() {
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true');
        const data = await response.json();
        
        if (!response.ok) throw new Error("Unable to fetch weather");
        
        setTemp(data.current_weather.temperature);
        setCondition(`Wind Speed: ${data.current_weather.windspeed} km/h`); 
      } catch (err) {
        setError("Something went wrong!");
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {temp !== null && (
        <>
          <p>Temperature: {temp}°C</p>
          <p>Condition: {condition}</p>
        </>
      )}
    </div>
  );
}