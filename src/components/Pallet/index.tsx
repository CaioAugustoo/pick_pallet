import { useState } from "react";
import { useRouter } from "next/dist/client/router";

import Toast from "components/Toast";
import Button from "components/Button"

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/format_date";

import * as S from "./styles";

export type PalletProps = {
  id: number;
  created_at: string;
  pallet1: string;
  pallet2: string;
  pallet3: string;
  pallet4: string;
  setToasted: (toasted: boolean) => void
};

const Pallet = ({
  id,
  created_at,
  pallet1,
  pallet2,
  pallet3,
  pallet4,
  setToasted
}: PalletProps) => {
  const { push } = useRouter();

  return (
    <>
      <S.BoxPallet>
        <S.PalletColors>
          <div style={{ backgroundColor: `${pallet1}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet1), setToasted(true);
              }}
            >
              {pallet1}
            </p>
          </div>
          <div style={{ backgroundColor: `${pallet2}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet2), setToasted(true);
              }}
            >
              {pallet2}
            </p>
          </div>
          <div style={{ backgroundColor: `${pallet3}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet3), setToasted(true);
              }}
            >
              {pallet3}
            </p>
          </div>
          <div style={{ backgroundColor: `${pallet4}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet4), setToasted(true);
              }}
            >
              {pallet4}
            </p>
          </div>
        </S.PalletColors>

        <S.Wrap>
          <Button onClick={() => push(`/pallet/${id}`)}>Detalhes</Button>

          <S.PostedAt
            className="pallet__date"
            title={`Postada há ${formatDate(created_at!)}`}
          >
            {formatDate(created_at!)}
          </S.PostedAt>
        </S.Wrap>
      </S.BoxPallet>
    </>
  );
};

export default Pallet;
