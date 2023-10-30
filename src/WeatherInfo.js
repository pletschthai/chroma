import React from "react";

export default function WeatherInfo() {
  return (
    <section className="city mt-3">
      <div className="row">
        <div className="box">
          <h1 className="city">{weatherData.city}</h1>
        </div>

        <div className="col">
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="units">
            <a href="/" className=" celsius-link active">
              °C
            </a>{" "}
            |
            <a href="/" className="fahrenheit-link">
              °F
            </a>
          </span>
        </div>

        <div className="col mt-3">
          <span className=" description text-capitalize">
            {weatherData.description}
          </span>
          <br />
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            width="40"
          />
        </div>

        <div className="col mt-3">
          <div className="weatherInfo">
            <ul>
              <li id="humidity">Humidity: {weatherData.humidity}%</li>
              <li id="wind">Wind: {weatherData.wind} Km/h</li>
              <li id="feelsLike">Feels Like: {weatherData.feelslike}°C</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
