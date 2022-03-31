import React, { useEffect, useState } from "react";

import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CardContent from "@material-ui/core/CardContent";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import * as enums from "../../helprs/enums";
import experienceAvatar from "../../styles/experienceAvatar.png";
import * as fbFuncs from "../../helprs/firebaseFunctions";
import * as fb from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F5",
  },
  root2: {
    marginTop: theme.spacing(25),
  },
  root3: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(10),
    width: "250px",
    height: "150px",
    backgroundColor: "#F0F0F5",
  },
  card: {
    backgroundColor: "#F0F0F5",
    width: "50%",
    margin: theme.spacing(0, 0, 10, 6),
    boxShadow: "3px 3px 3px 3px gray",
  },

  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    color: "white ",
    marginTop: theme.spacing(2),
  },

  timeline: {
    color: "#2D2A46",
  },
}));

function Experience() {
  const classes = useStyles();
  const [experienceData, setExperienceData] = useState(undefined);
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(async () => {
    const appConfig = initializeApp(fb.firebaseConfig);
    const db = getFirestore(appConfig);
    const experienceFB = await fbFuncs.getData(db, enums.EXPERIENCE_COLLECTION);
    var experienceFBArray = Object.keys(experienceFB).map((key) => {
      return experienceFB[key];
    });
    experienceFBArray.sort((a, b) => {
      return b.index - a.index;
    });
    setExperienceData(experienceFBArray);
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={largeScreen ? "row" : "column"}
        className={largeScreen ? classes.root2 : classes.root3}
      >
        <img src={experienceAvatar} className={classes.avatar} alt="avatar" />
        <Card className={classes.card}>
          <CardContent>
            <Grid
              item
              container
              lg={12}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item style={{ backgroundColor: "" }}>
                <Grid item container>
                  <Typography variant="h2">{enums.EXPERIENCE}</Typography>
                </Grid>
                <Grid item lg={12}>
                  <Timeline className={classes.timeline} align="left">
                    {experienceData &&
                      experienceData.map((value, index) => {
                        if (index === 2) {
                          return (
                            <TimelineItem key={index}>
                              <TimelineSeparator>
                                <TimelineDot color="primary">
                                  <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <Typography
                                  variant="h6"
                                  component="h1"
                                  style={{
                                    color: "#2D2A46",
                                    textAlign: "start",
                                  }}
                                >
                                  {enums.EDUICATION} {value.years}
                                </Typography>
                                <Typography
                                  style={{
                                    color: "#2D2A46",
                                    textAlign: "start",
                                  }}
                                >
                                  {value.about}
                                </Typography>
                              </TimelineContent>
                            </TimelineItem>
                          );
                        } else {
                          return (
                            <TimelineItem key={index}>
                              <TimelineSeparator>
                                <TimelineDot color="primary">
                                  <WorkIcon />
                                </TimelineDot>
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <Typography
                                  variant="h6"
                                  style={{
                                    color: "#2D2A46",
                                    textAlign: "start",
                                  }}
                                >
                                  {value.name} {value.years}.
                                </Typography>
                                <Typography
                                  component="p"
                                  style={{
                                    color: "#2D2A46",
                                    textAlign: "start",
                                  }}
                                >
                                  {value.about}
                                </Typography>
                              </TimelineContent>
                            </TimelineItem>
                          );
                        }
                      })}
                  </Timeline>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Experience;
