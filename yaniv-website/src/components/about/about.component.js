import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <h1>Hello</h1>
    </Grid>
  );
}

export default About;
