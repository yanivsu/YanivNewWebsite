import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import * as enums from "../../helprs/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  typoButton: {
    fontWeight: "bold",
    margin: theme.spacing(0, 5, 0, 5),
    "&:hover": {
      color: "#EAC94D", //yellow
    },
  },
}));

export default function Header() {
  const location = useRef({ long: 34.855499, lat: 32.109333 }); // Tel Aviv, ISR location
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
    <AppBar position="static" style={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {enums.YANIV_SURIYANO}
        </Typography>

        <Button className={classes.typoButton}>Home</Button>
        <Button className={classes.typoButton}>About</Button>
        <Button className={classes.typoButton}>Services</Button>
        <Button className={classes.typoButton}>Experience</Button>
        <Button className={classes.typoButton}>Works</Button>
        <Button className={classes.typoButton}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
