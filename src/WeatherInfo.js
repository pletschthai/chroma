import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <section className="city mt-3">
      <div className="row">
        <div className="box">
          <h1 className="city">{props.data.city}</h1>
        </div>

        <div className="col">
          <span className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
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
