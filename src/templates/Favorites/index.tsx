import Empty from "components/Empty";
import Pallet from "components/Pallet";

import { useFavorites } from "hooks/useFavorites";

import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (!favorites.length) return <Empty />;

  return (
    <S.Wrapper>
      {favorites?.map((pallet) => (
        <div key={pallet.id}>
          <Pallet pallet={pallet} />
        </div>
      ))}
    </S.Wrapper>
  );
};

export default Favorites;
