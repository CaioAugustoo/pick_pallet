import { useContext } from "react";
import { ToastContext } from "contexts/Toast";

import { PalletProps } from "components/Pallet";
import Button from "components/Button";
import Head from "components/Helper/Head";

import Others, { OthersProps } from "templates/Others";

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/format_date";

import * as S from "./styles";

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
  const { toast } = useContext(ToastContext);

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
                  toast();
                }}
              >
                {pallet1}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet2}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet2);
                  toast();
                }}
              >
                {pallet2}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet3}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet3);
                  toast();
                }}
              >
                {pallet3}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet4}` }}>
              <p
                onClick={() => {
                  copyToClipboard(pallet4);
                  toast();
                }}
              >
                {pallet4}
              </p>
            </div>
          </S.PalletColors>

          <S.Wrap>
            <Button
              onClick={() => {
                copyToClipboard(id, true), toast();
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
    </>
  );
};

export default Details;
