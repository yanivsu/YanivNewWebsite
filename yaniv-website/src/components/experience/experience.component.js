import React from "react";

import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CardContent from "@material-ui/core/CardContent";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import * as fb from "../../config";
import * as enums from "../../helprs/enums";
import * as fbFuncs from "../../helprs/firebaseFunctions";
import experienceAvatar from "../../styles/experienceAvatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F5",
  },
  root2: {
    marginTop: theme.spacing(25),
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
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        className={classes.root2}
      >
        <img src={experienceAvatar} className={classes.avatar} />
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              justifyContent="space-between"
              alignItems="flext-start"
              direction="row"
            >
              <Grid item style={{ backgroundColor: "" }}>
                <Grid item>
                  <Typography variant="h2">{enums.EXPERIENCE}</Typography>
                </Grid>
                <Grid item lg={10}>
                  <Timeline className={classes.timeline} align="left">
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="h6"
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        >
                          {enums.SKYSOFT} ({enums.SKYSOFT_YEARS}).
                        </Typography>
                        <Typography
                          component="p"
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        >
                          {enums.SKYSOFT_ABOUT}
                        </Typography>
                        <Typography
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        ></Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="h6"
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        >
                          {enums.GENERIX} ({enums.GENERIX_YEARS}).
                        </Typography>
                        <Typography
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        >
                          {enums.GENERIX_ABOUT}
                        </Typography>
                        <Typography
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        ></Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
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
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        >
                          {enums.EDUICATION}
                        </Typography>
                        <Typography
                          style={{ color: "#2D2A46", textAlign: "start" }}
                        >
                          {enums.EDUICATION_ABOUT}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
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
