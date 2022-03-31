import React, { useEffect, useRef } from "react";

import { Button, Grid, makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  downloadCV: {
    borderRadius: "14px",
    margin: theme.spacing(2, 0, 0, 0),
    textTransform: "none",
    fontSize: "20px",
    backgroundColor: "#F54053", //red
    "&:hover": {
      color: "#EAC94D", //yellow
      backgroundColor: "#F54053",
    },
  },
}));

function CV() {
  const classes = useStyles();
  const myRef = useRef();
  const isVisible = useIsVisible(myRef);
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const cvLink = useRef(undefined);
  useEffect(() => {
    const appConfig = initializeApp(fb.firebaseConfig);
    const storage = getStorage(appConfig);
    getDownloadURL(ref(storage, "CV/Yaniv Suriyano CV ENG.pdf"))
      .then((url) => {
        cvLink.current = url;

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
        <Grid innerRef={myRef}>
          <img src={cvPicture} className={classes.avatar} alt="avatar" />
        </Grid>
        <Grid>
          {largeScreen ? (
            <img
              alt="CV File"
              id="cvImg"
              style={{ backgroundColor: "white", scale: "1.2" }}
            />
          ) : (
            <Button
              className={classes.downloadCV}
              onClick={() => {
                const link = document.createElement("a");
                link.href = cvLink.current;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </Button>
          )}
        </Grid>
        {largeScreen ? (
          <Grid>
            <img
              alt="CVFile"
              src={cvPicture}
              className={classes.avatar}
              style={{ transform: "scaleX(-1)" }}
            />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}

export default CV;
