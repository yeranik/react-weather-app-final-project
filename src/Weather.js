import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    const res = response.data;
    setWeatherData({
      city: res.city,
      ready: true,
      temperature: res.temperature.current,
      description: res.condition.description,
      date: "Friday 07:10",
      humidity: res.temperature.humidity,
      wind: res.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${res.condition.icon}.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-4">
              <h1>{weatherData.city}</h1>

              <li>
                <span id="date">{weatherData.date}</span>,
                <span className="weatherDescription text-capitalize" id="des">
                  {weatherData.description}
                </span>
              </li>
              <img
                src={weatherData.icon}
                alt=""
                id="icon-Main"
                className="iconCanvas"
              />
              <div className="d-inline-flex">
                <div className="temperature" id="temp">
                  {Math.round(weatherData.temperature)}
                </div>
                <span className="units">
                  <a href="#" id="celsius-Link" className="active">
                    C°
                  </a>
                  |
                  <a href="#" id="farenheit-link">
                    F°
                  </a>
                </span>
              </div>
              <div className="weather-information">
                <li>
                  Humidity:{" "}
                  <strong id="humidity-Element">{weatherData.humidity}</strong>
                  <strong> %</strong>, Wind:
                  <strong className="windSpeed" id="wind-Speed">
                    {weatherData.wind}
                  </strong>
                  <strong> km/h</strong>
                </li>
              </div>

              <div className="row">
                <form id="search-form">
                  <div className="d-flex justify-content-center">
                    <div className="d-inline-flex p-2">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        autocomplete="off"
                        placeholder="Enter city"
                        id="city"
                      />

                      <input
                        className="btn btn-primary btn-sm"
                        type="submit"
                        value="Search"
                        id="search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-8" id="forecast"></div>
          </div>
          <br />
        </div>
      </div>
    );
  } else {
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=b42f62837taf0ecb256c3b1a678caof5&units=metric`;
    axios.get(url).then(showTemperature);

    return "Loading...";
  }
}
