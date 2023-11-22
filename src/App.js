import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://mx.linkedin.com/in/yeranik"
            target="_blank"
            rel="noreferrer"
          >
            Yerani K.{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/yeranik/react-weather-app-final-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}