import React from 'react';

class FeaturedAlbums extends React.Component {
   constructor(props){
      super(props)
   }

   render() {
      return (
         <div className="featured-container">
            <main className="featured-albums">
               <section className="big-feature">
               </section>
               <ul className="small-features">
                  <li className="fet a">1</li>
                  <li className="fet b">2</li>
                  <li className="fet c">3</li>
               </ul>
            </main>
            <p className="intro-tag">
               Welcome to Jamcamp, a place to experience your favorite jam bands!
            </p>
         </div>
      );
   }

}

export default FeaturedAlbums;