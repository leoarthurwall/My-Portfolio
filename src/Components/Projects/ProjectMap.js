import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const DesignTab = () => {
  const design = [
    {
      image:
        "https://www.infobae.com/new-resizer/gvU1Me_FuUIB9sryOC9LlGtTHmc=/768x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5TD7NOGP5NECNAZ3L6CG7TPIK4.jpg",
      title: "The Spotify Project",
      summary: "A web app for visualizing personalized Spotify data. ",
      technologies: ["HTML", "CSS", "React", "JS", "Next"],
      links: ["visit", " home"],
      id: 1,
    },
    {
      image:
        "https://www.zdnet.com/a/img/resize/e8a95cd8020056db5fe052fac1d39ed6f2d4324f/2022/05/18/830e6364-cc17-4e4b-ba22-db7866c57dec/carrot-weather-best-weather-app.jpg?width=1200&fit=bounds&auto=webp",
      title: "The Weather App",
      summary: "A weather app to get the forcast right, wherever you are.",
      technologies: ["HTML", "CSS", "React"],
      links: ["visit ", "home"],
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
    <div className="projects-individual-design">
      {design.map((designProject) => (
        <div className="projects-individual-container" key={designProject.id}>
          <img
            className="projects-individual-image-body"
            src={designProject.image}
            alt={designProject.title}
          ></img>
          <div className="projects-individual-image-overlay">
            <h3 className="projects-individual-header-body">
              {designProject.title}
            </h3>
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
              <div className="projects-individual-actions-icon">
                <GitHubIcon />
              </div>
              <div className="projects-individual-actions-icon">
                <OpenInNewIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default DesignTab;
