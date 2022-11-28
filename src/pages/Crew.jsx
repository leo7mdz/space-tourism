import React, { useState } from "react";
import style from "../components/crew.module.css";
import { crew } from "../data.json";
import { FaCircle } from "react-icons/fa";

const Crew = () => {
  const [personsIndex, setPersonsIndex] = useState(0);
  const { name, images, role, bio } = crew[personsIndex];
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        <span className={style.span}>02</span>meet your crew
      </h2>
      <div className={style.containerBody}>
        <div className={style.containerImg}>
          <img className={style.imgPerson} src={images.webp} alt={name} />
        </div>

        <article className={style.personText}>
          <ul className={style.personList}>
            {crew.map((person, index) => (
              <li
                key={index}
                className={style.personItem}
                onClick={() => setPersonsIndex(index)}
              >
                <FaCircle className={style.circle} />
              </li>
            ))}
          </ul>
          <div className={style.containerInfo}>
            <h3 className={style.role}>{role}</h3>
            <h4 className={style.name}>{name}</h4>
            <p className={style.bio}>{bio}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Crew;
