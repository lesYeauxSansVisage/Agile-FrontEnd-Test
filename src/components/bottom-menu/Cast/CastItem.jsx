import "./CastItem.scss";
import PropTypes from "prop-types";

const CastItem = ({ character, actor }) => {
  return (
    <div className="cast-item">
      <span className="cast-item__character">{character}</span>
      <span className="cast-item__actor">{actor}</span>
    </div>
  );
};

CastItem.propTypes = {
  character: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
};

export default CastItem;
