import "./GeneralOptionButton.scss";
import PropTypes from "prop-types";

const GeneralOptionButton = ({ buttonLabel, children }) => {
  return (
    <button className="general-button">
      {children}
      <span className="general-button__label">{buttonLabel}</span>
    </button>
  );
};

GeneralOptionButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default GeneralOptionButton;
