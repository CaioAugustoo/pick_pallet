import { PalletProps } from "components/Pallet";
import Button from "components/Button";
import Head from "components/Helper/Head";
import Others, { OthersProps } from "templates/Others";

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/format_date";

import * as S from "./styles";
import Toast from "components/Toast";
import { useState } from "react";

export type DetailsProps = PalletProps & OthersProps;

const Details = ({
  id,
  pallet1,
  pallet2,
  pallet3,
  pallet4,
  created_at,
  otherPallets,
}: DetailsProps) => {
  const [toasted, setToasted] = useState(false);
  return (
    <>
      <Head title="Detalhes" />
      <S.Wrapper>
        <S.BoxPallet>
          <S.PalletColors>
            <div style={{ backgroundColor: `${pallet1}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet1);
                  setToasted(true);
                }}
              >
                {pallet1}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet2}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet2);
                  setToasted(true);
                }}
              >
                {pallet2}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet3}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet3);
                  setToasted(true);
                }}
              >
                {pallet3}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet4}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet4);
                  setToasted(true);
                }}
              >
                {pallet4}
              </p>
            </div>
          </S.PalletColors>

          <S.Wrap>
            <Button
              onClick={() => {
                copyToClipboard(id, true), setToasted(true);
              }}
            >
              Link
            </Button>
            <S.PostedAt title={`Postada há ${formatDate(created_at)}`}>
              {formatDate(created_at)}
            </S.PostedAt>
          </S.Wrap>
        </S.BoxPallet>

        <Others otherPallets={otherPallets} />
      </S.Wrapper>
      <Toast toasted={toasted} setToasted={setToasted} />
    </>
  );
};

export default Details;
