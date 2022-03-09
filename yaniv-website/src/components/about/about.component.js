import React from "react";

import { Card, Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import profileImage from "../../styles/profilePicture.jpeg";
import "./about.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#F0F0F5",
  },
  typo: {
    color: "#2D2A46",
    fontWeight: "bold",
  },
  card: {
    width: "50%",
    marginLeft: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: "200%",
    color: "white ",
    marginLeft: theme.spacing(2),
  },
  downloadCV: {
    width: "30%",
    borderRadius: "14px",
    margin: theme.spacing(2, 0, 0, 0),
    textTransform: "none",
    fontSize: "20px",
    backgroundColor: "#F54053", //red
    "&:hover": {
      color: "#F54053", //yellow
    },
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid item direction="column">
        <Typography className={classes.typo} variant="h4">
          About Me
        </Typography>
        <Avatar src={profileImage} className={classes.avatar}></Avatar>
      </Grid>
      <Card className={classes.card}>
        <CardContent>
          <Grid container alignItems="center" justifyContent="space-around">
            <Grid container xs={6} alignItems="center" justifyContent="center">
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
              <Button className={classes.downloadCV}>Download CV</Button>
            </Grid>
            <Grid xs={5} item>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div>
              <div class="progress progress-striped">
                <div class="progress-bar"></div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default About;
