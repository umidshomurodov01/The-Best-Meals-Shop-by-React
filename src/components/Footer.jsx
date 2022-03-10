import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='page-footer #26a69a teal lighten-1'>
       <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Programmer Umid Shomurodov
            <Link className="grey-text text-lighten-4 right" to="/">React App</Link>
            </div>
          </div>
      </footer>
  );
};

export default Footer;