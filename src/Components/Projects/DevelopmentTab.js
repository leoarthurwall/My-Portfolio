import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DevelopmentTab = () => {
  const develop = [
    {
      image: "https://cdn.apkmonk.com/images/com.guru.cocktails.png",
      title: "Cocktail recipe app",
      summary:
        "Find a cocktail you like, and the recipe to make it.",
      technologies: ["CSS", "React", "Jest"],
      links: ["visit", " home"],
      id: 1,
    },
    {
      image: "https://opengeekslab.com/wp-content/uploads/2020/01/Technologies-Development-Team.png",
      title: "Fitness Tracker",
      summary: "Set your goal. Receive a routine. Follow the plan. The fitness tracker to get you in the shape you're happy with.",
      technologies: ["React", "AWS", "Firebase"],
      links: ["visit ", "home"],
      id: 2,
    },
    {
      image: "http://motuga.azurewebsites.net/images/AppRadio/screenshots/screen1.png",
      title: "Anywhere Radio",
      summary: "Listen to any radio station, any time, any place. Jump in and get conmnected",
      technologies: ["SCSS", "NextJS", "Postman", "Express"],
      links: ["visit ", "home"],
      id: 3,
    },
  ];

  return (
    <div className="projects-individual-design">
      {develop.map((developProject) => (
        <div className="projects-individual-container" key={developProject.id}>
          <div className="projects-individual-header-div">
            <h3 className="projects-individual-header-body">
              {developProject.title}
            </h3>
          </div>
          <div className="projects-individual-image-div">
            <img className="projects-individual-image-body" src={developProject.image} alt={developProject.title}></img>
          </div>
          <div className="projects-individual-summary-div">
            <p className="projects-individual-summary-body">
              {developProject.summary}
            </p>
          </div>
          <div className="projects-individual-tech-div">
            {developProject.technologies.map((tech) => (
              <>
                <p className="projects-individual-tech-body">{tech}</p>
                <span className="projects-individual-tech-body-span">·</span>
              </>
            ))}
          </div>
          <div className="projects-individual-actions-div">
            {/* {developProject.links.map(link => (
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
export default DevelopmentTab;
