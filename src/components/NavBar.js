import React from 'react';
import '../styles/navbar.css';

const NavBar = ({isScrolling}) => {

    const toTheTop = ()=> {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div onClick={toTheTop} className='navbar-logo'>
                Roberto Mattus
            </div>
        </nav>
    );
};

export default NavBar;