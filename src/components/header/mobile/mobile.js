import React from 'react';
import './mobile.css';
function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-menu' onClick={()=> setIsOpen(!isOpen)}>
                <i class="fi fi-rr-pharmacy"></i>
            </div>
            <div className='mobile-options'>
                 <div className='mobile-field'>
                <a href='#project'>
                    <i class="fi fi-rr-briefcase field-icon"></i>Projects
                </a>
            </div>
            <div className='mobile-field'>
                <a href='#skills'>
                   <i class="fi fi-rr-laptop field-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-field'>
                <a href='#contacts'>
                    <i class="fi fi-rr-envelope field-icon"></i>Contact me
                </a>
            </div>
            </div>
        </div>
    );
}

export default Mobile;