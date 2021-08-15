import { useRouter } from "next/router";

import * as S from "./styles";

export interface IPallet {
  id: number;
  created_at: string;
  pallet1: string;
  pallet2: string;
  pallet3: string;
  pallet4: string;
  onClick?: () => void;
}

const FavoritePallet = (data: IPallet) => {
  return (
    <>
      <S.BoxPallet small>
        <S.PalletColors small>
          <div
            className="pallet_1"
            style={{ backgroundColor: `${data.pallet1}` }}
          />

          <div
            className="pallet_2"
            style={{ backgroundColor: `${data.pallet2}` }}
          />

          <div
            className="pallet_3"
            style={{ backgroundColor: `${data.pallet3}` }}
          />

          <div
            className="pallet_4"
            style={{ backgroundColor: `${data.pallet4}` }}
          />
        </S.PalletColors>
      </S.BoxPallet>
    </>
  );
};

export default FavoritePallet;
