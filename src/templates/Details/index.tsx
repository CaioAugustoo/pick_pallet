import Button from "components/Button";

import copyToClipboard from "utils/copy_to_clipboard";
import {
  toastLink,
  toastFavorited,
  toastRemovedFavorite,
  toastColor,
} from "utils/toasts";
import formatDate from "utils/formatters/format_date";

import Others from "templates/Others";

import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

export interface IDetails {
  id: number;
  created_at: string;
  pallet1: string;
  pallet2: string;
  pallet3: string;
  pallet4: string;
  onClick?: () => void;
}

interface IOthers {
  data: IDetails;
  otherPallets: IDetails[];
}

const Details = ({ data, otherPallets }: IOthers) => {
  const { saveAsFavorite, isFavorited, removeAsFavorite } = useFavorites();
  const formatedDate = formatDate(data.created_at);

  const isSavedAsFavorite = isFavorited(data.id);

  function handleCopyToClipBoardAndToast(palletColor: string): void {
    copyToClipboard(palletColor);
    toastColor();
  }

  function handleCopyLink(): void {
    copyToClipboard(data.id, true);
    toastLink();
  }

  function handleFavorite(): void {
    saveAsFavorite(data);
    toastFavorited();
  }

  function handleRemoveAsFavorite(): void {
    removeAsFavorite(data.id);
    toastRemovedFavorite();
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
            <Button
              onClick={handleRemoveAsFavorite}
              favorited={isSavedAsFavorite}
            >
              Salvo
            </Button>
          ) : (
            <Button onClick={handleFavorite}>Salvar</Button>
          )}
          <Button onClick={handleCopyLink}>Link</Button>
          <p title={`Postada há ${formatedDate}`}>{formatedDate}</p>
        </S.Wrap>
      </S.BoxPallet>

      <Others otherPallets={otherPallets} />
    </>
  );
};

export default Details;
