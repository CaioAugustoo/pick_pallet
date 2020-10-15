import React from 'react'
import Header from '../../Components/Header/Header';
import NewPalletBox from '../../Components/NewPalletBox/NewPalletBox';

const Create = () => {
  document.title = 'Pick Pallet | Criar paleta';
  return (
    <div>
      <Header />
      <NewPalletBox />
    </div>
  );
};

export default Create;
