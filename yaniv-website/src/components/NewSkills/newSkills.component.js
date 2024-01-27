import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./newSkills.css";
import useStyles from "../../customHooks/useStyles";
import useFetch from "../../customHooks/useFetchBrandFetch";
import SkillCard from "../SkillCard/skillCard.component";
import skillsAvatar from "../../styles/skillsAvatar.png";
import * as enums from "../../helprs/enums";

const NewSkills = () => {
  const apiUrls = [
    "https://api.brandfetch.io/v2/brands/redux.js.org",
    "https://api.brandfetch.io/v2/brands/nestjs.com",
    "https://api.brandfetch.io/v2/brands/nodejs.org",
    "https://api.brandfetch.io/v2/brands/reactjs.org",
    "https://api.brandfetch.io/v2/brands/mongodb.com",
    "https://api.brandfetch.io/v2/brands/graphql.org",
    "https://api.brandfetch.io/v2/brands/jenkins.io",
    "https://api.brandfetch.io/v2/brands/javascripttutorial.net",
    "https://api.brandfetch.io/v2/brands/docker.com",
  ];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="avatar-container">
        <Typography variant="h2">{enums.SKILLS}</Typography>
        <img src={skillsAvatar} className={classes.avatar} alt="avatar" />
      </div>
      <div className="skill-card-container">
        {apiUrls.map((skillUrl) => {
          return <SkillCard url={skillUrl} />;
        })}
      </div>
    </div>
  );
};

export default NewSkills;
