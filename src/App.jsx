import { useContext } from "react";
import "./App.scss";
import ShowInfoContext from "./store/show-info-context";
import exampleData from "./example-data";
import GeneralOptionButton from "./components/bottom-navbar/GeneralOptionButton";
import MainHeader from "./components/main/MainHeader";
import CustomNavbar from "./components/UI/CustomNavbar";
import SeasonInfo from "./components/main/SeasonInfo";

function App() {
  const { getShowInfo, getEpisodeInfo } = useContext(ShowInfoContext);

  getShowInfo();

  const genres = exampleData.Genres.map(
    (genre) => genre.Title && genre.Title
  ).join(" ");

  const bottomNavbarLabels= ["Geral", "Elenco", "Principais Prêmios"]

  return (
    <div className="container">
      <section>
        <div className="main">
          <MainHeader />

          <SeasonInfo />
        </div>

        <div className="navbar">
          <div className="navbar-options-wrapper">
            <CustomNavbar labels={bottomNavbarLabels} />
          </div>

          <div className="general__buttons">
            <GeneralOptionButton buttonLabel="Minha Lista" buttonIcon="a" />
            <GeneralOptionButton buttonLabel="Avaliar" buttonIcon="a" />
            <GeneralOptionButton buttonLabel="Gravar" buttonIcon="a" />
            <GeneralOptionButton buttonLabel="Compartilhar" buttonIcon="a" />
          </div>

          <div className="synopsis">
            <h2 className="synopsis__title">Sinopse</h2>
            <p className="synopsis__text">{exampleData.Synopsis}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
