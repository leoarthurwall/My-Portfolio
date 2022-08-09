import './Projects.scss'
import DesignTab from "./ProjectIndividual";

function ProjectsSection () {
    return (
        <div className="projects-section-container">
            <div className="projects-section-header">
                <h1 className="projects-header-wording">Projects<em>.</em></h1>
            </div>
            <div className="projects-section-main">
                <DesignTab /> 
            </div>
        </div>
    );
}

export default ProjectsSection

// TABS TUTORIAL: https://blog.logrocket.com/how-to-build-tab-component-react/