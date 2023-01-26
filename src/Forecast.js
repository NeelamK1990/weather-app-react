import React from "react";

export default function Forecast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          THURS
          <br />
          <i className="fa-solid fa-sun solid-sun"></i>
          <br />
          70°/50°F
        </div>
        <div className="col text-center">
          FRI
          <br />
          <i className="fa-solid fa-cloud-sun cloud-sun"></i>
          <br />
          71°/51°F
        </div>
        <div className="col text-center">
          SAT
          <br />
          <i className="fa-solid fa-cloud-sun-rain sun-rain"></i>
          <br />
          76°/64°F
        </div>
        <div className="col text-center">
          SUN
          <br />
          <i className="fa-solid fa-cloud-sun cloud-sun"></i>
          <br />
          76°/61°F
        </div>
        <div className="col text-center">
          MON
          <br />
          <i className="fa-solid fa-sun solid-sun"></i>
          <br />
          75°/57°F
        </div>
        <div className="col text-center">
          TUE
          <br />
          <i className="fa-solid fa-cloud solid-cloud"></i>
          <br />
          68°/51°F
        </div>
      </div>
    </div>
  );
}
