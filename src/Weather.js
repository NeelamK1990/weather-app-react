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
                  <i className="fa-solid fa-cloud-showers-heavy"></i>
                  <strong id="temperature">8</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">45</span>%
                </li>
                <li>
                  Wind: <span id="wind">10</span>km/hr
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <div>
          <div className="row">
            <div className="col text-center">
              THURS
              <br />
              <i className="fa-solid fa-sun solid-sun"></i>
              <br />
              12°C
            </div>
            <div className="col text-center">
              FRI
              <br />
              <i className="fa-solid fa-cloud-sun cloud-sun"></i>
              <br />
              10°C
            </div>
            <div className="col text-center">
              SAT
              <br />
              <i className="fa-solid fa-cloud-sun-rain sun-rain"></i>
              <br />
              7°C
            </div>
            <div className="col text-center">
              SUN
              <br />
              <i className="fa-solid fa-cloud-sun cloud-sun"></i>
              <br />
              9°C
            </div>
            <div className="col text-center">
              MON
              <br />
              <i className="fa-solid fa-sun solid-sun"></i>
              <br />
              11°C
            </div>
            <div className="col text-center">
              TUE
              <br />
              <i className="fa-solid fa-cloud solid-cloud"></i>
              <br />
              6°C
            </div>
          </div>
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
