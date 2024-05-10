import { useState, useCallback } from "react";
import "./Episode.scss";
import EpisodeSynopsis from "./EpisodeSynopsis";
import { PlaySmallPlayerIcon } from "../Icons";
import PropTypes from "prop-types";

const Episode = ({
  episodeNumber,
  episodeTitle,
  episodeSynopsis,
  episodeImage,
}) => {
  const [isSynopsisVisible, setIsSynopsisVisible] = useState(false);

  const ref = useCallback(
    (node) => {
      if (node !== null && isSynopsisVisible) {
        node.scrollIntoView();
      }
    },
    [isSynopsisVisible]
  );

  const handleClick = () => {
    setIsSynopsisVisible(isSynopsisVisible ? false : true);
  };

  return (
    <li className="episode">
      <span className="episode__number">{episodeNumber}</span>
      <span className="episode__title">{episodeTitle}</span>

      <button className="episode__play-button" onClick={() => handleClick()}>
        <PlaySmallPlayerIcon />
      </button>

      {isSynopsisVisible && (
        <EpisodeSynopsis
          ref={ref}
          synopsis={episodeSynopsis}
          img={episodeImage}
        />
      )}
    </li>
  );
};

Episode.propTypes = {
  episodeNumber: PropTypes.number.isRequired,
  episodeTitle: PropTypes.string.isRequired,
  episodeSynopsis: PropTypes.string.isRequired,
  episodeImage: PropTypes.string.isRequired,
};

export default Episode;
