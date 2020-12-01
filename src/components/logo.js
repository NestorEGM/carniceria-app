import React from 'react';
import style from '../styles/logo.module.css';

const Logo = ({ style: styleLine }) => {
  // const [scrollY, setScrollY] = useState(0);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     const newScrollY = Math.ceil(window.scrollY / 2) * 2;
  //     setScrollY(newScrollY);
  //   };
  // });
  return (
    <div className={style.logo} style={{
      ...styleLine,
      // top: scrollY < 100 ? -scrollY : -100,
      // opacity: scrollY < 100 ? 1 - (scrollY / 100) : 0,
    }}>
      <p className={style.logo__text}>Carnicería App</p>
    </div>
  );
};

export default Logo;