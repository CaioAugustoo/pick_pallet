import Pallet from "components/Pallet";
import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <S.Wrapper>
      <>
        {favorites?.map(pallet => (
          <Pallet key={pallet.id} {...pallet} />
        ))}
      </>
    </S.Wrapper>
  );
};

export default Favorites;
