import "./Episode.scss";

const Episode = () => {
  return (
    <li className="episode">
      <span className="episode__number">1</span>
      <span className="episode__title">Nice Work</span>

      <button className="episode__play-button">
        <svg
          className="episode__play-icon"
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.288"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#1C274C"
              strokeWidth="0.552"
            ></circle>{" "}
            <path
              d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
              stroke="#1C274C"
              strokeWidth="0.552"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </li>
  );
};

export default Episode;
