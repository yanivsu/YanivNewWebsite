import { makeStyles } from "@material-ui/core";

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
    marginTop: theme.spacing(2),
  },

  timeline: {
    color: "#2D2A46",
  },
}));

export default useStyles;
