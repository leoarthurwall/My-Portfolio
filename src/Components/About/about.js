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
                Prior to this, I was Playing national level rugby across Spain
                for FC Barcelona Rugby club. It was breaking my leg during a
                rugby match last year that enabled me to get perspective on how
                I wanted my future look.{" "}
              </p>
              <p className="about-section-summary-p">
                With my heart set on building a career in tech, I moved back to England
                to enrol on a 12-week creative computing bootcamp at Bath Spa
                University where I developed the skills and experience with all
                things UX/UI.{" "}
              </p>
              <p className="about-section-summary-p">
                With a hunger and curiosity to experience software development
                too, I then enrolled on the School Of Code 16-week full-stack
                development bootcamp. I had the privilege of collaborating with
                amazing people, learning many new technologies and building
                full-stack applications.{" "}
              </p>
              <p className="about-section-summary-p">
                If I’m not designing and developing applications, you’ll likely
                find me doing what else I love: road cycling, playing rugby,
                sailing, surfing, calisthenics, travelling, playing the piano,
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
