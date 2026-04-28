import { useState, useEffect } from "react";

export default function WeatherApp() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        // Using fetch (AJAX) to load local JSON data
        fetch("/src/data/weather.json")
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch((error) => console.error("Error fetching weather:", error));
    }, []);

    return (
        <div>
            <h1>Weather App</h1>
            <table border="1" cellPadding="10" style={{borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    {weather.map((weather, index) => (
                        <tr key={index}>
                            <td>{weather.temperature}</td>
                            <td>{weather.humidity}</td>
                            <td>{weather.condition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
