import React from 'react';

const Footer = () => {
   return (
      <footer className="footer-body">
         <span className="footer-text">
            <a className="footer-link"
               href="https://github.com/idechow/Jamcamp"
               target="_blank">created by Ian Dechow</a>

            <span className="footer-separator"> | </span>

            <a className="footer-link"
               href="https://github.com/idechow/Jamcamp"
               target="_blank">github</a>

            <span className="footer-separator"> | </span>

            <a className="footer-link"
               href="https://bandcamp.com/"
               target="_blank">based on bandcamp</a>

            <span className="footer-separator"> | </span>

            <a className="footer-link"
               href="https://archive.org/"
               target="_blank">music from archive.org</a>
         </span>
      </footer>
   );
}

export default Footer;