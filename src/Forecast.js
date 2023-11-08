import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="neon-cards">
        <div className="WeatherForecast">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="card text-center" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c76db1bd2c2a808bab15d20555e59a59";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
