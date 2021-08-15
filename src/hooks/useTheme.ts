import { useCallback, useEffect, useState } from "react";

export const LOCALSTORAGE_NAME = "@pickpallet:THEME";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const themeInLocalstorage = localStorage.getItem(LOCALSTORAGE_NAME);

      if (!themeInLocalstorage) return "light";
      return themeInLocalstorage;
    }
  });

  const changeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_NAME, theme!);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return [changeTheme];
};

export default useTheme;
