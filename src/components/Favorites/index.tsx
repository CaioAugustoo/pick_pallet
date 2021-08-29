import FavoritePallet from "components/Pallet/favorite";

import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (!favorites?.length) return null;

  return (
    <div className="right">
      <S.Title>Favoritas</S.Title>
      <S.FavoritesWrapper>
        {favorites?.map(pallet => (
          <FavoritePallet key={pallet.id} {...pallet} />
        ))}
      </S.FavoritesWrapper>
    </div>
  );
};

export default Favorites;
