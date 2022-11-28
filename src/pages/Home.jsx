import React from "react";
import { Link } from "react-router-dom";
import style from "../components/home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.containerText}>
        <h3 className={style.title}>SO, YOU WANT TO TRAVEL TO</h3>
        <h5 className={style.span}>SPACE</h5>
        <p className={style.paragraph}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link className={style.exploreLink} to="/destination">
        <div className={style.explore}>Explore</div>
      </Link>
    </div>
  );
};

export default Home;
