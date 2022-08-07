import About from "../About/about";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
import Navbar from "../Navbar/navbar";
import ProjectsSection from "../Projects/ProjectsSection";

const Display = () => {
  return (
    <>
      <Navbar />
        <section id="intro-section">
          <Introduction />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section id="projects-section">
          <ProjectsSection />
        </section>
        <section id="contact-section">
          <Contact />
        </section>
    </>
  );
};

export default Display;
