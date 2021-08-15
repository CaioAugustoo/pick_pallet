import { useRouter } from "next/router";
import toast from "react-hot-toast";

import Button from "components/Button";

import copyToClipboard from "utils/copy_to_clipboard";
import formatDate from "utils/formatters/format_date";

import { useFavorites } from "hooks/useFavorites";

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

const Pallet = (data: IPallet) => {
  const { push } = useRouter();
  const { saveAsFavorite } = useFavorites();
  const DATE_TITLE = `Postada há ${formatDate(data?.created_at)}`;

  function handleCopyToClipBoardAndToast(palletColor: string): void {
    copyToClipboard(palletColor);
    toast.success("Paleta copiada!", {
      icon: "🎨",
    });
  }

  function navigateToPallet(palletId: number) {
    push(`/pallet/${palletId}`);
  }

  return (
    <>
      <S.BoxPallet>
        <S.PalletColors>
          <div
            className="pallet_1"
            style={{ backgroundColor: `${data.pallet1}` }}
          >
            <S.Color
              onClick={() => handleCopyToClipBoardAndToast(data.pallet1)}
            >
              {data.pallet1}
            </S.Color>
          </div>
          <div
            className="pallet_2"
            style={{ backgroundColor: `${data.pallet2}` }}
          >
            <S.Color
              onClick={() => handleCopyToClipBoardAndToast(data.pallet2)}
            >
              {data.pallet2}
            </S.Color>
          </div>
          <div
            className="pallet_3"
            style={{ backgroundColor: `${data.pallet3}` }}
          >
            <S.Color
              onClick={() => handleCopyToClipBoardAndToast(data.pallet3)}
            >
              {data.pallet3}
            </S.Color>
          </div>
          <div
            className="pallet_4"
            style={{ backgroundColor: `${data.pallet4}` }}
          >
            <S.Color
              onClick={() => handleCopyToClipBoardAndToast(data.pallet3)}
            >
              {data.pallet4}
            </S.Color>
          </div>
        </S.PalletColors>

        <S.Wrap>
          <Button
            title="Salvar como favorito"
            onClick={() => saveAsFavorite(data)}
          >
            Salvar
          </Button>

          <S.PostedAt className="pallet__date" title={DATE_TITLE}>
            {formatDate(data?.created_at)}
          </S.PostedAt>
        </S.Wrap>
      </S.BoxPallet>
    </>
  );
};

export default Pallet;
