import { FavoritesContext } from "contexts/FavoritesContext";
import { useContext } from "react";

export const useFavorites = () => {
  const favorites = useContext(FavoritesContext);

  return favorites;
};
