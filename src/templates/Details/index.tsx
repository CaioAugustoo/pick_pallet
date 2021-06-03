import { PalletProps } from "components/Pallet";
import Button from "components/Button";
import Head from "components/Helper/Head";

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/format_date";

import * as S from "./styles";

const Details = ({
  id,
  pallet1,
  pallet2,
  pallet3,
  pallet4,
  created_at,
}: PalletProps) => {
  return (
    <>
      <Head title="Detalhes" />
      <S.Wrapper>
        <S.BoxPallet>
          <S.PalletColors>
            <div style={{ backgroundColor: `${pallet1}` }}>
              <p onClick={() => copyToClipboard(pallet1)}>{pallet1}</p>
            </div>
            <div style={{ backgroundColor: `${pallet2}` }}>
              <p onClick={() => copyToClipboard(pallet2)}>{pallet2}</p>
            </div>
            <div style={{ backgroundColor: `${pallet3}` }}>
              <p onClick={() => copyToClipboard(pallet3)}>{pallet3}</p>
            </div>
            <div style={{ backgroundColor: `${pallet4}` }}>
              <p onClick={() => copyToClipboard(pallet4)}>{pallet4}</p>
            </div>
          </S.PalletColors>

          <S.Wrap>
            <Button onClick={() => copyToClipboard(id, true)}>Link</Button>
            <S.PostedAt title={`Postada há ${formatDate(created_at)}`}>
              {formatDate(created_at)}
            </S.PostedAt>
          </S.Wrap>
        </S.BoxPallet>
      </S.Wrapper>
    </>
  );
};

export default Details;
