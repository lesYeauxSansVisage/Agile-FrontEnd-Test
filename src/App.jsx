import "./App.scss";
import MainHeader from "./components/main/MainHeader";
import SeasonInfo from "./components/main/SeasonInfo";
import BottomMenu from "./components/bottom-menu/BottomMenu";
import { useEpisode } from "./hooks/UseEpisode";
import { useTvShow } from "./hooks/UseTvShow";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Backdrop from "./components/UI/Backdrop";

function App() {
  const { isLoading: isShowLoading, error: episodeHasError } = useEpisode();
  const { isLoading: isEpisodesLoading, error: tvShowHasError } = useTvShow();

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
        <p style={{ fontSize: "3rem" }}>
          Houve um erro ao tentar buscar os dados sobre o show.
        </p>
      </Backdrop>
    );
  }

  return (
    <div className="container">
      <section>
        <div className="main">
          <MainHeader />

          <SeasonInfo />
        </div>

        <BottomMenu />
      </section>
    </div>
  );
}

export default App;
