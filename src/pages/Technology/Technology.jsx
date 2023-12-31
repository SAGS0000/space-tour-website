import React, { useEffect, useState } from "react";
import data from "../../data";
import "./technology.scss";
const Technology = () => {
  const technologyNames = data.technology.map((t) => t.name);
  const [technology, setTechnology] = useState("Launch vehicle");
  const selectedTechnology = data.technology.filter(
    (t) => t.name === technology
  );
  const { name, images, description } = selectedTechnology[0];

  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="technology">
      <div className="technology__content">
        <div className="technology__content__subtitle subtitle">
          <span>03</span> SPACE LAUNCH 101
        </div>
        <div className="technology__content__image">
          <img
            src={mobile ? images.landscape : images.portrait}
            alt=""
          />
        </div>
        <div className="technology__content__navigation">
          {technologyNames.map((t, index) => (
            <div
              key={t}
              className={`tab ${t === technology ? "active" : ""}`}
              onClick={() => setTechnology(t)}
              onTouchStart={() => setTechnology(t)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="technology__content__subheading">
          THE TERMINOLOGY ...
        </div>
        <div className="technology__content__title title">{name}</div>
        <div className="technology__content__description description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Technology;
