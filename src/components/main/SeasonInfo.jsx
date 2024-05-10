import "./SeasonInfo.scss";
import { useState } from "react";
import CustomNavbar from "../UI/CustomNavbar";
import Episode from "./Episode";
import { useEpisode } from "../../hooks/UseEpisode";

const SeasonInfo = () => {
  const { episodeData } = useEpisode();

  const seasons = {};

  episodeData
    .sort((a, b) => a && b && b.episodeNumber - a.episodeNumber)
    .forEach((episode) => {
      if (!episode) return;

      const season = String(episode.SeasonNumber);

      if (!Object.prototype.hasOwnProperty.call(seasons, season)) {
        seasons[season] = [];
      }

      seasons[season].push(episode);
    });

  const seasonsLabels = Object.keys(seasons).map((season) => ({
    id: season,
    label: "T" + season,
  }));

  const [activeTab, setActiveTab] = useState(seasonsLabels[0].id);

  const changeActiveTab = (id) => {
    setActiveTab(id);
  };

  const currentSeasonEpisodes = seasons[activeTab];

  return (
    <section className="season-info">
      <div className="season-info-wrapper">
        <CustomNavbar
          labels={seasonsLabels}
          setActiveTab={changeActiveTab}
          activeTab={activeTab}
        />
        <ul className="season-info__episodes">
          {currentSeasonEpisodes.map((episode) => (
            <Episode
              key={episode.ID}
              episodeNumber={episode.EpisodeNumber}
              episodeTitle={episode.Title}
              episodeSynopsis={episode.Synopsis}
              episodeImage={episode.Image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SeasonInfo;
