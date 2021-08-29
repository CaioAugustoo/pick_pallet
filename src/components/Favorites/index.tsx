import FavoritePallet from "components/Pallet/favorite";

import { useFavorites } from "hooks/useFavorites";

import Link from "next/link";

import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (!favorites?.length) return <div></div>;

  return (
    <>
      <S.Wrapper>
        <S.Title>Favoritas</S.Title>
        <Link href="/favorites" passHref>
          <a title="Ver todas paletas favoritas">Ver todas</a>
        </Link>
      </S.Wrapper>
      <S.FavoritesWrapper>
        {favorites?.map(pallet => (
          <FavoritePallet key={pallet.id} {...pallet} />
        ))}
      </S.FavoritesWrapper>
    </>
  );
};

export default Favorites;
