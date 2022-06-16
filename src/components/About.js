import React from 'react';
import '../styles/about.css'
import aboutPicture from '../media/about-picture.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-desc">
                <h3>Let me tell you something about me...</h3>
                <p>
                    I am a <b>Software Development Engineer</b> student and also a member of Academlo Computer Science Academy. <br />
                    <br />
                    I am proficient using <b>HTML5</b>, <b>CSS</b>, <b>JavaScript</b>, <b>ReactJS</b>, <b>Git</b>. <br />
                    I am currently perfecting my knowledge using <b>NodeJs</b> along with everything necessary to make optimal use of it; <b>SQL</b>, <b>Express</b>, etc. <br />
                    <br />
                    My <b>core strengths</b> are the passion for creation, i know how to work alone and i know how to work in a team as well. I have a very strong trait of <b>empathy</b> in my personality and I am quite <b>disciplined</b>.
                </p>
            </div>
            <div className="about-img">
                <img src={aboutPicture} alt="" />
            </div>
        </div>
    );
};

export default About;