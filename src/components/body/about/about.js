import React from 'react';
import SocialContact from '../../common/socialContact/socialContact';
import './about.css';
function About(props) {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello there!<br/> I am <span className='my-name'>Shubham Karad</span> <br/>Frontend Developer
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