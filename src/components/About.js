import React from 'react';
import '../styles/about.css'
import aboutPicture from '../media/about-picture.jpg'
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
    return (
        <div className='about'>
            <div className="about-desc">
                <h3>Let me tell you something about me...</h3>
                <p>
                    I am a <b>Software Development Engineer</b> student and also a member of Academlo Computer Science Academy. <br />
                    <br />
                    I have experience using <b>HTML5</b>, <b>CSS</b>, <b>Tailwind CSS</b>, <b>JavaScript</b>, <b>ReactJS</b>, <b>Git</b>. (Frontend development).<br />
                    <br />
                    I am currently perfecting my knowledge in <b>NodeJS</b> along with everything necessary to make optimal use of it; <b>postgreSQL</b>, <b>Express</b>, etc. (Backend development).<br />
                    <br />
                    My <b>core strengths</b> are the passion for creation, I know how to work alone and 
                    <span> 
                        <Typewriter 
                            cursor
                            cursorStyle='_'
                            typeSpeed={150}
                            words={[' I know how to work in a team as well. I am empathic and quite disciplined.']}
                        /> 
                    </span>
                </p>
            </div>
            <div className="about-img">
                <img src={aboutPicture} alt="" />
            </div>
        </div>
    );
};

export default About;