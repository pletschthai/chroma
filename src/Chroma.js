import React from "react";
import "./Chroma.css";

export default function Chroma() {
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
            <section form className="mt-3">
              <div className="row form">
                <div className="col text-center">
                  <form className="search-form" i>
                    <input
                      type="search"
                      placeholder="Type a city.."
                      autofocus="on"
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
                  <h1 className="city">Denver</h1>
                </div>

                <div className="col">
                  <span className="temperature">22°</span>
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
                  <span className="description">Sunny</span>
                  <br />
                  <img
                    src="https://openweathermap.org/img/wn/01d@2x.png"
                    alt="Clear"
                    width="40"
                  />
                </div>

                <div className="col mt-3">
                  <div className="weatherInfo">
                    <ul>
                      <li id="humidity">Humidity:</li>
                      <li id="wind">Wind:</li>
                      <li id="feelsLike">Feels Like:</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="forecast">Forecast for next 7 days</section>
          </div>
        </div>
      </div>
    </div>
  );
}
