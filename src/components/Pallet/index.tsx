import { useCallback } from "react";

import { useRouter } from "next/router";

import Button from "components/Button";

import copyToClipboard from "utils/copy_to_clipboard";
import { makeToast } from "utils/toasts";

import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

export interface IPallet {
  id: number;
  created_at: string;
  pallet1: string;
  pallet2: string;
  pallet3: string;
  pallet4: string;
}

export interface PalletProps {
  pallet: IPallet;
}

const Pallet = ({ pallet }: PalletProps) => {
  const { push } = useRouter();
  const { saveAsFavorite, isFavorited, removeAsFavorite } = useFavorites();

  const isSavedAsFavorite = isFavorited(pallet.id);

  const handleCopyToClipBoardAndToast = useCallback((palletColor: string) => {
    copyToClipboard(palletColor);
    makeToast("Cor copiada!");
  }, []);

  const handleFavorite = useCallback(() => {
    saveAsFavorite(pallet);
    makeToast("Salva como favorita!");
  }, []);

  const handleRemoveAsFavorite = useCallback(() => {
    removeAsFavorite(pallet.id);
    makeToast("Removida como favorita!");
  }, []);

  function handleNavigateToPallet() {
    push(`/pallet/${pallet.id}`);
  }

  return (
    <S.BoxPallet>
      <S.PalletColors>
        <div
          className="pallet_1"
          style={{ backgroundColor: `${pallet.pallet1}` }}
        >
          <S.Color
            onClick={() => handleCopyToClipBoardAndToast(pallet.pallet1)}
          >
            {pallet.pallet1}
          </S.Color>
        </div>
        <div
          className="pallet_2"
          style={{ backgroundColor: `${pallet.pallet2}` }}
        >
          <S.Color
            onClick={() => handleCopyToClipBoardAndToast(pallet.pallet2)}
          >
            {pallet.pallet2}
          </S.Color>
        </div>
        <div
          className="pallet_3"
          style={{ backgroundColor: `${pallet.pallet3}` }}
        >
          <S.Color
            onClick={() => handleCopyToClipBoardAndToast(pallet.pallet3)}
          >
            {pallet.pallet3}
          </S.Color>
        </div>
        <div
          className="pallet_4"
          style={{ backgroundColor: `${pallet.pallet4}` }}
        >
          <S.Color
            onClick={() => handleCopyToClipBoardAndToast(pallet.pallet4)}
          >
            {pallet.pallet4}
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
  );
};

export default Pallet;
