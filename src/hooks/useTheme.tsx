import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const themeInLocalstorage = localStorage.getItem("@theme");

      if (!themeInLocalstorage) return "light";
      return themeInLocalstorage;
    }
  });

  const changeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("@theme", theme!);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return [changeTheme];
};

export default useTheme;
