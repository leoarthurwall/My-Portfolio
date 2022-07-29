import './portfolio.scss';
import Tab from './Tab'

function PortfolioSection () {
    return (
        <div className="portfolio-section-container">
            <div className="portfolio-section-banner"> 
                <div className="portfolio-section-header">Portfolio</div>
                <div className="portfolio-section-tab">
                    {/* <Tab /> */}
                </div>
            </div>
            <div className="portfolio-section-main"> 
                <Tab /> 
            </div>
        </div>
    );
}

export default PortfolioSection

