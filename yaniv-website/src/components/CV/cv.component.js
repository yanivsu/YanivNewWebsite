import React, { useEffect, useRef } from "react";

import { Button, Grid, makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import cvPicture from "../../styles/cvPicture.png";

import * as fb from "../../config";
import Realistic from "./confetti.component";
import useIsVisible from "../../helprs/genericFunctions";
import { Document } from "react-pdf";
import { textAlign, width } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F5",
    height: "150vh",
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

    const pathReference = ref(storage, "images/stars.jpg");
    getDownloadURL(ref(storage, "CV/yanivSuriyanoCV.jpg"))
      .then((url) => {
        cvLink.current = url;
        const img = document.getElementById("cvImg");
        img.setAttribute("src", cvLink.current);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {isVisible && <Realistic />}
      <Grid
        className={classes.root}
        container
        alignItems="center"
        justifyContent="space-between"
        lg={12}
      >
        <Grid innerRef={myRef} item>
          <img src={cvPicture} className={classes.avatar} alt="avatar" />
        </Grid>
        <Grid item container lg={8} alignItems="center" justifyContent="center">
          {largeScreen ? (
            <img
              alt="CV File"
              id="cvImg"
              style={{
                backgroundColor: "white",
                width: "65%",
                textAlign: "center",
              }}
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
          <Grid item>
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
