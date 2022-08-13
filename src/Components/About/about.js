import "../About/about.scss";
import pngegg from "../../Images/pngegg.png";
import AboutTechs from "./techs";

function About() {
  return (
    <div className="about-section-container" id="About-Link">
      <div className="about-section-centraliser">
        <div className="about-section-header">
          <h1 className="about-section-header-wording">
            About me<em>.</em>
          </h1>
        </div>
        <div className="about-section-main">
          <div className="about-section-left">
            <text className="about-section-summary">
              <p className="about-section-summary-p">
                My journey into the world of tech began at the start of 2022.
                Prior to this, I was Playing national level rugby across Spain.
                Breaking my leg last year during a rugby match gave me valuable
                perspective on how I want my future to look.{" "}
              </p>
              <p className="about-section-summary-p">
                This led me to discover and enrol on a 12-week creative
                computing bootcamp at Bath Spa University where I developed
                skills and experience with all things UX/UI.{" "}
              </p>
              <p className="about-section-summary-p">
                With a hunger to experience software development aswell, I
                enrolled on the School Of Code 16-week full-stack development
                course. I had the privilidge of collaborating with many amazing
                people, learning many new technologies and build full-stack
                applications.{" "}
              </p>
              <p className="about-section-summary-p">
                If I’m not designing and developing applications, you’ll likely
                find me doing what else I love: road cycling,
                playing rugby, sailing, surfing, calisthenics, travelling, playing the piano,
                or having a tinker in the garage.{" "}
              </p>
              <AboutTechs />
            </text>
          </div>
          <div className="about-section-right">
            <img className="about-section-profile-photo" src={pngegg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
