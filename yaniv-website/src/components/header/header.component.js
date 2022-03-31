import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import axios from "axios";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import * as enums from "../../helprs/enums";
import DrawerComponent from "./drawerHeader.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  typoButton: {
    fontWeight: "bold",
    // margin: theme.spacing(0, 5, 0, 5),
    "&:hover": {
      color: "#EAC94D", //yellow
    },
  },
}));

export default function Header() {
  const location = useRef({ long: 34.855499, lat: 32.109333 }); // Tel Aviv, ISR location
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [weather, setWeahter] = useState({
    name: undefined,
    tempature: undefined,
  });
  const classes = useStyles();

  const fetchWheater = () => {
    axios
      .get(
        enums.WHEATHER_ADDRESS +
          enums.WHEATHER_LAT +
          location.current.lat +
          "&" +
          enums.WHEATER_LONG +
          location.current.long +
          enums.WHEATER_APPID +
          enums.WHEATHER_UNITS
      )
      .then((result) => {
        setWeahter({
          name: result.data.name,
          tempature: Math.floor(result.data.main.temp),
        });
      })
      .catch((error) => {
        console.err(error);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        location.current.long = position.coords.longitude;
        location.current.lat = position.coords.latitude;
        fetchWheater();
      },
      function () {
        fetchWheater();
      }
    );
  }, []);

  return (
    <AppBar position="static" style={{ backgroundColor: "#2D2A46" }}>
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {enums.YANIV_SURIYANO}
          </Typography>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.typoButton}>About</Button>
          </Link>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.typoButton}>Skills</Button>
          </Link>
          <Link
            activeClass="active"
            to="Experience"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.typoButton}>Experience</Button>
          </Link>
          <Link
            activeClass="active"
            to="CV"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.typoButton}>CV</Button>
          </Link>
          <Typography>
            {weather.name} {weather.tempature}&deg;
          </Typography>
        </Toolbar>
      )}
    </AppBar>
  );
}
