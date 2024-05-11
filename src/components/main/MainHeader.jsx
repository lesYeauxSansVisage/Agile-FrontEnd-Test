import "./MainHeader.scss";
import { useTvShow } from "../../hooks/UseTvShow";
import { CloseIcon } from "../Icons";

const MainHeader = () => {
  const { showData } = useTvShow();

  const title = showData.Title;
  const genres = showData.Genres.map((genre) => genre.Title).join(" ");
  const year = showData.Year;

  return (
    <header className="main-header">
      <h1 className="main-header__title">{title}</h1>
      <h2 className="main-header__info">
        {genres} / {year}
      </h2>

      <button className="main-header__close-button">
        <CloseIcon />
      </button>
    </header>
  );
};
export default MainHeader;
