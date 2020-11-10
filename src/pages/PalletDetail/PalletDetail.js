import React from 'react';
import Header from '../../Components/Header/Header';
import Head from "../../Components/Helper/Head/Head";
import PalletDetails from '../../Components/PalletDetails/PalletDetails';

const PalletDetail = () => {
  document.title = 'Pick Pallet | Detalhes';
  return (
    <div>
      <Head title="Detalhes" />
      <Header />
      <PalletDetails />
    </div>
  );
};

export default PalletDetail;
