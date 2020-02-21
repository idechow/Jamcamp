import React from 'react';
import FeaturedAlbumsContainer from './featured_container';
// import NotableAlbumsContainer from './notable_container';

class HomePage extends React.Component {
   constructor(props) {
      super(props);
   }

   componentWillUnmount() {
      this.props.clearAlbums();
   }

   render() {
      return (
         <section className="home-page">
            <FeaturedAlbumsContainer />
            <div className="home-page-separator"></div>
            {/* <NotableAlbumsContainer /> */}
            <div className="home-page-separator"></div>
         </section>
      );
   }
}

export default HomePage;