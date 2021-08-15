import Pallet, { IPallet } from "components/Pallet";

import * as S from "./styles";

export interface IOthers {
  otherPallets: IPallet[];
}

const Others = ({ otherPallets }: IOthers) => {
  return (
    <S.Wrapper>
      {otherPallets.map(
        ({ id, created_at, pallet1, pallet2, pallet3, pallet4 }) => (
          <Pallet
            key={id}
            id={id}
            created_at={created_at}
            pallet1={pallet1}
            pallet2={pallet2}
            pallet3={pallet3}
            pallet4={pallet4}
          />
        )
      )}
    </S.Wrapper>
  );
};

export default Others;
