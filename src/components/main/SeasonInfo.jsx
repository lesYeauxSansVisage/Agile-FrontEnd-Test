import "./SeasonInfo.scss";
import CustomNavbar from "../UI/CustomNavbar";
import Episode from "./Episode";

const SeasonInfo = () => {
  const seasons = [1, 2];
  const seasonsLabels = seasons.map((seasonNumber) => "T" + seasonNumber);
  return (
    <section className="season-info">
      <div className="season-info-wrapper">
        <CustomNavbar labels={seasonsLabels} />
        <ul className="season-info__episodes">
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
        </ul>
      </div>
    </section>
  );
};

export default SeasonInfo;
