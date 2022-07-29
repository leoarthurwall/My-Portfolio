import '../About/about.scss';
import pngegg from  '../../Images/pngegg.png'

function About () {

    return (
        <div className="about-section-container" id='About-Link'>
            <div className="about-section-header">
                <h1 className="about-section-header-wording">About<em>.</em></h1>
            </div>
            <div className="about-section-main"> 
                <div className="about-section-left">
                    <text className='about-section-summary'>
                        <p className='about-section-summary-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae  consequuntur voluptatum laborum numquam </p> 
                        <p className='about-section-summary-p' >blanditiis harum quisquam eius sed odit fugiat usto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut </p>
                        <p className='about-section-summary-p' >molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit</p>
                        <p className='about-section-summary-p' >Here are a few technologies I work with:</p>
                        <p className='about-section-tech-icons'>Insert Skills Here</p>
                    </text>
                    

                </div>
                <div className="about-section-right">
                    <img className='about-section-profile-photo' src={pngegg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default About