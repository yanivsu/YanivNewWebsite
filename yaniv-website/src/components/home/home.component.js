import React, { useMemo, useState } from "react";

import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

import profileImage from "../../styles/profilePicture.jpeg";

import "./home.css";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "85vh",
    margin: "0px",
  },
  avatarGrid: {
    margin: theme.spacing(5),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: "200%",
    color: "white ",
    backgroundColor: deepOrange[500],
    animation: `$pulse 1500ms infinite ${theme.transitions.easing.easeInOut}`,
  },
  typo4: {
    fontWeight: "bold",
  },
  socialNetwork: {
    margin: theme.spacing(3, 0, 0, 0),
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 1),
    cursor: "pointer",
    "&:hover": {
      color: "#EAC94D", //yellow
    },
  },

  contactMe: {
    // minWidth: "15",
    borderRadius: "14px",
    // padding: theme.spacing(1.5),
    margin: theme.spacing(2, 0, 0, 0),
    textTransform: "none",
    fontSize: "20px",
    backgroundColor: "#F54053", //red
    "&:hover": {
      color: "#F54053", //yellow
    },
  },

  scrollDown: {
    margin: theme.spacing(0, 0, 20, 0),
  },

  "@keyframes pulse": {
    "0%": {
      boxShadow: "#FF69B4 0 0 0 0",
    },
    "100%": {
      boxShadow: "#FF69B400 0 0 0 16px",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item className={classes.avatarGrid}>
          <Avatar src={profileImage} className={classes.avatar}></Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.typo4}>
            Yaniv Suriyano
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Full-Stack Software Engineer.</Typography>
        </Grid>
        <Grid item className={classes.socialNetwork}>
          <a
            target="_blank"
            href="https://www.facebook.com/yaniv.suriyano/"
            style={{ color: "inherit" }}
          >
            <FacebookIcon fontSize="large" className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/yanivsu/"
            style={{ color: "inherit" }}
          >
            <InstagramIcon fontSize="large" className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yaniv-suriyano-9153bb140/"
            style={{ color: "inherit" }}
          >
            <LinkedInIcon fontSize="large" className={classes.icon} />
          </a>
          <a
            target="_blank"
            href="https://github.com/yanivsu"
            style={{ color: "inherit" }}
          >
            <GitHubIcon fontSize="large" className={classes.icon} />
          </a>
          <a href="mailto:yanivsu@gmail.com">
            <EmailIcon fontSize="large" className={classes.icon} />
          </a>
        </Grid>
        <Button
          className={classes.contactMe}
          onClick={() => {
            window.location = "mailto:yanivsu@gmail.com";
          }}
        >
          Contact Me!
        </Button>
      </Grid>
      <Grid
        className={classes.scrollDown}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          as=""
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          duration={500}
        >
          <span
            className="ca3-scroll-down-link ca3-scroll-down-arrow"
            data-ca3_iconfont="ETmodules"
            data-ca3_icon=""
          ></span>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
