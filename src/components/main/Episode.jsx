import { useState, useCallback } from "react";
import "./Episode.scss";
import EpisodeSynopsis from "./EpisodeSynopsis";
import { PlaySmallPlayerIcon } from "../Icons";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";

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

  const handleEpisodeClick = () => {
    setIsSynopsisVisible(isSynopsisVisible ? false : true);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <li className="episode" onClick={() => handleEpisodeClick()}>
      <span className="episode__number">{episodeNumber}</span>
      <span className="episode__title">{episodeTitle}</span>

      <button className="episode__play-button" onClick={handleButtonClick}>
        <PlaySmallPlayerIcon />
      </button>

      <AnimatePresence>
        {isSynopsisVisible && (
          <EpisodeSynopsis
            ref={ref}
            synopsis={episodeSynopsis}
            img={episodeImage}
          />
        )}
      </AnimatePresence>
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
