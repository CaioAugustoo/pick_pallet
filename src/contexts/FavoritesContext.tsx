import React, { createContext, useCallback, useEffect, useState } from "react";

import { IPallet } from "components/Pallet";

interface IContext {
  favorites: IPallet[];
  saveAsFavorite: (pallet: IPallet) => void;
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

  const saveAsFavorite = useCallback(
    (pallet: IPallet) => {
      setFavorites(prev => [...prev, pallet]);
    },
    [favorites]
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, saveAsFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
