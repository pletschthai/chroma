import React from "react";

export default function WeatherInfo(props) {
  return (
    <section className="city mt-3">
      <div className="row">
        <div className="box">
          <h1 className="city">{props.data.city}</h1>
        </div>

        <div className="col">
          <span className="temperature">
            {Math.round(props.data.temperature)}
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
            {props.data.description}
          </span>
          <br />
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width="40"
          />
        </div>

        <div className="col mt-3">
          <div className="weatherInfo">
            <ul>
              <li id="humidity">Humidity: {props.data.humidity}%</li>
              <li id="wind">Wind: {props.data.wind} Km/h</li>
              <li id="feelsLike">Feels Like: {props.data.feelslike}°C</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
