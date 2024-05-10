import { useEffect, useState } from "react";
import "./Cast.scss";
import { motion } from "framer-motion";
import CastItem from "./CastItem";
import { useRef } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../Icons";
import { useTvShow } from "../../../hooks/UseTvShow";

const ITEM_SIZE = 150;

const Cast = () => {
  const [carouselInfo, setCarouselInfo] = useState({
    currentPositon: 0,
    MAX_LEFT: 0,
  });

  const { showData } = useTvShow();

  const cast = showData.Cast;

  const castRef = useRef();

  const leftArrowHidden = carouselInfo.currentPositon === 0;
  const rightArrowHidden =
    carouselInfo.MAX_LEFT <= 0 ||
    carouselInfo.currentPositon === carouselInfo.MAX_LEFT;

  useEffect(() => {
    if (castRef.current) {
      const MAX_LEFT =
        castRef.current.scrollWidth - castRef.current.offsetWidth;

      setCarouselInfo({
        currentPositon: carouselInfo.currentPositon,
        MAX_LEFT: MAX_LEFT,
      });
    }
  }, []);

  const handleScroll = (scrollAmount) => {
    let newScrollPosition = carouselInfo.currentPositon + scrollAmount;

    if (newScrollPosition > carouselInfo.MAX_LEFT) {
      newScrollPosition = carouselInfo.MAX_LEFT;
    }

    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    }

    setCarouselInfo({
      currentPositon: newScrollPosition,
      MAX_LEFT: carouselInfo.MAX_LEFT,
    });

    castRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <>
      <motion.div
        className="cast-container"
        key={"cast"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        exit={{ opacity: 0, transition: 1 }}
      >
        {!leftArrowHidden && (
          <button
            className="arrow-btn arrow-btn--left"
            onClick={() => {
              handleScroll(-ITEM_SIZE);
            }}
          >
            <LeftArrowIcon />
          </button>
        )}

        {!rightArrowHidden && (
          <button
            className="arrow-btn arrow-btn--right"
            onClick={() => {
              handleScroll(ITEM_SIZE);
            }}
          >
            <RightArrowIcon />
          </button>
        )}

        <div className="cast no-scrollbar" ref={castRef}>
          {cast.map((item) => (
            <CastItem key={item.ID} actor={item.Name} />
          ))}
        </div>
      </motion.div>
    </>
  );
};
export default Cast;
