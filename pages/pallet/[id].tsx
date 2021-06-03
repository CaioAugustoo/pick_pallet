import { GetServerSideProps } from "next";

import { PalletProps } from "components/Pallet";
import Details from "templates/Details";

import { GET_PALLET_BY_ID } from "services/api";

type PalletDetailsProps = {
  pallet: PalletProps;
};

const PalletDetails = ({ pallet }: PalletDetailsProps) => {
  return <Details {...pallet} />;
};

export default PalletDetails;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { url } = GET_PALLET_BY_ID(Number(params?.id));

  const res = await fetch(url);
  const pallet = await res.json();

  return {
    props: {
      pallet,
    },
  };
};
