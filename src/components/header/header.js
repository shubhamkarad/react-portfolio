import React, {useState} from 'react';
import Mobile from './mobile/mobile';
import Web from './web/web';
import './header.css';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header'>
            <div className='header-logo'>Shubham</div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web/>
                </div>
                <div className='mobile-menu' onClick={()=> setIsOpen(!isOpen)}>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    <div>
                      <i class="fi fi-rr-list"></i>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Header;