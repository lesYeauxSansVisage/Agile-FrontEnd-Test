import CustomNavbar from "../UI/CustomNavbar";
import General from "./General/General";
import "./BottomMenu.scss";
import Cast from "./Cast/Cast";
import { useState } from "react";

const BottomMenu = () => {
  const bottomNavbarLabels = [
    { id: "general", labelText: "Geral" },
    { id: "cast", labelText: "Elenco" },
    { id: "awards", labelText: "Principais Prêmios" },
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
      <p className="awards__text">Não há informações sobre premiações.</p>
    );
  }

  return (
    <div className="bottom-menu">
      <div className="bottom-menu__options-wrapper">
        <CustomNavbar
          labels={bottomNavbarLabels}
          setActiveTab={changeTabActive}
          activeTab={activeTab}
        />
      </div>

      {content}
    </div>
  );
};
export default BottomMenu;
