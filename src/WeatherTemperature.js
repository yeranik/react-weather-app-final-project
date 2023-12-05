import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <div className="temperature" id="temp">
        {Math.round(props.celsius)}
      </div>
      <span className="units">C°</span>
    </div>
  );
}
