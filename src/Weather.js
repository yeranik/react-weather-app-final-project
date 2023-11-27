import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="row">
          <div className="col-4">
            <h1>New York</h1>
            <li>
              <span id="date">Friday 05:00</span>,
              <span className="weatherDescription" id="des">
                clear sky
              </span>
            </li>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              id="icon-Main"
              className="iconCanvas"
            />
            <div className="d-inline-flex">
              <div className="temperature" id="temp">
                28
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
                Humidity: <strong id="humidity-Element">85</strong>
                <strong> %</strong>, Wind:
                <strong className="windSpeed" id="wind-Speed">
                  2.7
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
                      id="enter-City"
                    />

                    <input
                      className="btn btn-primary btn-sm"
                      type="submit"
                      value="Search"
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
}
