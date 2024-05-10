import "./CastItem.scss";
import PropTypes from "prop-types";

const CastItem = ({ character, actor }) => {
  return (
    <div className="cast-item">
      <span className="cast-item__actor">{actor}</span>
      {character && <span className="cast-item__character">{actor}</span>}
    </div>
  );
};

CastItem.propTypes = {
  character: PropTypes.string,
  actor: PropTypes.string.isRequired,
};

export default CastItem;
