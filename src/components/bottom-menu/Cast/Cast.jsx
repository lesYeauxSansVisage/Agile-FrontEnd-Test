import { useEffect, useState } from "react";
import "./Cast.scss";
import CastItem from "./CastItem";
import { useRef } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../Icons";

const ITEM_SIZE = 150;

const DATA_EXAMPLE = [
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
  { character: "Saul Goodman", actor: "James Mcgill" },
];

const Cast = () => {
  const [carouselInfo, setCarouselInfo] = useState({
    currentPositon: 0,
    MAX_LEFT: 0,
  });

  const castRef = useRef();

  console.log(carouselInfo);

  const leftArrowHidden = carouselInfo.currentPositon === 0;
  const rightArrowHidden =
    carouselInfo.MAX_LEFT <= 0 ||
    carouselInfo.currentPositon === carouselInfo.MAX_LEFT;

  useEffect(() => {
    console.log("effect used");
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
      <div className="cast-container">
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

        <div className="cast" ref={castRef}>
          {DATA_EXAMPLE.map((item, index) => (
            <CastItem
              key={index}
              actor={item.actor}
              character={item.character}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Cast;
