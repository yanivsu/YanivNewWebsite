import React, { useMemo } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#7165F2" : "#2C9CEF",
          },
        },
        typography: {
          fontFamily: "Rubik",
          body1: {
            color: "white",
          },
          h2: {
            color: "#2D2A46",
          },
          h5: {
            color: "#2D2A46",
          },
          h6: {
            color: "white",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
