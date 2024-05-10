import { LogoTelecineIcon } from "../Icons";
import "./CustomNavbar.scss";
import PropTypes from "prop-types";

const CustomNavbar = ({ labels, setActiveTab, activeTab, hasIcon }) => {
  const handleItemClick = (labelId) => {
    setActiveTab(labelId);
  };

  return (
    <nav className="custom-navbar">
      <ul className="custom-navbar__options no-scrollbar">
        {labels.map((label) => (
          <li
            key={label.id}
            className={`custom-navbar__option ${
              activeTab === label.id ? "active" : ""
            }`}
            role="button"
            onClick={() => handleItemClick(label.id)}
          >
            {label.label}
          </li>
        ))}

        {hasIcon && <LogoTelecineIcon />}
      </ul>
    </nav>
  );
};

CustomNavbar.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, label: PropTypes.string })
  ).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool.isRequired,
};

export default CustomNavbar;
