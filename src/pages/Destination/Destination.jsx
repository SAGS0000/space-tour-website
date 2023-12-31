import "./destination.scss";
import data from "../../data";
import { useState } from "react";
const Destination = () => {
  const [planet, setPlanet] = useState("Moon");
  const selectedPlanet = data.destinations.filter(
    (destination) => destination.name === planet
  );
  const { name, images, description, distance, travel } = selectedPlanet[0];
  console.log(selectedPlanet);
  const planetNames = data.destinations.map((d) => d.name);

  return (
    <div className="destination">
      <div className="destination__content">
        <h2 className="destination__content__subtitle">
          <span>01</span> PICK YOUR DESTINATION
        </h2>
        <div className="destination__content__image">
          <img
            src={images.png}
            alt=""
          />
        </div>
        {/* <div className="right"> */}
        <div className="destination__content__navigation">
          {planetNames.map((p) => (
            <div
              key={p}
              className={`tab ${p === planet ? "active" : ""}`}
              onClick={() => setPlanet(p)}
              onTouchStart={() => setPlanet(p)}
            >
              {p}
            </div>
          ))}
        </div>
        <h1 className="destination__content__title">{name}</h1>
        <p className="destination__content__description">{description}</p>
        <div className="destination__content__info">
          <div className="distance">
            <p>AVG. DISTANCE</p>
            <h1>{distance}</h1>
          </div>
          <div className="time">
            <p>EST. TRAVEL TIME</p>
            <h1>{travel}</h1>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Destination;
