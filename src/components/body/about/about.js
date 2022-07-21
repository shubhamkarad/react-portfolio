import React from 'react';
import SocialContact from '../../common/socialContact/socialContact';
import './about.css';
import Typical from 'react-typical';
function About(props) {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello there!<br/> I am <span className='my-name'>Shubham Karad</span> <br/><span>
                        <Typical
                        loop={Infinity}
                         wrapper="span"
                        steps = {[
                            "Full Stack Developer",
                            1000,
                            "UI designer",
                            1000,
                            "Photographer",
                            1000
                        ]}
                        />
                    </span>
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png')}
                    className='my-picture'
                    />
                </div>
            </div>
            <div className='about-bottom'>
                   <SocialContact/>
            </div>
        </div>
    );
}

export default About;