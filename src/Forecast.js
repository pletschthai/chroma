import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="neon-cards">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="card text-center" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
