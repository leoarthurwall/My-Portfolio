import React, { useState } from 'react'
import { Close, MenuOutlined, } from '@material-ui/icons'
import { Link } from "react-scroll";
import './navbar.scss';

function Navbar() { 
     const [active,setActive] = useState(false);

    //Navbar icon functionality function 
    const DisplayMenu = () => {
        setActive(!active)
    }

    const resumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      CV
    </a>
    );



    
    return (
        


        <div className='header'>
                <div className='navlogo'>
                <Link 
                    activeClass="active"
                    to="intro-section"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}>
                    <h1>LW</h1>
                </Link>
                    
                </div>
            {/* <div className='nav-left'>
            </div> */}
            <div className='nav-right'>
                <nav className={active ? 'navbar':'closed'}>
                    <ul>
                        <div className='closed'>
                            <Close className='closed' onClick={DisplayMenu}/>
                        </div>

                        <li>
                            <Link 
                                activeClass="active"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500}>
                                About
                            </Link>
                        </li>
                       
                        <li>
                            <Link  
                                activeClass="active"
                                to="portfolio-section"
                                spy={true}
                                smooth={true}
                                offset={10}
                                duration={500}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link  
                                activeClass="active"
                                to="contact-section"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={500}>
                                Contact
                            </Link>
                        </li>
                        <li id='resumeLink'>
                        {resumeLink}
                        </li>
                    </ul>
                </nav>
            </div>
                

            {/* handed display function as prop for menu icon functionanility when it's used on small devices eg mobile devices*/}


            <div className="menubar">
                <MenuOutlined className='menu' onClick={DisplayMenu}/>
            </div>
        </div>
        

    )
}
export default Navbar