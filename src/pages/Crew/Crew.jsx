import React, { useState } from "react";
import data from "../../data";
import "./crew.scss";
const Crew = () => {
  const crewNames = data.crew.map((c) => c.name);
  const [crew, setCrew] = useState("Douglas Hurley");
  const selectedCrew = data.crew.filter((d) => d.name === crew);
  const { name, images, role, bio } = selectedCrew[0];
  return (
    <div className="crew">
      <div className="crew__content">
        <div className="crew__content__subtitle subtitle">
          <span>02</span> MEET YOUR CREW
        </div>
        <div className="crew__content__image">
          <img
            src={images.png}
            alt=""
          />
        </div>
        <div className="crew__content__navigation">
          {crewNames.map((c) => (
            <div
              key={c}
              className={`tab ${c === crew ? "active" : ""}`}
              onClick={() => setCrew(c)}
              onTouchStart={() => setCrew(c)}
            ></div>
          ))}
        </div>
        <div className="crew__content__position">{role}</div>
        <div className="crew__content__title title">{name}</div>
        <div className="crew__content__description description">{bio}</div>
      </div>
    </div>
  );
};

export default Crew;
