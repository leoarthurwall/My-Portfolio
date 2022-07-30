const DesignTab = () => {
  const design = [
    {
      image: "design image 1",
      title: "design title 1",
      summary: "design summary 1",
      technologies: ["HTML  ", "CSS  ", "React  ", "JS  "],
      links: ["visit ", "home"],
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
          <div className="projects-individual-image">
            {designProject.image}
          </div>
          <div className="projects-individual-header">
            {designProject.title}
          </div>
          <div className="projects-individual-summary">
            {designProject.summary}
          </div>
          <div className="projects-individual-icons">
            {designProject.technologies}
          </div>
          <div className="projects-individual-actions">
            {designProject.links}
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default DesignTab;
