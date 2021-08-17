import FavoritePallet from "components/Pallet/favorite";

import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (!favorites?.length) return null;

  return (
    <S.Wrapper className="right">
      <p>Favoritos</p>
      <S.FavoritesWrapper>
        {favorites?.map(pallet => (
          <FavoritePallet key={pallet.id} {...pallet} />
        ))}
      </S.FavoritesWrapper>
    </S.Wrapper>
  );
};

export default Favorites;
