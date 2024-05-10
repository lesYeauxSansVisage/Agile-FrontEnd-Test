import "./Backdrop.scss";
import PropTypes from "prop-types";

const Backdrop = ({ children }) => {
  return <div className="backdrop">{children}</div>;
};

Backdrop.propTypes = {
  children: PropTypes.node,
};

export default Backdrop;
