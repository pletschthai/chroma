import React from "react";

import WeatherIcon from "./WeatherIcon";
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
          <WeatherIcon code={props.data.icon} />
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
