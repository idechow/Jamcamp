import React from 'react';
import { Link } from 'react-router-dom';

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

{/* <div className="narrow-footer-inner home-footer-inner">
   <div className="nf-logo-wrap">
      <Link to='/'>
         <img className="foot-logo small-logo" src={window.TerrapinFooterIn} />
         <img className="foot-logo full-logo" src={window.TerrapinFooter} />
      </Link>
   </div>
   <ul className='nf-links-wrap'>
      <li>
         <span className="nf-text">
                     modeled after:
                  </span>
         <a className="nf-link"
            href="https://bandcamp.com/"
            target="_blank">
            <span className="nf-icon">
               <i className="fab fa-bandcamp"></i>
            </span>
            <span className="nf-link-text">
               bandcamp.com
                     </span>
         </a>
      </li>
      <li>
         <span className="nf-text">
            music from:
                  </span>
         <a className="nf-link"
            href="https://archive.org/"
            target="_blank">
            <span className="nf-icon">
               <i className="fas fa-landmark"></i>
            </span>
            <span className="nf-link-text">
               archive.org
                     </span>
         </a>
      </li>
      <li>
         <span>
            <span className="nf-text">
               created by:
                     </span>
            <a className="nf-link"
               href="https://github.com/idechow/Jamcamp"
               target="_blank">
               <span className="nf-link-text">
                  Ian Dechow
                        </span>
            </a>
         </span>
         <span>
            <a className="nf-link"
               href="https://github.com/idechow/Jamcamp"
               target="_blank">
               <span className="nf-end-icon">
                  <i className="fab fa-github"></i>
               </span>
            </a>
         </span>
         <span>
            <a className="nf-link"
               href="https://www.linkedin.com/in/ian-franklin-dechow/"
               target="_blank">
               <span className="nf-end-icon">
                  <i className="fab fa-linkedin-in"></i>
               </span>
            </a>
         </span>
      </li>
   </ul>
</div> */}
