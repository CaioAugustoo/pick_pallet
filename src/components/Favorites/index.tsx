import FavoritePallet from "components/Pallet/favorite";
import { useFavorites } from "hooks/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (!favorites?.length) return null;

  return (
    <div style={{ position: "fixed", right: "0" }}>
      <p>Favorites</p>
      <div>
        {favorites?.map(pallet => (
          <FavoritePallet key={pallet.id} {...pallet} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
