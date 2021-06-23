import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Florence
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Florence © 2021, All rights reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
