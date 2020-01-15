import React from 'react';

class FeaturedAlbums extends React.Component {
   constructor(props){
      super(props)
   }

   // componentDidMount() {
   //    this.props.fetchAlbums()
   // }

   render() {

      // let features, big, small;

      // if (this.props.albums.length > 0) {
      //    features = this.props.albums;
      //    big = features[4];
      //    small = features.slice(-3);
      // }

      return (
         <div className="featured-container">
            <main className="featured-albums">
               <section className="big-feature">
                  {/* {this.bigFeature(big)} */}
               </section>
               <ul className="small-features">
                  {/* {this.smallFeatures(small)} */}
                  <li className="fet a"></li>
                  <li className="fet b"></li>
                  <li className="fet c"></li>
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