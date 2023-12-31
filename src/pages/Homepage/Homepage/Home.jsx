import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__infos">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home__content__link">
          <Link
            className="home__content__link__explore"
            to="/destination"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
