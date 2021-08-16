import React, { createContext, useCallback, useEffect, useState } from "react";

import { IPallet } from "components/Pallet";

interface IContext {
  favorites: IPallet[];
  saveAsFavorite: (pallet: IPallet) => void;
  isFavorited: (palletId: number) => boolean;
  removeAsFavorite: (palletId: number) => void;
}

interface IFavorites {
  children: React.ReactNode;
}

const STORAGE_KEY = "@pickpallet:favorites";

export const FavoritesContext = createContext({} as IContext);

export const Favorites = ({ children }: IFavorites) => {
  const [favorites, setFavorites] = useState<IPallet[]>(() => {
    if (typeof window !== "undefined") {
      const itensInStorage = localStorage.getItem(STORAGE_KEY);

      if (!itensInStorage) return [];
      return JSON.parse(itensInStorage);
    }
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
      const alreadyFavorited = isFavorited(pallet.id);
      if (alreadyFavorited) return;

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

  console.log(favorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, saveAsFavorite, isFavorited, removeAsFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
