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
  const { push } = useRouter();

  function handleNavigateToPallet() {
    push(`/pallet/${data.id}`);
  }

  return (
    <>
      <S.BoxPallet small className="favorite" onClick={handleNavigateToPallet}>
        <S.PalletColors small>
          <div
            className="pallet_1 small"
            style={{ backgroundColor: `${data.pallet1}` }}
          />

          <div
            className="pallet_2 small"
            style={{ backgroundColor: `${data.pallet2}` }}
          />

          <div
            className="pallet_3 small"
            style={{ backgroundColor: `${data.pallet3}` }}
          />

          <div
            className="pallet_4 small"
            style={{ backgroundColor: `${data.pallet4}` }}
          />
        </S.PalletColors>
      </S.BoxPallet>
    </>
  );
};

export default FavoritePallet;
