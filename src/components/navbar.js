import React from 'react';
import { NavLink } from 'react-router-dom'
import style from '../styles/navbar.module.css';
import Logo from '../components/logo';

const Navbar = () => {
  return (
    <nav>
      <div className={style.navbar_background1} />
      <div className={style.navbar_background2} />
      <ul className={style.navbar__links}>
        <li><NavLink to="/" className={style.navbar__link}>Inicio</NavLink></li>
        <li><NavLink to="/" className={style.navbar__link}>Contacto</NavLink></li>
      </ul>
      <div className={style.navbar_logoWrapper}>
      </div>
      <ul className={style.navbar__links}>
        <li><NavLink to="/" className={style.navbar__link}>Otro</NavLink></li>
        <li><NavLink to="/" className={style.navbar__link}>Acerca de</NavLink></li>
      </ul>
      <Logo />
    </nav>
  );
};

export default Navbar;