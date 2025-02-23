import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} E-Commerce Website. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;