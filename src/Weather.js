import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" class="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overlook">
            <h1 id="city">Philadelphia</h1>
            <ul>
              <li>
                Last updated :<span id="date"> 9:22 AM</span>
              </li>
              <li id="description">Cloudy</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <div>
                  <img src="" alt="Cloudy" id="icon" />
                  <strong id="temperature">8</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span>km/hr
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/NeelamK1990/Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Neelam Katwal
        </small>
      </div>
    </div>
  );
}
