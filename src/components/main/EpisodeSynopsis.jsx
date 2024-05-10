import "./EpisodeSynopsis.scss";
import PropTypes from "prop-types";

const EpisodeSynopsis = ({ synopsis, img }) => {
  return (
    <div className="episode-synopsis">
      <div className="episode-synopsis__img-container">
        <img src={img} />
      </div>
      <p className="episode-synopsis__text">{synopsis}</p>
    </div>
  );
};

EpisodeSynopsis.propTypes = {
  synopsis: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default EpisodeSynopsis;
