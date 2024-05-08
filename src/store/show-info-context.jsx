import { createContext } from "react";
import PropTypes from "prop-types";

const ShowInfoContext = createContext();

export const ShowInfoProvider = ({ children }) => {
  const getShowInfo = async () => {
    try {
      const data = await fetch(
        "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
      );

      const res = await data.json();

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getEpisodeInfo = async () => {
    try {
      const data = await fetch(
        `https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json`
      );

      const res = await data.json();

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ShowInfoContext.Provider value={{ getShowInfo, getEpisodeInfo }}>
      {children}
    </ShowInfoContext.Provider>
  );
};

ShowInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShowInfoContext;
