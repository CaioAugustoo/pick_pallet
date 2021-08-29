import { useCallback, useEffect, useState } from "react";
import { getItemStorage, setItemStorage } from "utils/localStorage";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const themeInLocalstorage = getItemStorage("theme");

    if (!themeInLocalstorage) return "light";
    return themeInLocalstorage;
  });

  const changeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  useEffect(() => {
    setItemStorage("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return [changeTheme];
};

export default useTheme;
