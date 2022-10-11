import "../About/about.scss";
import TechItem from "./TechItem/TechItem";

function AboutTechs() {
  return (
    <div className="about-section-tech-section">
      <h4 className="about-section-summary-h4">
        Key technologies I work with:
      </h4>
      <div className="about-section-tech-container">
        <div className="about-section-tech-body">
          <TechItem techName={"Figma"} />
          <TechItem techName={"HTML"} />
          <TechItem techName={"CSS"} />
          <TechItem techName={"Javascript"} />
          <TechItem techName={"React.js"} />
          <TechItem techName={"Typescript"} />
          <TechItem techName={"Next.js"} />
        </div>
        <div className="about-section-tech-body">
          <TechItem techName={"Git/Github"} />
          <TechItem techName={"Jest"} />
          <TechItem techName={"Cypress"} />
          <TechItem techName={"SCSS"} />
          <TechItem techName={"Auth0"} />
          <TechItem techName={"Heroku"} />
          <TechItem techName={"Netlify"} />
        </div>
        <div className="about-section-tech-body">
          <TechItem techName={"Node.js"} />
          <TechItem techName={"Express.ja"} />
          <TechItem techName={"PostgreSQL"} />
          <TechItem techName={"Firebase"} />
          <TechItem techName={"AWS"} />
          <TechItem techName={"Miro"} />
          <TechItem techName={"Styled Components"} />
        </div>
      </div>
    </div>
  );
}
export default AboutTechs;
