

const DevelopmentTab = () => {
    
const develop = [
    {image: 'develop image 1', title: 'develop title 1', summary: 'develop summary 1', technologies: ["HTML  ", "CSS  ", "React  ", "JS  "], links: ["visit ", "home"],id: 1},
    {image: 'develop image 2', title: 'develop title 2', summary: 'develop summary 2', technologies: ["HTML  ", "CSS  ", "React  ", "JS  "], links: ["visit ", "home"],id: 2},
    {image: 'develop image 3', title: 'develop title 3', summary: 'develop summary 3', technologies: ["HTML  ", "CSS  ", "React  ", "JS  "], links: ["visit ", "home"],id: 3},
]
    
    
    return (
    <div className="portfolio-individual-develop">
        {develop.map((developProject) => (
        <div className="portfolio-individual-container" key={developProject.id}>
            <div className="portfolio-individual-image">{developProject.image}</div>
            <div className="portfolio-individual-header">{developProject.title}</div>
            <div className="portfolio-individual-summary">{developProject.summary}</div>
            <div className="portfolio-individual-icons">{developProject.technologies}</div>
            <div className="portfolio-individual-actions">{developProject.links}</div>
         </div>
        ))};
    </div>
    );
};
export default DevelopmentTab;