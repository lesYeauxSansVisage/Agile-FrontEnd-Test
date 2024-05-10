import "./MainHeader.scss";
import { useTvShow } from "../../hooks/UseTvShow";

const MainHeader = () => {
  const { showData } = useTvShow();

  const title = showData.Title;
  const genres = showData.Genres.map((genre) => genre.Title).join(" ");
  const year = showData.Year;

  return (
    <header className="main__header">
      <h1 className="main__header__title">{title}</h1>
      <p className="main__header__info">
        {genres} / {year}
      </p>
    </header>
  );
};
export default MainHeader;
