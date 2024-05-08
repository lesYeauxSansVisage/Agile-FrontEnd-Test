import "./MainHeader.scss";
import exampleData from "../../example-data";

const MainHeader = () => {
  const genres = exampleData.Genres.map(
    (genre) => genre.Title && genre.Title
  ).join(" ");

  return (
    <header className="main__header">
      <h1 className="main__header__title">{exampleData.Title}</h1>
      <p className="main__header__info">
        {genres} / {exampleData.Year}
      </p>
    </header>
  );
};
export default MainHeader;
