import React from 'react';
import '../styles/cover.css'
import coverVideo from '../media/cover-video.mp4'
import { Typewriter } from 'react-simple-typewriter';

const Cover = () => {
    return (
        <div className='cover'>
            <video className='video' src={coverVideo} autoPlay loop muted></video>
            <h1>Roberto Mattus</h1>
            <p className='typewriter'>
                <Typewriter
                    cursor
                    cursorStyle='_'
                    typeSpeed={250}
                    words={['Full Stack Developer']}
                />
            </p>
            <p className='txt-scroll-down'>Scroll Down <i className='bx bx-chevrons-down'></i></p>
        </div>
    );
};

export default Cover;