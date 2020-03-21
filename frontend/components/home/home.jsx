import React from 'react';
import FeaturedAlbumsContainer from './featured_container';
import NotableAlbumsContainer from './notable_container';

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
            <div className="featured-wrap">
               <FeaturedAlbumsContainer />
            </div>
            <div className="home-page-separator">
               The Grateful Dead performed more than <span className="banner-bold">2,350 concerts,</span> generating over <span className="banner-bold">$386 million</span> between 1965 and 1995.
            </div>
            <NotableAlbumsContainer />
            {/* <div className="discover-wrap">
               <DiscoverAlbumsContainer />
            </div> */}
         </section>
      );
   }
}

export default HomePage;