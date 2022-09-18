import "./styles.scss";
export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-text">
        <h1 className="home-name">
          AGAT
          <span className="rotate-vertical">A</span> MOSTOWI
          <span className="flip-horizontal">K</span>
        </h1>
        <h2>Frontend developer</h2>
        </div>
        <div className="rectangle">
          <svg id="rectangle">
            <rect id="stroke" rx="3" ry="3" />
          </svg>
        </div>
      
    </div>
  );
};
