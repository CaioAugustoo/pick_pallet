import { GetServerSideProps } from "next";

import { PalletProps } from "components/Pallet";
import Details from "templates/Details";

import { GET_ALL_PALLETS, GET_PALLET_BY_ID } from "services/api";

type PalletDetailsProps = {
  pallet: PalletProps;
  otherPallets: PalletProps[]
};

const PalletDetails = ({ pallet, otherPallets }: PalletDetailsProps) => {
  return <Details {...pallet} otherPallets={otherPallets}/>;
};

export default PalletDetails;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { url: palletByIdEndpoint } = GET_PALLET_BY_ID(Number(params?.id));
  const { url: allPalletsEndpoint } = GET_ALL_PALLETS(12)

  const response1 = await fetch(palletByIdEndpoint);
  const pallet = await response1.json();

  const response2 = await fetch(allPalletsEndpoint);
  const otherPallets = await response2.json()

  return {
    props: {
      pallet,
      otherPallets
    },
  };
};
