import PropTypes from "prop-types";
import "../Style/Main.css";
function StatsCardComponent(props) {
  return (
    <section className="Stats-Section">
      <div className="Stats-Wrapper">
        <div className="Stats-Content-Cont">
          <div className="stats-pads">
          <h1>Get <span>insights </span> that help your business grow.</h1>
          <p>{props.statsDescription}</p>
          <div className="flex-Stats">
            <ul>
              <li>
                <h2>{props.statsCompanies}k+</h2>
                <p>COMPANIES</p>
              </li>
              <li>
                <h2>{props.statsTemplate}</h2>
                <p>TEMPLATES</p>
              </li>
              <li>
                <h2>{props.statsQueries}M+</h2>
                <p>QUERIES</p>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="Stats-Img-Cont">
          <img src={props.statsImg} alt="" />
        </div>
      </div>
    </section>
  );
}
StatsCardComponent.propTypes = {
  statsDescription: PropTypes.string.isRequired,
  statsImg: PropTypes.string.isRequired,
  statsCompanies: PropTypes.number.isRequired,
  statsTemplate: PropTypes.number.isRequired,
  statsQueries: PropTypes.number.isRequired,
};

export default StatsCardComponent;
