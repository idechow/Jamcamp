import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedAlbums extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         loaded: false,
      }
   }

   componentDidMount() {
      const a = this.props.fetchAlbums();
      Promise.all([a]).then(() => this.setState({ loaded: true }))
   }

   backgroundImage(album) {
      return ({backgroundImage: `url(${album.photoUrl})`})
   }

   mainFet(album) {
      return (
         <Link
            className="large-feature-link"
            to={`/artist/${album.bandId}/album/${album.id}`}>
            <div className="large-feature-details"
               style={this.backgroundImage(album)}>
               <p className="large-feature-band font">{album.artist}</p>
               <p className="large-feature-title font">{album.name}</p>
            </div>
         </Link>
      )
   }

   smallFet(album) {
      return (
         <Link
            className="small-feature-link"
            to={`/artist/${album.bandId}/album/${album.id}`}>
            <div className="small-feature-details"
               style={this.backgroundImage(album)}>
               <p className="small-feature-band font">{album.artist}</p>
               <p className="small-feature-title font">{album.name}</p>
            </div>
         </Link>
      )
   }

   render() {

      let big = this.props.albums[1]
      let firstImg = this.props.albums[2]
      let secImg = this.props.albums[3]
      let thirdImg = this.props.albums[4]

      if (this.state.loaded){
      return (
         <div className="featured-container">
            <main className="featured-albums">
               <section className="big-feature">
                  {this.mainFet(big)}
               </section>
               <ul className="small-features">
                  <li className="fet a">{this.smallFet(firstImg)}</li>
                  <li className="fet b">{this.smallFet(secImg)}</li>
                  <li className="fet c">{this.smallFet(thirdImg)}</li>
               </ul>
            </main>
            {/* <p className="intro-tag">
               Welcome to Jamcamp, a place to experience your favorite jam bands!
            </p> */}
         </div>
      );
      } else { return <div></div> }
   }

}

export default FeaturedAlbums;