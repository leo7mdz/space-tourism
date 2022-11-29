import React, { useState } from "react";
import style from "../components/technology.module.css";
import { technology } from "../data.json";

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const { name, images, description } = technology[technologyIndex];

  return (
    <div className={style.container}>
      <p className={style.title}>
        <span className={style.span}>03</span>space launch 101
      </p>

      <div className={style.containerBody}>
        <div>
          <picture>
            <source srcSet={images.portrait} media="(min-width : 991px)" />
            <img src={images.landscape} alt={name} />
          </picture>
        </div>
        <div className={style.containerTechnology}>
          <ul className={style.technologyList}>
            {technology.map((item, index) => (
              <li
                className={style.technologyItem}
                key={index}
                onClick={() => setTechnologyIndex(index)}
              >
                {index}
              </li>
            ))}
          </ul>
          <div className={style.technologyText}>
            <h4 className={style.generalTitle}>the terminology ...</h4>
            <h5 className={style.technologyTitle}>{name}</h5>
            <p className={style.technologyDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
