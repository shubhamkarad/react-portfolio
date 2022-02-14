import React from 'react';
import { SocialData } from '../../data/social';
import './socialContact.css';
function SocialContact(props) {
    const  data = SocialData;
    return (
        <div className='social-contacts'>
            {data.map((item) => {
              return (
                <a href={item.link} className='social-field'>
                    <div className='social-icon'>
                        <i className={item.icon}></i>
                    </div>
                </a>
              )
            })}
        </div>
    );
}

export default SocialContact;