import "./SeasonInfo.scss";
import CustomNavbar from "../UI/CustomNavbar";
import Episode from "./Episode";
import { useState } from "react";

const SeasonInfo = () => {
  const [activeTab, setActiveTab] = useState("T1");

  const changeTabActive = (seasonId) => {
    setActiveTab(seasonId);
  };

  const seasons = [1, 2];
  const seasonsLabels = seasons.map((seasonNumber) => {
    return { id: "T" + seasonNumber, labelText: "T" + seasonNumber };
  });

  console.log(seasonsLabels);

  return (
    <section className="season-info">
      <div className="season-info-wrapper">
        <CustomNavbar
          labels={seasonsLabels}
          setActiveTab={changeTabActive}
          activeTab={activeTab}
        />
        <ul className="season-info__episodes">
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
        </ul>
      </div>
    </section>
  );
};

export default SeasonInfo;
