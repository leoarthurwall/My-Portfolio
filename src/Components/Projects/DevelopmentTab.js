const DevelopmentTab = () => {
  const develop = [
    {
      image: "develop image 1",
      title: "develop title 1",
      summary: "develop summary 1",
      technologies: ["HTML", "CSS", "React", "JS"],
      links: ["visit ", "home"],
      id: 1,
    },
    {
      image: "develop image 2",
      title: "develop title 2",
      summary: "develop summary 2",
      technologies: ["HTML", "CSS", "React", "JS"],
      links: ["visit ", "home"],
      id: 2,
    },
    {
      image: "develop image 3",
      title: "develop title 3",
      summary: "develop summary 3",
      technologies: ["HTML", "CSS", "React", "JS"],
      links: ["visit ", "home"],
      id: 3,
    },
  ];

  return (
    <div className="projects-individual-develop">
      {develop.map((developProject) => (
        <div className="projects-individual-container" key={developProject.id}>
           <div className="projects-individual-image-div">
            <img src="{designProject.image}" alt="project visual"></img> 
          </div>
          <div className="projects-individual-header-div">
            <h3 className="projects-individual-header-body">{developProject.title}</h3>
          </div>
          <div className="projects-individual-summary-div">
            <p className="projects-individual-summary-body"> {developProject.summary}</p>
          </div>
          <div className="projects-individual-icons-div">
            <p className="projects-individual-icons-body">{developProject.technologies}</p>
          </div>
          <div className="projects-individual-actions-div">
            <p className="projects-individual-actions-body">{developProject.links}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default DevelopmentTab;
