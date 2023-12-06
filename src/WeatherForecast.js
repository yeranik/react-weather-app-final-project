import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row justify-content-sm-center">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="col-sm-4 ">
                <div className="weatherForecastPreview p-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "b42f62837taf0ecb256c3b1a678caof5";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
