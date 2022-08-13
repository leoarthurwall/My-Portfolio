import "../About/about.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function AboutTechs(){
    return(
        <div className="about-section-tech-section">
                <h4 className="about-section-summary-h4">
                  Here are some of the technologies I work with:
                </h4>
              

              <div className="about-section-tech-container">
                <div className="about-section-tech-body">
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">HTML</li>
                  </div>
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">CSS</li>
                  </div>
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">Javascript</li>
                  </div>
                </div>
                <div className="about-section-tech-body">
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">React js</li>
                  </div>
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">Next js</li>
                  </div>
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">Node js</li>
                  </div>
                </div>
                <div className="about-section-tech-body">
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">SQL</li>
                  </div>
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon  sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">Figma</li>
                  </div>
                  <div className="about-section-tech-arrow-list-container">
                    <ArrowRightIcon sx={{color: "#DD6031" }} fontSize="small"/>
                    <li className="about-section-tech-list">Miro</li>
                  </div>
                </div>
              </div>
              </div>
    )
}
export default AboutTechs