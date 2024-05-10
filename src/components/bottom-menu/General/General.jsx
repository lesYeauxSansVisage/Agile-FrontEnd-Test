import { useTvShow } from "../../../hooks/UseTvShow";
import { AddIcon, RecIcon, SadIcon, ShareIcon } from "../../Icons";
import "./General.scss";
import GeneralOptionButton from "./GeneralOptionButton";

const General = () => {
  const { showData } = useTvShow();

  const synopsis = showData.Synopsis
    ? showData.Synopsis
    : "Houve um problema ao carregar a sinopse.";

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
          <ShareIcon />
        </GeneralOptionButton>
      </div>
      <div className="synopsis">
        <h2 className="synopsis__title">Sinopse</h2>
        <p className="synopsis__text">{synopsis}</p>
      </div>
    </div>
  );
};

export default General;
