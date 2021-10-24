import { useRouter } from "next/router";

import Button from "components/Button";

import copyToClipboard from "utils/copy_to_clipboard";
import { toastColor, toastFavorited, toastRemovedFavorite } from "utils/toasts";

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
  const { saveAsFavorite, isFavorited, removeAsFavorite } = useFavorites();

  const isSavedAsFavorite = isFavorited(data.id);

  function handleCopyToClipBoardAndToast(palletColor: string): void {
    copyToClipboard(palletColor);
    toastColor();
  }

  function handleFavorite(): void {
    saveAsFavorite(data);
    toastFavorited();
  }

  function handleRemoveAsFavorite(): void {
    removeAsFavorite(data.id);
    toastRemovedFavorite();
  }

  function handleNavigateToPallet() {
    push(`/pallet/${data.id}`);
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
              onClick={() => handleCopyToClipBoardAndToast(data.pallet4)}
            >
              {data.pallet4}
            </S.Color>
          </div>
        </S.PalletColors>

        <S.Wrap>
          {isSavedAsFavorite ? (
            <Button onClick={handleRemoveAsFavorite} favorited>
              Salvo
            </Button>
          ) : (
            <Button onClick={handleFavorite}>Salvar</Button>
          )}
          <Button onClick={handleNavigateToPallet}>Detalhes</Button>
        </S.Wrap>
      </S.BoxPallet>
    </>
  );
};

export default Pallet;
