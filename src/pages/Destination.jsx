import React, { useState } from "react";
import { destinations } from "../data.json";
import style from "../components/destination.module.css";

const Destination = () => {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planets = destinations;
  const { name, images, description, distance, travel } = planets[planetIndex];

  return (
    <div className={style.container}>
      <p className={style.title}>
        <span className={style.span}>01</span>pick your destination
      </p>
      <div className={style.containerBody}>
        <div className={style.containerPlanet}>
          <img className={style.imgPlanet} src={images.png} alt={name} />
        </div>

        <article className={style.planetText}>
          <ul className={style.planetList}>
            {planets.map((planet, index) => (
              <li
                className={style.planetItem}
                key={index}
                onClick={() => setPlanetIndex(index)}
              >
                {planet.name}
              </li>
            ))}
          </ul>
          <h1 className={style.planetName}>{name}</h1>
          <p className={style.planetDescription}>{description}</p>
          <div className={style.containerInfo}>
            <div className={style.containerDistance}>
              <h5 className={style.distanceTitle}>avg. distance </h5>
              <p className={style.distance}>{distance}</p>
            </div>
            <div className={style.containerTravel}>
              <h5 className={style.travelTitle}>est. travel time</h5>
              <p className={style.travel}>{travel}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Destination;
