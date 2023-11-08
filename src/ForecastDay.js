import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°  `;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-content">
        <div className="weather-forecast-date">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={11} />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">
            {maxTemperature()}
          </span>
          <span className="weather-forecast-temperature-min">
            {minTemperature()}
          </span>
        </div>
      </div>
    </div>
  );
}
