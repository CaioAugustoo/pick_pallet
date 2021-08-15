import toast from "react-hot-toast";

import { IPallet } from "components/Pallet";
import Button from "components/Button";
import Head from "components/Helper/Head";

import Others, { IOthers } from "templates/Others";

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/formatters/format_date";

import * as S from "./styles";

export type DetailsProps = IPallet & IOthers;

const Details = ({
  id,
  pallet1,
  pallet2,
  pallet3,
  pallet4,
  created_at,
  otherPallets,
}: DetailsProps) => {
  const DATE_TITLE = `Postada há ${formatDate(created_at)}`;

  function handleCopyToClipBoardAndToast(palletColor: string): void {
    copyToClipboard(palletColor);
    toast.success("Paleta copiada!", {
      icon: "🎨",
    });
  }

  return (
    <>
      <Head title="Detalhes" />
      <S.Wrapper>
        <S.BoxPallet>
          <S.PalletColors>
            <div style={{ backgroundColor: `${pallet1}` }}>
              <p onClick={() => handleCopyToClipBoardAndToast(pallet1)}>
                {pallet1}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet2}` }}>
              <p onClick={() => handleCopyToClipBoardAndToast(pallet2)}>
                {pallet2}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet3}` }}>
              <p onClick={() => handleCopyToClipBoardAndToast(pallet3)}>
                {pallet3}
              </p>
            </div>
            <div style={{ backgroundColor: `${pallet4}` }}>
              <p onClick={() => handleCopyToClipBoardAndToast(pallet3)}>
                {pallet4}
              </p>
            </div>
          </S.PalletColors>

          <S.Wrap>
            <Button>Link</Button>
            <S.PostedAt title={DATE_TITLE}>{formatDate(created_at)}</S.PostedAt>
          </S.Wrap>
        </S.BoxPallet>

        <Others otherPallets={otherPallets} />
      </S.Wrapper>
    </>
  );
};

export default Details;
