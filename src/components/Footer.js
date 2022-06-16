import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-info">
                <h1>Roberto Mattus</h1>
                <p>Based in your City</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by Roberto Mattus
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/roberto-mattus-b7b615231/" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="https://www.instagram.com/roberto__mattus/" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="https://www.facebook.com/RobertoCMattus/" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                    </a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;