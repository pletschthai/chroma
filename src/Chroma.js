import React, { useState } from "react";
import "./Chroma.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherInfo from "./WeatherInfo";

export default function Chroma(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function apiResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c76db1bd2c2a808bab15d20555e59a59";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(apiResponse);
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
                  <span id="date">
                    <FormattedDate date={weatherData.date} />
                  </span>
                </div>
              </div>
              <div className="col-3 time">
                <FormattedHour hour={weatherData.date} />
              </div>
              <section className="mt-3">
                <div className="row form">
                  <div className="col text-center">
                    <form className="search-form" onSubmit={handleSubmit}>
                      <input
                        type="search"
                        placeholder="Type a city.."
                        className="form-control custom-btn btn-13"
                        onChange={handleCityChange}
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
              <WeatherInfo data={weatherData} />

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
    search();
    return "Loading...";
  }
}
