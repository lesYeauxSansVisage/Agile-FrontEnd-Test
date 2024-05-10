import { forwardRef } from "react";
import "./EpisodeSynopsis.scss";
import PropTypes from "prop-types";

const EpisodeSynopsis = forwardRef(function EpisodeSynopsis(props, ref) {
  return (
    <div className="episode-synopsis" ref={ref}>
      <div className="episode-synopsis__img-container">
        <img src={props.img} />
      </div>
      <p className="episode-synopsis__text">{props.synopsis}</p>
    </div>
  );
});

EpisodeSynopsis.propTypes = {
  synopsis: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default EpisodeSynopsis;
