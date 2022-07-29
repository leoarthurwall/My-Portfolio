import Tab from "../TabComponent/Tab";
import '../portfolio.scss'

function PortfolioSection () {
    return (
        <div className="portfolio-section-container">
            <div className="portfolio-section-header">
                <h1 className="portfolio-header-wording">Portfolio<em>.</em></h1>
            </div>
            <div className="portfolio-section-main"> 
                <Tab /> 
            </div>
        </div>
    );
}

export default PortfolioSection

// TABS TUTORIAL: https://blog.logrocket.com/how-to-build-tab-component-react/