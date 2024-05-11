import "./App.scss";

import { useEffect } from "react";
import { useEpisode } from "./hooks/UseEpisode";
import { useTvShow } from "./hooks/UseTvShow";

import MainHeader from "./components/main/MainHeader";
import SeasonInfo from "./components/main/SeasonInfo";
import BottomMenu from "./components/bottom-menu/BottomMenu";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Backdrop from "./components/UI/Backdrop";

function App() {
  const { isLoading: isShowLoading, error: episodeHasError } = useEpisode();
  const {
    showData,
    isLoading: isEpisodesLoading,
    error: tvShowHasError,
  } = useTvShow();

  useEffect(() => {
    if (showData) {
      document.title = showData.Title;
      document.documentElement.style.setProperty(
        "--background-img",
        `url('${showData.Images.Background}')`
      );
    }
  }, [showData]);

  if (isEpisodesLoading || isShowLoading) {
    return (
      <Backdrop>
        <LoadingSpinner />
      </Backdrop>
    );
  }

  if (tvShowHasError || episodeHasError) {
    return (
      <Backdrop>
        <p className="error-message">
          Houve um erro ao tentar buscar os dados sobre o show.
        </p>
      </Backdrop>
    );
  }

  return (
    <div className="container">
      <main className="main">
        <MainHeader />

        <SeasonInfo />
      </main>

      <BottomMenu />
    </div>
  );
}

export default App;
