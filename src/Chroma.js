import React, { useState } from "react";
import "./Chroma.css";
import axios from "axios";

export default function Chroma(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function apiResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="shadow">
            <br />
            <div className="row">
              <div className="col">
                <div className="date text-center">
                  <span id="date">October 19, 2023</span>
                </div>
              </div>
              <div className="col-3 time">10:23</div>
              <section className="mt-3">
                <div className="row form">
                  <div className="col text-center">
                    <form className="search-form">
                      <input
                        type="search"
                        placeholder="Type a city.."
                        className="form-control custom-btn btn-13"
                      />

                      <button
                        type="submit"
                        value="search"
                        className="custom-btn btn-13"
                      >
                        Search
                      </button>
                      <img
                        src="https://www.iconpacks.net/icons/2/free-location-map-icon-2956-thumb.png"
                        alt="Geolocation Pin"
                        className="geoPin"
                        width="60"
                      />
                    </form>
                  </div>
                </div>
              </section>

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
                    <span className=" descriptiontext-capitalize">
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
                        <li id="feelsLike">
                          Feels Like: {weatherData.feelslike}°C
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="forecast">Forecast for next 7 days</section>
              <footer>
                <a
                  href="https://github.com/pletschthai/chroma"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Sourced on GitHub
                </a>{" "}
                by Thaina Hu
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c76db1bd2c2a808bab15d20555e59a59";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(apiResponse);
    return "Loading...";
  }
}
