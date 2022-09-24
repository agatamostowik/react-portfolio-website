import "./styles.scss";
export const Home = () => {
  return (
    <div className="home__page">
      <div className="home__logo">
        <div className="home__text">
          <h1 className="home__name">
            AGAT
            <span className="home__rotate-vertical">A</span> MOSTOWI
            <span className="home__flip-horizontal">K</span>
          </h1>
          <h2 className="home__underline">Frontend developer</h2>
        </div>
        <div className="rectangle">
          <svg id="rectangle">
            <rect id="stroke" rx="3" ry="3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
