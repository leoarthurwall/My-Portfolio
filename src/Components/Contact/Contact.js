import "../Contact/contact.scss";
import LinkButton from "../LinkButton/LinkButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FileOpenIcon from '@mui/icons-material/FileOpen';
// import resume from "../../../public/Images/Resume.png"



function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="contact-header-wording">
          Contact
        </h2>
        <hr className="contact-header-wording-line"></hr>
      </div>
      <div className="contact-main">
        <h1 className="contact-main-get-in-touch">
          Let's connect<em>!</em>
        </h1>
        <h3 className="contact-main-summary">
          Thank you for checking out my portfolio. I’m <em>currently open to new opportunities</em>. If you feel I could make a great addition to your team or project, I’d love to connect and discuss the opportunity further with you. 
        </h3>
        <LinkButton hrefProp={`mailto:leowall93@gmail.com`} bodyProp={"Connect"}/>
        <div className="contact-footer">
          <h5 className="contact-footer-made-by">© 2022. Designed & Built by Leo Wall.</h5>
          <div className="contact-footer-icon-container">
            <a className="contact-footer-icon-individual" href={"https://github.com/leoarthurwall"} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="footer-icon" sx={{fontSize: "1.2rem" }}/>  
            </a>
            <a className="contact-footer-icon-individual" href={"https://www.linkedin.com/in/leo-wall/"} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="footer-icon"  sx={{fontSize: "1.2rem" }}/>
            </a>
            <a className="contact-footer-icon-individual" href={`mailto:leowall93@gmail.com`} target="_blank" rel="noopener noreferrer">
              <EmailIcon className="footer-icon"  sx={{fontSize: "1.2rem" }}/>
            </a>
            <a className="contact-footer-icon-individual" href={`Resume/ResumeLeoWall.pdf`} target="_blank" rel="noopener noreferrer">
            <FileOpenIcon className="footer-icon"  sx={{fontSize: "1.2rem" }}/>
              {/* <img className="contact-footer-resume-icon" src="Images/Resume.png" alt= "view resume" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
