import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Experience from "./components/experience/experience.component";
import CV from "./components/CV/cv.component";
import NewSkills from "./components/NewSkills/newSkills.component";
import { Element } from "react-scroll";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "light" : "light",
          primary: {
            main: prefersDarkMode ? "#2D2A46" : "#2D2A46",
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
          h4: {
            color: "white",
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
      <Element name="About" />
      <About />
      <Element name="Skills" />
      <NewSkills />
      <Element name="Experience" />
      <Experience />
      <Element name="CV" />
      <CV />
    </ThemeProvider>
  );
}

export default App;
