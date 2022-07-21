import React from 'react';
import './web.css';
function Web(props) {
    return (
        <div className='web'>
            <div className='web-field'>
                <a href='#project'>
                    <i class="fi fi-rr-briefcase field-icon"></i>Projects
                </a>
            </div>
            <div className='web-field'>
                <a href='#skills'>
                   <i class="fi fi-rr-laptop field-icon"></i>Skills
                </a>
            </div>
            <div className='web-field'>
                <a href='#contacts'>
                    <i class="fi fi-rr-envelope field-icon"></i>Contact me
                </a>
            </div>
        </div>
    );
}

export default Web;