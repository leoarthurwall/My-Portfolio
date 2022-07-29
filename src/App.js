import Navbar from './Components/Navbar/navbar';
import './App.scss';
import PortfolioSection from './Components/Portfolio/PortfolioSection/PortfolioSection';
import Contact from './Components/Contact/Contact';
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/about'
import Socialicons from './Components/social-icons/socialicons';
// import NewNavbar from './Components/NewNavbar/NewNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Socialicons />
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
