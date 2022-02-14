import React from 'react';
import Footer from '../footer/footer';
import About from './about/about';
import Contact from './contact/contact';
import Projects from './projects/projects';
import Skills from './skills/skills';
import './body.css';
function Body(props) {
    return (
        <div className='body'>
            <div>
                <About/>
            </div>
            <div>
                <Skills/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Body;