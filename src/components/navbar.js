import React from 'react';
import { NavLink } from 'react-router-dom'
import style from '../styles/navbar.module.css';

const Navbar = () => {
  // const [scrollY, setScrollY] = useState(0);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     const newScrollY = Math.ceil(window.scrollY / 2) * 2;
  //     setScrollY(newScrollY);
  //   };
  // });
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
      <div className={style.navbar__logo} style={{
        // top: scrollY < 100 ? -scrollY : -100,
        // opacity: scrollY < 100 ? 1 - (scrollY / 100) : 0,
      }}>
        <p className={style.navbar__logo__text}>Carnicería App</p>
      </div>
    </nav>
  );
};

export default Navbar;