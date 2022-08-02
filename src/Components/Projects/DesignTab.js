import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DesignTab = () => {
  const design = [
    {
      image: "https://www.infobae.com/new-resizer/gvU1Me_FuUIB9sryOC9LlGtTHmc=/768x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5TD7NOGP5NECNAZ3L6CG7TPIK4.jpg",
      title: "The Spotify Project",
      summary:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information.",
      technologies: ["HTML", "CSS", "React", "JS", "Next"],
      links: ["visit", " home"],
      id: 1,
    },
    {
      image: "design image 2",
      title: "design title 2",
      summary: "design summary 2",
      technologies: ["HTML", "CSS", "React", "JS"],
      links: ["visit ", "home"],
      id: 2,
    },
    {
      image: "design image 3",
      title: "design title 3",
      summary: "design summary 3",
      technologies: ["HTML", "CSS", "React", "JS"],
      links: ["visit ", "home"],
      id: 3,
    },
  ];
  console.log(design[0].technologies);
  return (
    <div className="projects-individual-design">
      {design.map((designProject) => (
        <div className="projects-individual-container" key={designProject.id}>
          <div className="projects-individual-header-div">
            <h3 className="projects-individual-header-body">
              {designProject.title}
            </h3>
          </div>
          <div className="projects-individual-image-div">
            <img className="projects-individual-image-body" src={designProject.image} alt={designProject.title}></img>
          </div>
          <div className="projects-individual-summary-div">
            <p className="projects-individual-summary-body">
              {designProject.summary}
            </p>
          </div>
          <div className="projects-individual-tech-div">
            {designProject.technologies.map((tech) => (
              <>
                <p className="projects-individual-tech-body">{tech}</p>
                <span className="projects-individual-tech-body-span">·</span>
              </>
            ))}
          </div>
          <div className="projects-individual-actions-div">
            {/* {designProject.links.map(link => (
            <p className="projects-individual-actions-body">{link}</p>
          ))} */}
            <GitHubIcon />
            <OpenInNewIcon />
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default DesignTab;
