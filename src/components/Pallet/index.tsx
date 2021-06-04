import { useContext } from "react";
import { useRouter } from "next/router";

import Button from "components/Button";

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/format_date";

import { ToastContext } from "contexts/toastContext";

import * as S from "./styles";

export type PalletProps = {
  id: number;
  created_at: string;
  pallet1: string;
  pallet2: string;
  pallet3: string;
  pallet4: string;
};

const Pallet = ({
  id,
  created_at,
  pallet1,
  pallet2,
  pallet3,
  pallet4,
}: PalletProps) => {
  const { push } = useRouter();
  const { toast } = useContext(ToastContext);

  return (
    <>
      <S.BoxPallet>
        <S.PalletColors>
          <div style={{ backgroundColor: `${pallet1}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet1), toast();
              }}
            >
              {pallet1}
            </p>
          </div>
          <div style={{ backgroundColor: `${pallet2}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet2), toast();
              }}
            >
              {pallet2}
            </p>
          </div>
          <div style={{ backgroundColor: `${pallet3}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet3), toast();
              }}
            >
              {pallet3}
            </p>
          </div>
          <div style={{ backgroundColor: `${pallet4}` }}>
            <p
              onClick={() => {
                copyToClipboard(pallet4), toast();
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
