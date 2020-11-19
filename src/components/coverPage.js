import React from 'react';
import style from '../styles/coverPage.module.css';

const img = '/assets/img/header-home.jpg';

const CoverPage = () => {
  return (
    <div className={style.coverPage} style={{ backgroundImage: `url(${img})` }}>
      {/* <div style={{
        position: 'absolute',
        height: '270%',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '70vh',
      }}>
        <button style={{
          position: 'sticky',
          top: 25,
          // left: '50%',
          // transform: 'translateX(-50%)',
          height: 50,
        }}>
          Haz tu pedido!
        </button>
      </div> */}
      <div className={`${style.coverPage__textWrapper}`}>
        <h1 className={`${style.coverPage__text1} ${style.getin}`} data-text="El mejor corte lo encuentras aqui!">El mejor corte lo encuentras aqui!</h1>
        <button className={`${style.orderButton} ${style.buttonEntrance}`} onClick={() => {
          console.log('Click!!!!!!!!!!!!!!');
        }}>
          Haz tu pedido!
        </button>
      </div>
    </div>
  );
};
export default CoverPage;