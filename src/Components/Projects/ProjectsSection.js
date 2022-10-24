import "./Projects.scss";
import ProjectIndividual from "./ProjectIndividual";

function ProjectsSection() {
  return (
    <div className="projects-section-container">
      <div className="projects-section-main">
        <div className="projects-section-header">
          <h1 className="projects-header-wording">Projects</h1>
          <hr className="projects-header-wording-line"></hr>
        </div>
        <a
          className="project-summary-text-a"
          href="https://github.com/leoarthurwall"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="project-summary-text">
            Here is a selection of my work. If you're interested in seeing more
            of my work, feel free to head over to my{" "}
            <span className="word-highlight">GitHub</span> profile.
          </p>
        </a>
        <ProjectIndividual />
      </div>
    </div>
  );
}

export default ProjectsSection;

// TABS TUTORIAL: https://blog.logrocket.com/how-to-build-tab-component-react/
