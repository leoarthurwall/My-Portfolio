import "../About/about.scss";
import AboutTechs from "./techs";

function About() {
  return (
    <div className="about-section-container" id="About-Link">
      <div className="about-section-centraliser">
        <div className="about-section-header">
          <h1 className="about-section-header-wording">
            About
          </h1>
          <hr className="about-section-header-wording-line"></hr>
        </div>
        <div className="about-section-main">
          <div className="about-section-left">
            <text className="about-section-summary">
              <p className="about-section-summary-p">
                My journey into the world of tech began at the start of 2022.
                Prior to this, I was Playing national level rugby across Spain
                for FC Barcelona Rugby club. It was breaking my leg during a
                rugby match last year that enabled me to get perspective and
                take action on how I wanted my future to look.{" "}
              </p>
              <p className="about-section-summary-p">
                Having lived in Barcelona for 6 years, I had become very aware of its booming tech industry, and eager for a way in.
                So, I decided it was the right time to move back to England and
                develop the skills and experience for a successful career in tech.{" "}
              </p>{" "}
              <p className="about-section-summary-p">
                January this year, I enrolled on a 12-week creative computing
                bootcamp at Bath Spa University. Here, I developed industry
                skills related to User Interface (UI)/ User Experience (UX)
                design, product/ project management, and public speaking.{" "}
              </p>
              <p className="about-section-summary-p">
                Curious for a deeper dive into software development, in April I
                enrolled on the School Of Code 16-week full-stack development
                bootcamp. I had the privilege of collaborating with amazing
                people, learning many new technologies and building full-stack
                applications.{" "}
              </p>
              <p className="about-section-summary-p">
                I throughly enjoy designing and developing applications in my free time. When i'm not, you’ll likely
                find me doing what I also love: road cycling, playing rugby,
                sailing, surfing, calisthenics, travelling, playing the piano,
                or having a tinker in the garage.{" "}
              </p>
            </text>
          </div>
          <div className="about-section-right">
            <img
              className="about-section-profile-photo"
              src="Images/LeoWallProfile.jpeg"
              alt="ProfilePhoto"
            />
            <AboutTechs />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
