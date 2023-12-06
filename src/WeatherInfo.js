import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="WeatherInfo">
        <div>
          <h1>{props.data.city}</h1>

          <li>
            <FormattedDate date={props.data.date} />
            <span className="weatherDescription text-capitalize" id="des">
              {props.data.description}
            </span>
          </li>
          <img
            src={props.data.icon}
            alt={props.data.description}
            id="icon-Main"
            className="iconCanvas"
          />

          <div className="d-inline-flex">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="weather-information ">
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
        <br />
      </div>
    </div>
  );
}
