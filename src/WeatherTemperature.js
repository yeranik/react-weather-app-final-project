import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <div className="temperature" id="temp">
        {Math.round(props.celsius)}
        <span className="units">C°</span>
      </div>
    </div>
  );
}
