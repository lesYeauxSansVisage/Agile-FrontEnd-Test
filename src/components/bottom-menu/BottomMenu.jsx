import CustomNavbar from "../UI/CustomNavbar";
import General from "./General/General";
import "./BottomMenu.scss";
import Cast from "./Cast/Cast";
import { useState } from "react";
import { motion } from "framer-motion";

const BottomMenu = () => {
  const bottomNavbarLabels = [
    { id: "general", label: "Geral" },
    { id: "cast", label: "Elenco" },
    { id: "awards", label: "Principais Prêmios" },
  ];

  let content;

  const [activeTab, setActiveTab] = useState("general");

  const changeTabActive = (tabName) => {
    setActiveTab(tabName);
  };

  if (activeTab === "general") {
    content = <General />;
  } else if (activeTab === "cast") {
    content = <Cast />;
  } else if (activeTab === "awards") {
    content = (
      <motion.p
        key={"awards"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        exit={{ opacity: 0, transition: 1 }}
        className="awards__text"
      >
        Não há informações sobre premiações.
      </motion.p>
    );
  }

  return (
    <div className="bottom-menu">
      <div className="bottom-menu__options-wrapper">
        <CustomNavbar
          labels={bottomNavbarLabels}
          setActiveTab={changeTabActive}
          activeTab={activeTab}
          hasIcon={true}
        />
      </div>

      {content}
    </div>
  );
};
export default BottomMenu;
