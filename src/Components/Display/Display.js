import About from "../About/about";
import Contact from "../Contact/Contact";
import Introduction from "../Introduction/Introduction";
import Navbar from "../Navbar/navbar";
import ProjectsSection from "../Projects/ProjectsSection";
import SideBar from "../SideBar/sidebar";

const Display = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <section id="intro-section">
        <Introduction />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="portfolio-section">
        <ProjectsSection />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </>
  );
};

export default Display;
