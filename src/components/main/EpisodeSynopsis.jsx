import { forwardRef } from "react";
import "./EpisodeSynopsis.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const EpisodeSynopsis = forwardRef(function EpisodeSynopsis(props, ref) {
  return (
    <motion.div
      key={props.img}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      exit={{ opacity: 0, transition: 1 }}
      className="episode-synopsis"
      ref={ref}
    >
      <div className="episode-synopsis__img-container">
        <img src={props.img} alt="prévia do episódio" />
      </div>
      <p className="episode-synopsis__text">{props.synopsis}</p>
    </motion.div>
  );
});

EpisodeSynopsis.propTypes = {
  synopsis: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default EpisodeSynopsis;
