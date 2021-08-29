import Empty from "components/Empty";
import Pallet from "components/Pallet";

import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <S.Wrapper>
      <>
        {favorites?.length ? (
          favorites?.map(pallet => <Pallet key={pallet.id} {...pallet} />)
        ) : (
          <Empty
            title="Nenhuma paleta salva"
            description="Você ainda não salvou paletas 😔"
          />
        )}
      </>
    </S.Wrapper>
  );
};

export default Favorites;
