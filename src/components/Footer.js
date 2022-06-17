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
                    <a href="mailto:robertmatt113@gmail.com" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-gmail'></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=529842051122&text=Hello! Are you available? My name is" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-whatsapp'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/roberto-mattus-b7b615231/" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="https://www.instagram.com/roberto__mattus/" target='_blank' rel='noreferrer'>
                        <i className='bx bxl-instagram' ></i>
                    </a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;