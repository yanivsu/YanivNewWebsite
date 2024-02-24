import React from "react";

import useFetch from "../../customHooks/useFetchBrandFetch";
import Loading from "../loading/loading.component";
import "./skillCard.css";

const SkillCard = (url, auth = true) => {
  const { data, loading, error } = useFetch(url, true);

  function getLogo(data) {
    const logo = data.logos.find(
      (item) =>
        item.type === "logo" &&
        item.formats.some((format) => format.format === "svg")
    );
    if (logo === undefined) {
      const logo = data.logos.find(
        (item) =>
          item.type === "logo" &&
          item.formats.some((format) => format.format === "png")
      );
      // Extract the src if the logo is found
      const pngSrc = logo
        ? logo.formats.find((format) => format.format === "png").src
        : null;

      return pngSrc;
    }
    // Extract the src if the logo is found
    const svgSrc = logo
      ? logo.formats.find((format) => format.format === "svg").src
      : null;
    return svgSrc;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="skill-card">
      {/* <h1>hello</h1> */}
      <img src={getLogo(data)}></img>
    </div>
  );
};

export default SkillCard;
