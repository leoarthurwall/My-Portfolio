import "../Contact/contact.scss";
import LinkButton from "../LinkButton/LinkButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import resume from '../../Images/resume.png'



function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="contact-header-wording">
          Contact<em>.</em>
        </h2>
      </div>
      <div className="contact-main">
        <h1 className="contact-main-get-in-touch">
          Let's connect<em>!</em>
        </h1>
        <h3 className="contact-main-summary">
          <em>Thank you</em> for viewing my portfolio. I hope you enjoyed your
          time here. If you feel I could be a great fit within your team, or
          you'd simply like to have a chat, please{" "}
          <em>feel free to reach out</em>.{" "}
        </h3>
        <LinkButton hrefProp={`mailto:leowall93@gmail.com`} bodyProp={"Contact"}/>
        <div className="contact-footer">
          <h5 className="contact-footer-made-by">© 2022. Designed & Built by Leo Wall.</h5>
          <div className="contact-footer-icon-container">
            <a className="contact-footer-icon-individual" href={"https://github.com/leoarthurwall"} target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{fontSize: "1.2rem" }}/>  
            </a>
            <a className="contact-footer-icon-individual" href={"https://www.linkedin.com/in/leo-wall/"} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{fontSize: "1.2rem" }}/>
            </a>
            <a className="contact-footer-icon-individual" href={`mailto:leowall93@gmail.com`} target="_blank" rel="noopener noreferrer">
              <EmailIcon sx={{fontSize: "1.2rem" }}/>
            </a>
            <a className="contact-footer-icon-individual" href={`/resume.pdf`} target="_blank" rel="noopener noreferrer">
              <img className="contact-footer-resume-icon" src={resume} alt= "view resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
