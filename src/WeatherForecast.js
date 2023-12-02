import React from "react";

export default function WeatherForecast() {
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
              <span className="forecast-temperature-min"> min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
