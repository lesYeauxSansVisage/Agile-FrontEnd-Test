import "./GeneralOptionButton.scss";
import PropTypes from "prop-types";

const GeneralOptionButton = ({ buttonLabel, buttonIcon }) => {
  return (
    <button className="general-button">
      <svg
        className="general-button__icon"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M960 0c529.36 0 960 430.645 960 960 0 529.36-430.64 960-960 960-529.355 0-960-430.64-960-960C0 430.645 430.645 0 960 0Zm0 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.12 379.934 847.06 847.059 847.06 467.12 0 847.06-379.94 847.06-847.06 0-467.125-379.94-847.059-847.06-847.059Zm0 313.726c294.55 0 533.33 238.781 533.33 533.333 0 294.55-238.78 533.33-533.33 533.33-294.552 0-533.333-238.78-533.333-533.33 0-294.552 238.781-533.333 533.333-533.333Z"
          fillRule  ="evenodd"
        />
      </svg>
      <span className="general-button__label">{buttonLabel}</span>
    </button>
  );
};

GeneralOptionButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

export default GeneralOptionButton;
