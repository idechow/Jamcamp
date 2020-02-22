import React from 'react';
import { Link } from 'react-router-dom';

const Redirect404 = () => {
   return (
      <div className="errors404">
         <picture>
            <source srcSet={window.DancingBearsGIF} type="image/webp"/>
            <img src={window.DancingBearsPNG}/>
         </picture>
         <p>You seem lost, just follow the bears back <Link to="/">home</Link> </p>
         
      </div>
   );
};

export default Redirect404;