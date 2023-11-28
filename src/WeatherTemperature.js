import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature" id="temp">
          {Math.round(props.celsius)}
        </div>
        <span className="units">
          C°| {""}
          <a href="/" id="farenheit-link" onClick={showFarenheit}>
            F°
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temperature" id="temp">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </div>
        <span className="units">
          <a
            href="/"
            id="celsius-Link"
            className="active"
            onClick={showCelsius}
          >
            C°
          </a>
          {""}
          |F°
        </span>
      </div>
    );
  }
}
