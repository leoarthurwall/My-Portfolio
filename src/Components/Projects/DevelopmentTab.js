const DevelopmentTab = () => {
  const develop = [
    {
      image: "develop image 1",
      title: "develop title 1",
      summary: "develop summary 1",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", "home"],
      id: 1,
    },
    {
      image: "develop image 2",
      title: "develop title 2",
      summary: "develop summary 2",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", "home"],
      id: 2,
    },
    {
      image: "develop image 3",
      title: "develop title 3",
      summary: "develop summary 3",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", "home"],
      id: 3,
    },
  ];

  return (
    <div className="projects-individual-develop">
      {develop.map((developProject) => (
        <div className="projects-individual-container" key={developProject.id}>
          <div className="projects-individual-image">
            {developProject.image}
          </div>
          <div className="projects-individual-header">
            {developProject.title}
          </div>
          <div className="projects-individual-summary">
            {developProject.summary}
          </div>
          <div className="projects-individual-icons">
            {developProject.technologies}
          </div>
          <div className="projects-individual-actions">
            {developProject.links}
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default DevelopmentTab;
