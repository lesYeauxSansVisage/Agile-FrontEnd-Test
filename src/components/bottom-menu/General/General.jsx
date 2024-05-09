import exampleData from "../../../example-data";
import { AddIcon, RecIcon, SadIcon } from "../../Icons";
import "./General.scss";
import GeneralOptionButton from "./GeneralOptionButton";

const General = () => {
  return (
    <div className="general">
      <div className="general__buttons">
        <GeneralOptionButton buttonLabel="Minha Lista">
          <AddIcon />
        </GeneralOptionButton>
        <GeneralOptionButton buttonLabel="Avaliar">
          <SadIcon />
        </GeneralOptionButton>
        <GeneralOptionButton buttonLabel="Gravar">
          <RecIcon />
        </GeneralOptionButton>
        <GeneralOptionButton buttonLabel="Compartilhar">
          <RecIcon />
        </GeneralOptionButton>
      </div>
      <div className="synopsis">
        <h2 className="synopsis__title">Sinopse</h2>
        <p className="synopsis__text">{exampleData.Synopsis}</p>
      </div>
    </div>
  );
};

export default General;
