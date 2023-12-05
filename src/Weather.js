import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    const res = response.data;
    setWeatherData({
      city: res.city,
      ready: true,
      coordinates: res.coordinates,
      temperature: res.temperature.current,
      description: res.condition.description,
      date: new Date(res.time * 1000),
      humidity: res.temperature.humidity,
      wind: res.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${res.condition.icon}.png`,
    });
  }

  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b42f62837taf0ecb256c3b1a678caof5&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-4">
              <WeatherInfo data={weatherData} />
              <div className="row">
                <form id="search-form" onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <div className="d-inline-flex p-2">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        autoFocus="on"
                        placeholder="Enter city"
                        id="city"
                        onChange={updateCity}
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
            <div className="col-8">
              <WeatherForecast coordinates={weatherData.coordinates} />
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
