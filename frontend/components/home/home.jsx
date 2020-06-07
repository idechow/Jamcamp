import React from 'react';
import FeaturedAlbumsContainer from './featured_container';
import NotableAlbumsContainer from './notable_container';
import Footer from '../footer/footer';

class HomePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loaded: false,
      }
   }

   componentDidMount() {
      const a = this.props.fetchAlbums();
      Promise.all([a]).then(() => this.setState({ loaded: true }))
   }

   componentWillUnmount() {
      this.props.clearAlbums();
   }

   render() {
      if (this.state.loaded) {
         const albumArray = Object.values(this.props.albums);
      return (
         <section className="home-page">
            <div className="featured-wrap">
               <FeaturedAlbumsContainer albumArray={albumArray}/>
            </div>
            <div className="home-page-separator">
               The Grateful Dead performed more than
               <span className="banner-bold"> 2,350 concerts, </span>
               generating over
               <span className="banner-bold"> $386 million </span>
               between 1965 and 1995.
            </div>
            {/* <div className='border'></div> */}
            <NotableAlbumsContainer albumArray={albumArray}/>
            {/* <div className="discover-wrap">
               <DiscoverAlbumsContainer />
            </div> */}
            <Footer />
         </section>
      );
      } else { return <div></div> }
   }
}

export default HomePage;