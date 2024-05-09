import "./CustomNavbar.scss";
import PropTypes from "prop-types";

const CustomNavbar = ({ labels, setActiveTab, activeTab }) => {
  const handleItemClick = (labelId) => {
    setActiveTab(labelId);
  };

  return (
    <nav className="custom-navbar">
      <ul className="custom-navbar__options">
        {labels.map((label) => (
          <li
            key={label.id}
            className={`custom-navbar__option ${
              activeTab === label.id ? "active" : ""
            }`}
            onClick={() => handleItemClick(label.id)}
          >
            {label.labelText}
          </li>
        ))}
      </ul>
    </nav>
  );
};

CustomNavbar.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, labelText: PropTypes.string })
  ).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default CustomNavbar;
