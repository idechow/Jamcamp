import React from 'react';

const NarrowFooter = () => {
   return (
      <footer className="narrow-footer-body">
         <div className="narrow-footer-text">
            <a className="narrow-footer-link"
               href="https://github.com/idechow/Jamcamp"
               target="_blank">created by Ian Dechow</a>

            <span className="narrow-footer-separator"> | </span>

            <a className="narrow-footer-link"
               href="https://github.com/idechow/Jamcamp"
               target="_blank">github</a>

            <span className="narrow-footer-separator"> | </span>

            <a className="narrow-footer-link"
               href="https://bandcamp.com/"
               target="_blank">based on bandcamp</a>

            <span className="footer-separator"> | </span>

            <a className="narrow-footer-link"
               href="https://archive.org/"
               target="_blank">music from archive.org</a>
         </div>
      </footer>
   );
}

export default NarrowFooter;