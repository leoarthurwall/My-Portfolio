const DesignTab = () => {
  const design = [
    {
      image: "design image 1",
      title: "design title 1",
      summary: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", " home"],
      id: 1,
    },
    {
      image: "design image 2",
      title: "design title 2",
      summary: "design summary 2",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", "home"],
      id: 2,
    },
    {
      image: "design image 3",
      title: "design title 3",
      summary: "design summary 3",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", "home"],
      id: 3,
    },
  ];

  return (
    <div className="projects-individual-design">
      {design.map((designProject) => (
        <div className="projects-individual-container" key={designProject.id}>
          <div className="projects-individual-image-div">
            <img src="{designProject.image}" alt="project visual"></img> 
          </div>
          <div className="projects-individual-header-div">
            <h3 className="projects-individual-header-body">{designProject.title}</h3>
          </div>
          <div className="projects-individual-summary-div">
            <p className="projects-individual-summary-body"> {designProject.summary}</p>
          </div>
          <div className="projects-individual-icons-div">
            <p className="projects-individual-icons-body">{designProject.technologies}</p>
          </div>
          <div className="projects-individual-actions-div">
            <p className="projects-individual-actions-body">{designProject.links}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default DesignTab;
