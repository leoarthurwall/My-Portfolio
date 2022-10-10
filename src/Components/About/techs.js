import "../About/about.scss";
import TechItem from "./TechItem/TechItem";

function AboutTechs() {
  return (
    <div className="about-section-tech-section">
      <h4 className="about-section-summary-h4">
        Key texhnologies worked with:
      </h4>

      <div className="about-section-tech-container">
        <div className="about-section-tech-body">
          <TechItem techName={"Figma"} />
          <TechItem techName={"HTML"} />
          <TechItem techName={"CSS"} />
          <TechItem techName={"Javascript"} />
        </div>
        <div className="about-section-tech-body">
          <TechItem techName={"React.js"} />
          <TechItem techName={"Typescript"} />
          <TechItem techName={"Jest"} />
          <TechItem techName={"Cypress"} />
        </div>
        <div className="about-section-tech-body">
          <TechItem techName={"Node.js"} />
          <TechItem techName={"Express.ja"} />
          <TechItem techName={"PostgreSQL"} />
          <TechItem techName={"Firebase"} />

          {/* <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">AWS</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Miro</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Next js</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Auth0</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Heroku</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Git/GitHub</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Netlify</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">SCSS</li>
          </div>
          <div className="about-section-tech-arrow-list-container">
            <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
            <li className="about-section-tech-list">Styled Components</li>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default AboutTechs;
