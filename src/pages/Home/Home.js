import React from 'react'
import Header from '../../Components/Header/Header'
import PalletBox from '../../Components/PalletBox/PalletBox'

const Home = () => {
  document.title = 'Pick Pallet | Uma coleção de paletas';
  return (
    <div>
      <Header />
      <PalletBox />
    </div>
  );
};

export default Home;
