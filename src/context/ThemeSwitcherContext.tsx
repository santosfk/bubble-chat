import React from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

interface IThemeSwitcher {
  children: React.ReactNode;
}

interface ThemeSwitcherContextData {
  theme: DefaultTheme;
  setTheme: Function;
  isDark: boolean;
  setIsDark: Function;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeSwitcherContextData>(
  {} as ThemeSwitcherContextData
);

export const ThemeSwitcherProvider = ({ children }: IThemeSwitcher) => {
  const darkThemeMq = dark;

  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    darkThemeMq ? dark : light
  );
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  React.useEffect(() => {
    if (theme.title === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isDark, setIsDark, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
