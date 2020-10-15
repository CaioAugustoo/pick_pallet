import React from 'react';
import Header from '../../Components/Header/Header';
import PalletDetails from '../../Components/PalletDetails/PalletDetails';

const PalletDetail = () => {
  document.title = 'Pick Pallet | Detalhes';
  return (
    <div>
      <Header />
      <PalletDetails />
    </div>
  );
};

export default PalletDetail;
