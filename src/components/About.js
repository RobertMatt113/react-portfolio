import React from 'react';
import '../styles/about.css'
import aboutPicture from '../media/about-picture.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-desc">
                <h3>Let me tell you something about me...</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, vel cum tempore tempora nostrum exercitationem nemo magni deleniti laboriosam pariatur ipsam facere veritatis beatae accusamus repudiandae a molestiae ea?
                </p>
            </div>
            <div className="about-img">
                <img src={aboutPicture} alt="" />
            </div>
        </div>
    );
};

export default About;