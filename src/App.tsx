import React, { useContext } from "react";

import { ThemeContext } from "../src/context/ThemeSwitcherContext";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import HomePage from "../src/pages/HomePage";
import GlobalStyle from "../src/styles/GlobalStyle";
import { Switcher } from "./components";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle />
      <Switcher />
      <HomePage />
    </StyledComponentsThemeProvider>
  );
};

export default App;
