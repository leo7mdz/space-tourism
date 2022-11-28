import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconMenu from "../assets/shared/icon-hamburger.svg";
import Logo from "../assets/shared/logo.svg";
import IconClose from "../assets/shared/icon-close.svg";
import style from "../components/header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.header}>
      <img className={style.logo} src={Logo} alt="logo" />
      <div className={style.iconMenu} onClick={openMenu}>
        <img src={IconMenu} alt="icon menu" />
      </div>

      <nav className={`${style.nav} ${isOpen && style.active} `}>
        <img
          className={style.iconClose}
          src={IconClose}
          alt="icono de cierre"
          onClick={closeMenu}
        />
        <ul className={style.menu}>
          <li className={style.menuList}>
            <span className={style.menuSpan}>00</span>
            <Link
              className={style.menuLink}
              onClick={() => setIsOpen(!isOpen)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={style.menuList}>
            <span className={style.menuSpan}>01</span>
            <Link
              className={style.menuLink}
              onClick={() => setIsOpen(!isOpen)}
              to="/destination"
            >
              Destination
            </Link>
          </li>
          <li className={style.menuList}>
            <span className={style.menuSpan}>02</span>
            <Link
              className={style.menuLink}
              onClick={() => setIsOpen(!isOpen)}
              to="/crew"
            >
              Crew
            </Link>
          </li>
          <li className={style.menuList}>
            <span className={style.menuSpan}>03</span>
            <Link
              className={style.menuLink}
              onClick={() => setIsOpen(!isOpen)}
              to="/technology"
            >
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
