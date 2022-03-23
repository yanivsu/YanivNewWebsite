import React, { useMemo } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Experience from "./components/experience/experience.component";

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
        missingOppositeContent: {
          "&:before": {
            content: '""',
            flex: 1,
            padding: "6px 16px",
          },
        },
        overrides: {
          MuiTimelineItem: {
            missingOppositeContent: {
              "&:before": {
                display: "none",
              },
            },
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
      <Experience />
    </ThemeProvider>
  );
}

export default App;
