import { useState } from "react";
import "./Episode.scss";
import EpisodeSynopsis from "./EpisodeSynopsis";
import { PlaySmallPlayerIcon } from "../Icons";

const Episode = () => {
  const [isSynopsisVisible, setIsSynopsisVisible] = useState(false);

  const handleClick = () => {
    setIsSynopsisVisible(isSynopsisVisible ? false : true);
  };

  return (
    <li className="episode">
      <span className="episode__number">1</span>
      <span className="episode__title">Nice Work</span>

      <button className="episode__play-button" onClick={() => handleClick()}>
        <PlaySmallPlayerIcon />
      </button>

      {isSynopsisVisible && <EpisodeSynopsis />}
    </li>
  );
};

export default Episode;
