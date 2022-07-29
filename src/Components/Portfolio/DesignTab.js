const DesignTab = () => {

const design = [
    {image: 'design image 1', title: 'design title 1', summary: 'design summary 1', technologies: ["HTML  ", "CSS  ", "React  ", "JS  "], links: ["visit ", "home"],id: 1},
    {image: 'design image 2', title: 'design title 2', summary: 'design summary 2', technologies: ["HTML  ", "CSS  ", "React  ", "JS  "], links: ["visit ", "home"],id: 2},
    {image: 'design image 3', title: 'design title 3', summary: 'design summary 3', technologies: ["HTML  ", "CSS  ", "React  ", "JS  "], links: ["visit ", "home"],id: 3},
]

  return (
    <div className="portfolio-individual-design">
      {design.map((designProject) => (
        <div className="portfolio-individual-container" key={designProject.id}>
            <div className="portfolio-individual-image">{designProject.image}</div>
            <div className="portfolio-individual-header">{designProject.title}</div>
            <div className="portfolio-individual-summary">{designProject.summary}</div>
            <div className="portfolio-individual-icons">{designProject.technologies}</div>
            <div className="portfolio-individual-actions">{designProject.links}</div>
        </div>
      ))};
    </div>


    
  );
};
export default DesignTab;