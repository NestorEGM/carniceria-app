import React from 'react';
import style from '../styles/logo.module.css';

const Logo = ({ style: styleLine, invertColors = false }) => {
  // const [scrollY, setScrollY] = useState(0);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     const newScrollY = Math.ceil(window.scrollY / 2) * 2;
  //     setScrollY(newScrollY);
  //   };
  // });
  const logoStyle = invertColors ? style.logo_inverted : style.logo_normal;
  const textStyle = invertColors ? style.logo__text_inverted : style.logo__text_normal;
  return (
    <div className={`${style.logo} ${logoStyle}`} style={{
      ...styleLine,
      // top: scrollY < 100 ? -scrollY : -100,
      // opacity: scrollY < 100 ? 1 - (scrollY / 100) : 0,
    }}>
      <p className={`${style.logo__text} ${textStyle}`}>Carnicería App</p>
    </div>
  );
};

export default Logo;