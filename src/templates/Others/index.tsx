import Pallet, { PalletProps } from "components/Pallet";
import Toast from "components/Toast";

import { useState } from "react";

import * as S from "./styles";

export type OthersProps = {
  otherPallets: PalletProps[];
};

const Others = ({ otherPallets }: OthersProps) => {
  const [toasted, setToasted] = useState(false);

  return (
    <>
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
              setToasted={setToasted}
            />
          )
        )}
      </S.Wrapper>

      <Toast setToasted={setToasted} toasted={toasted} />
    </>
  );
};

export default Others;
