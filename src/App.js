import Navbar from './Components/Navbar/navbar';
import './App.scss';
import PortfolioSection from './Components/Projects/ProjectsSection';
import Contact from './Components/Contact/Contact';
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/about'
import SideBar from './Components/SideBar/sidebar';
// import NewNavbar from './Components/NewNavbar/NewNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <section id='intro-section'>
        <Introduction />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="portfolio-section">
        <PortfolioSection />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
