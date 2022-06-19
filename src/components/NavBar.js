import React from 'react';
import '../styles/navbar.css';
import cv from '../media/cv-portfolio.pdf'

const NavBar = ({isScrolling}) => {

    const toTheTop = ()=> {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div onClick={toTheTop} className='navbar-logo'>
                <div className="name">
                    Roberto Mattus
                </div>
                <a download href={cv}>
                    <button className="btn-download">
                        Download CV
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;