import React, { createContext, useCallback, useEffect, useState } from "react";

import { IPallet } from "components/Pallet";
import { getItemStorage, setItemStorage } from "utils/localStorage";

interface IContext {
  favorites: IPallet[];
  saveAsFavorite: (pallet: IPallet) => void;
  isFavorited: (palletId: number) => boolean;
  removeAsFavorite: (palletId: number) => void;
}

interface IFavorites {
  children: React.ReactNode;
}

export const FavoritesContext = createContext({} as IContext);

export const Favorites = ({ children }: IFavorites) => {
  const [favorites, setFavorites] = useState<IPallet[]>(() => {
    const item = getItemStorage();
    return item;
  });

  const isFavorited = useCallback(
    (palletId: number): boolean => {
      const isFavorited = favorites?.some(el => el.id === palletId);

      return isFavorited;
    },
    [favorites]
  );

  const saveAsFavorite = useCallback(
    (pallet: IPallet) => {
      setFavorites(prev => [...prev, pallet]);
    },
    [favorites]
  );

  const removeAsFavorite = useCallback(
    (palletId: number) => {
      setFavorites(prev => prev.filter(el => el.id !== palletId));
    },
    [favorites]
  );

  useEffect(() => {
    setItemStorage(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, saveAsFavorite, isFavorited, removeAsFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
