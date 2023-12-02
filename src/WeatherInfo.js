import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-4">
            <h1>{props.data.city}</h1>

            <li>
              <FormattedDate date={props.data.date} />
              <span className="weatherDescription text-capitalize" id="des">
                {props.data.description}
              </span>
            </li>
            <WeatherIcon />

            <img
              src={props.data.icon}
              alt=""
              id="icon-Main"
              className="iconCanvas"
            />

            <div className="d-inline-flex">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="weather-information">
              <li>
                Humidity:{" "}
                <strong id="humidity-Element">{props.data.humidity}</strong>
                <strong> %</strong>, Wind:
                <strong className="windSpeed" id="wind-Speed">
                  {props.data.wind}
                </strong>
                <strong> km/h</strong>
              </li>
            </div>
          </div>
          <div className="col-8" id="forecast"></div>
        </div>
        <br />
      </div>
    </div>
  );
}
