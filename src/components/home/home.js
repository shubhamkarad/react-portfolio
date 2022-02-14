import React from 'react';
import './home.css';
import Body from '../body/body';
// import Footer from '../footer/footer';
import Header from '../header/header';

function Home() {
    return (
        <div className='home'>
            <div className='header'>
                <Header/>
            </div>
            <div className='body'>
                <Body/>    
            </div>
            {/* <div className='footer'>
                <Footer/>
            </div> */}
        </div>
    );
}

export default Home;