import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

import profileImage from "../../styles/aboutMe.png";
import * as fb from "../../config";
import * as enums from "../../helprs/enums";
import * as fbFuncs from "../../helprs/firebaseFunctions";
import "./about.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    backgroundColor: "#F0F0F5",
    // For Mobile
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  typo: {
    color: "#2D2A46",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#F0F0F5",
    width: "50%",
    marginLeft: theme.spacing(6),
    boxShadow: "3px 3px 3px 3px gray",
    // For Mobile
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: theme.spacing(5, 0, 5, 0),
    },
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    color: "white ",
    marginLeft: theme.spacing(-1),
  },
}));

function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function About() {
  const classes = useStyles();
  const [aboutMe, setAboutMe] = useState({});

  useEffect(async () => {
    const appConfig = initializeApp(fb.firebaseConfig);
    const db = getFirestore(appConfig);
    setAboutMe(await fbFuncs.getData(db, enums.ABOUT_ME_COLLECTION));
  }, []);
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item alignItems="center" justifyContent="center">
        <img src={profileImage} className={classes.avatar} alt="avatar" />
      </Grid>
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item lg={7}>
              <Typography variant="h2">{enums.ABOUT_ME}</Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid
              item
              lg={6}
              container
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="h6" style={{ color: "#2D2A46" }}>
                  First Name: {aboutMe.firstName}
                </Typography>
                <Typography variant="h6" style={{ color: "#2D2A46" }}>
                  Last Name: {aboutMe.lastName}
                </Typography>
                <Typography variant="h6" style={{ color: "#2D2A46" }}>
                  Age: {getAge(aboutMe.birthday?.toDate())}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" style={{ color: "#2D2A46" }}>
                  Phone: {aboutMe.phone}
                </Typography>
                <Typography variant="h6" style={{ color: "#2D2A46" }}>
                  Email: {aboutMe.email}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" style={{ color: "#2D2A46" }}>
                {aboutMe.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default About;
