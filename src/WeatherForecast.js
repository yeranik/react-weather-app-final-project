import React from "react";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "b42f62837taf0ecb256c3b1a678caof5";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row justify-content-md-center">
        <div className="col-sm-4">
          <div className="weatherForecastPreview p-3">
            <div className="forecast-day">day</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                forecastDay.condition.icon
              }.png"
              alt=""
              width="52px"
              height="52"
            />
            <div className="forecast-temperature">
              <span className="forecast-temperature-max">max°</span>
              <span className="forecast-temperature-min"> min°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
