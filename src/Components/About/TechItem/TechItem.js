import "../../About/about.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TechItem = ({techName}) => {
  return (
    <div className="about-section-tech-arrow-list-container">
    <ArrowRightIcon sx={{ color: "#DD6031" }} fontSize="small" />
    <li className="about-section-tech-list">{techName}</li>
  </div>
  )
}

export default TechItem