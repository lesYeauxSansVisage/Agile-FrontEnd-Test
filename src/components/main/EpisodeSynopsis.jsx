import "./EpisodeSynopsis.scss";

const EpisodeSynopsis = () => {
  return (
    <div className="episode-synopsis">
      <div className="episode-synopsis__img-container">
        <img src="https://veja.abril.com.br/wp-content/uploads/2017/05/penny-dredful.jpg?quality=90&strip=info&w=750&h=500&crop=1" />
      </div>
      <p className="episode-synopsis__text">
        Londres, 1891. A polícia investiga uma série de assassinatos, mas Sir
        Malcolm Murray e a bela Vanessa Ives sabem que há algo mais sombrio por
        trás de tudo.
      </p>
    </div>
  );
};

export default EpisodeSynopsis;
