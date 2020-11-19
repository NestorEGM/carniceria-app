import React from 'react';
import Navbar from '../components/navbar';
import CoverPage from '../components/coverPage';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <CoverPage />
      </header>
      <div style={{
        // paddingTop: 50,
      }}>
        <div style={{
          height: '150vh',
          backgroundColor: 'gray'
        }}>
        </div>

      </div>
      <a href='https://www.freepik.es/fotos/comida'>Foto de Comida creado por jannoon028 - www.freepik.es</a>
    </div>
  );
};

export default Home;