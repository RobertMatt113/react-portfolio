import React from 'react';
import '../styles/projects.css'
import img1 from '../media/ecommerse.png'
import img2 from '../media/pokedex.png'
import img3 from '../media/rick-and-morty.png'
import img4 from '../media/weather-app.png'

const Projects = () => {

    return (
        <div className='projects'>
            <div className="projects-title">
                <h3>Some of my projects</h3>
            </div>
            <div className="projects-container">
                <div className="projects-content">
                    <a href="https://matt-ecommerse.netlify.app/" target='_blank' rel='noreferrer'>
                        <img src={img1} alt="" />
                    </a>
                    <div className='project-desc'>
                        <span>Project 1</span>
                    </div>
                </div>
                <div className="projects-content">
                    <a href="https://pokeapi-matt.netlify.app/" target='_blank' rel='noreferrer'>
                        <img src={img2} alt="" />
                    </a>
                    <div className='project-desc'>
                        <span>Project 2</span>
                    </div>
                </div>
                <div className="projects-content">
                    <a href="https://matt-rick-and-morty-app.netlify.app/" target='_blank' rel='noreferrer'>
                        <img src={img3} alt="" />
                    </a>
                    <div className='project-desc'>
                        <span>Project 3</span>
                    </div>
                </div>
                <div className="projects-content">
                    <a href="https://mattweatherapp.netlify.app/" target='_blank' rel='noreferrer'>
                        <img src={img4} alt="" />
                    </a>
                    <div className='project-desc'>
                        <span>Project 4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;