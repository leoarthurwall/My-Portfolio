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
      image:"Images/ResponsiveWebsiteImage.png",
      title: "Responsive Website",
      summary:
        "A responsive website developed and inspired by a professional website. Check out the GitHub repo to compare both websites.",
      technologies: ["React.js", "Styled Components"],
      github: "https://github.com/leoarthurwall/Responsive-Website-Build",
      website: "https://responsive-website-lw.netlify.app/",
      id: 2,
    },
    // {
    //   image:"Images/PortfolioProjectImage.png",
    //   title: "My portfolio Site",
    //   summary: "My Portfolio Wep Page! See the journey from design right through to build. Making the site responsive to mobile and tablet was one of the big. learning milestones of this project",
    //   technologies: ["React.js", "SCSS", "Figma", "mui Icons"],
    //   github: "https://github.com/leoarthurwall/My-Portfolio",
    //   website: "https://leowall.netlify.app/",
    //   id: 2,
    // },

    // {
    //   image: "Images/HappyCamperProjectImage.png",
    //   title: "Happy Camper",
    //   summary: "A course learning Tracker for School of Code Students. This was the mid-course, week-long production. My area focused on the design & build of the frontend.",
    //   technologies: ["React.js", "CSS", "Figma", "netlify"],
    //   github: "https://github.com/SchoolOfCode/w9_frontend-project-bc12room27",
    //   website: "https://happycamper.netlify.app/",
    //   id: 3,
    // },
    {
      image: "Images/RecipeApp.png",
      title: "The Recipe App",
      summary: "Dicover a whole world of recipes simply by entering a single ingredient. The recipe app was developed using React and Typescript and used a recipe API to gather the data. Attention was given to the simple and user friendly UI.",
      technologies: ["React", "Typescript", "CSS", "API"],
      github: "https://github.com/leoarthurwall/Recipe-App",
      website: "https://lw-recipefinder.netlify.app/",
      id: 3,
    },
    {
      image: "Images/CoverImage.png",
      title: "Click 'n' Brick",
      summary: "UX/UI design project - The Click’n’Brick Property Marketplace App is a platform designed to make buying property online the go-to choice for any and all prospective buyers within the UK.",
      technologies: ["Miro", "Figma", "Pen & Paper"],
      github: "https://github.com/leoarthurwall/Click-n-Brick",
      website: "https://www.figma.com/proto/ngjI1rbryGHOL90MvymDnW/Untitled?node-id=1%3A1799&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3035",
      id: 4,
    },
    {
      image: "Images/WeatherCoverImage.jpg",
      title: "Weather App",
      summary: "Search for the current weather in any location using this weather app.",
      technologies: ["React.js", "CSS", "Axios",],
      github: "https://github.com/leoarthurwall/Weather-App",
      website: "https://leowall-weather.netlify.app/",
      id: 5,
    },
    {
      image: "Images/todoCover.png",
      title: "Todo App",
      summary: "The CRUD todo app. Create, Read, update & Delete your todos. They are also saved to local storage so you can come back to them, whenever you feel like",
      technologies: ["React.js", "CSS", "heroIcons",],
      github: "https://github.com/leoarthurwall/new-todo-list",
      website: "https://leowall-todo.netlify.app/",
      id: 6,
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
