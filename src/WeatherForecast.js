import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <div className="weatherForecastPreview p-3">
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
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
