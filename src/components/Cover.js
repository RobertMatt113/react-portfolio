import React from 'react';
import '../styles/cover.css'
import coverVideo from '../media/cover-video.mp4'

const Cover = () => {
    return (
        <div className='cover'>
            <video className='video' src={coverVideo} autoPlay loop muted></video>
            <h1>Roberto Mattus</h1>
            <p>Full Stack Developer</p>
        </div>
    );
};

export default Cover;