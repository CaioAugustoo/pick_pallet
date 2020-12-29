import React from "react";
import Header from "../../Components/Header/Header";
import Head from "../../Components/Helper/Head/Head";
import PalletDetails from "../../Components/PalletDetails/PalletDetails";

const PalletDetail = () => {
  return (
    <>
      <Head title="Detalhes" />
      <Header />
      <PalletDetails />
    </>
  );
};

export default PalletDetail;
