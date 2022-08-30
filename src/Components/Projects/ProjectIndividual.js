import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


const ProjectIndividual = () => {
  const design = [
    {
      image:"Images/OneSourceImage.jpg",
      title: "1Source",
      summary:
        "A multimedia discovery app, where you can dicover new media all in one place. This is our final 4-week project. My focus was on UX/UI Design, frontend development & Authentication",
      technologies: ["Next.js", "Styled Components", "Figma", "Firebase"],
      github: "https://github.com/SchoolOfCode/final-project_front-end-odd-socs",
      website: "https://1source.netlify.app/",
      id: 1,
    },
    {
      image:"Images/PortfolioProjectImage.png",
      title: "My portfolio Site",
      summary: "My Portfolio Wep Page! See the journey from design right through to build. Making the site responsive to mobile and tablet was one of the big. learning milestones of this project",
      technologies: ["React JS", "SCSS", "Figma", "MUI Icons"],
      github: "https://github.com/leoarthurwall/My-Portfolio",
      website: "https://leowall.netlify.app/",
      id: 2,
    },
    {
      image:
        "https://d540vms5r2s2d.cloudfront.net/mad/uploads/Facebook_Relaunches_Events.jpg",
      title: "The Event Finder",
      summary: "Never miss out on an event near you again...",
      technologies: ["HTML", "CSS", "React", "JS"],
      links: ["visit ", "home"],
      id: 3,
    },
    {
      image: "https://cdn.apkmonk.com/images/com.guru.cocktails.png",
      title: "Cocktail recipe app",
      summary: "Find a cocktail you like, and the recipe to make it.",
      technologies: ["CSS", "React", "Jest"],
      links: ["visit", " home"],
      id: 1,
    },
    {
      image:
        "https://opengeekslab.com/wp-content/uploads/2020/01/Technologies-Development-Team.png",
      title: "Fitness Tracker",
      summary: "Set your goal. Receive a routine. Follow the plan.",
      technologies: ["React", "AWS", "Firebase"],
      links: ["visit ", "home"],
      id: 2,
    },
    {
      image:
        "http://motuga.azurewebsites.net/images/AppRadio/screenshots/screen1.png",
      title: "Anywhere Radio",
      summary: "Listen to any radio station, any time, any place.",
      technologies: ["SCSS", "NextJS", "Postman", "Express"],
      links: ["visit ", "home"],
      id: 3,
    },
  ];
  console.log(design[0].technologies);
  return (
    <div className="projects-individual">
      {design.map((designProject) => (
        <div className="projects-individual-container" key={designProject.id}>
        
          <div className="projects-individual-image-div">
            <img
              className="projects-individual-image-body"
              src={designProject.image}
              alt={designProject.title}
            ></img>
            <div className="projects-individual-shade-pre-click">
              </div>
              <div className="projects-individual-header-pre-click">
                {designProject.title}
              </div>
          </div>
          
          <div className="projects-individual-image-overlay">
            <div className="projects-individual-overlay-header-div">
              <div className="projects-individual-overlay-header-text">
                {designProject.title}
              </div>
              <div className="projects-individual-actions-div">
                <a className="projects-individual-actions-icon" href={designProject.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon sx={{ fontSize: "1.1rem" }} />
                </a>
                <a className="projects-individual-actions-icon" href={designProject.website} target="_blank" rel="noopener noreferrer">
                  <OpenInNewIcon sx={{ fontSize: "1.1rem" }} />
                </a>
              </div>
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
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectIndividual;
