import React, { useEffect, useRef } from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import cvPicture from "../../styles/cvPicture.png";

import * as fb from "../../config";
import Realistic from "./confetti.component";
import useIsVisible from "../../helprs/genericFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F5",
    height: "100vh",
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    color: "white ",
    marginLeft: theme.spacing(-3),
  },
  typo: {
    color: "#2D2A46",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

function CV() {
  const classes = useStyles();
  const myRef = useRef();
  const isVisible = useIsVisible(myRef);
  useEffect(() => {
    const appConfig = initializeApp(fb.firebaseConfig);
    const storage = getStorage(appConfig);
    getDownloadURL(ref(storage, "CV/Yaniv Suriyano CV ENG.pdf"))
      .then((url) => {
        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        // Or inserted into an <img> element
        const img = document.getElementById("cvImg");
        img.setAttribute("src", url);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  return (
    <>
      {isVisible && <Realistic />}
      <Grid
        className={classes.root}
        container
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid>
          <img src={cvPicture} className={classes.avatar} />
        </Grid>
        <Grid>
          <img id="cvImg" style={{ backgroundColor: "white", scale: "1.5" }} />
        </Grid>
        <Grid innerRef={myRef}>
          <img
            src={cvPicture}
            className={classes.avatar}
            style={{ transform: "scaleX(-1)" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default CV;
