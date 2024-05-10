import "./App.scss";
import MainHeader from "./components/main/MainHeader";
import SeasonInfo from "./components/main/SeasonInfo";
import BottomMenu from "./components/bottom-menu/BottomMenu";
import { useEpisode } from "./hooks/UseEpisode";
import { useTvShow } from "./hooks/UseTvShow";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const { isLoading: isShowLoading } = useEpisode();
  const { isLoading: isEpisodesLoading } = useTvShow();

  if (isEpisodesLoading || isShowLoading) {
    return (
      <div className="loading-container">
        <LoadingSpinner />
      </div>
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
