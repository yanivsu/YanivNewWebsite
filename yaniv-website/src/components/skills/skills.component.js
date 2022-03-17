import React, { useEffect, useState, useRef } from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useIsVisible from "../../helprs/genericFunctions";
import skillsAvatar from "../../styles/skillsAvatar.png";
import * as fbFuncs from "../../helprs/firebaseFunctions";
import * as fb from "../../config";
import * as enums from "../../helprs/enums";

Chart.register(...registerables);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0F0F5",
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
  skills: {
    margin: theme.spacing(1),
  },
}));

function Skills() {
  const classes = useStyles();
  const [skillsData, setSkillsData] = useState({ undefined });

  useEffect(async () => {
    const appConfig = initializeApp(fb.firebaseConfig);
    const db = getFirestore(appConfig);
    const skillData = await fbFuncs.getData(db, enums.SKILLS_COLLECTION);
    const skillDataSorted = Object.keys(skillData)
      .sort((a, b) => (a > b ? -1 : 1))
      .reduce((obj, key) => {
        obj[key] = skillData[key];
        return obj;
      }, {});
    setSkillsData(skillDataSorted);
  }, []);

  const centerDoughnutPlugin = {
    id: "annotateDoughnutCenter",
    beforeDraw: (chart) => {
      let width = chart.width;
      let height = chart.height;
      let ctx = chart.ctx;

      ctx.restore();
      let fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      let text = `${chart.data.datasets[0].data[0]}%`;
      let textX = Math.round((width - ctx.measureText(text).width) / 2);
      let textY = height / 1.87;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  const myRef = useRef();
  const isVisible = useIsVisible(myRef);

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item innerRef={myRef}>
        <Typography variant="h2">{enums.SKILLS}</Typography>
        <img src={skillsAvatar} className={classes.avatar} />
      </Grid>
      {isVisible && (
        <Grid
          container
          item
          lg={12}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {Object.entries(skillsData).map(([key, value]) => {
            if (value) {
              let tempDataSet = {
                datasets: [
                  {
                    label: key,
                    data: [value, 100 - value],
                    backgroundColor: ["#F54053", "gray"],
                  },
                ],
              };
              Chart.register(centerDoughnutPlugin);
              return (
                <Grid
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  item
                  container
                  lg={4}
                >
                  <div
                    style={{
                      width: "150px",
                      margin: "20px",
                    }}
                  >
                    <Doughnut
                      data={tempDataSet}
                      plugins={centerDoughnutPlugin}
                      options={{
                        cutout: "80%",
                        animation: {
                          duration: 3000,
                        },
                      }}
                    />
                    <Typography className={classes.typo}>{key}</Typography>
                  </div>
                </Grid>
              );
            }
          })}
        </Grid>
      )}
    </Grid>
  );
}

export default Skills;
