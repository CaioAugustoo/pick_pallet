import Pallet, { IPallet } from "components/Pallet";

import * as S from "./styles";

export interface IOthers {
  otherPallets: IPallet[];
}

const Others = ({ otherPallets }: IOthers) => {
  return (
    <S.Wrapper>
      {otherPallets.map(pallet => (
        <Pallet key={pallet.id} {...pallet} />
      ))}
    </S.Wrapper>
  );
};

export default Others;
