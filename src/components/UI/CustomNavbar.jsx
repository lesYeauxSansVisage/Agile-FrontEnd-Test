import "./CustomNavbar.scss";
import PropTypes from "prop-types";

const CustomNavbar = ({ labels }) => {
  // const labels = ["General", "Elenco", "Principais Prêmios"];

  return (
    <nav className="custom-navbar">
      <ul className="custom-navbar__options">
        {labels.map((label, index) => (
          <li key={index} className="custom-navbar__option">
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

CustomNavbar.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default CustomNavbar;
