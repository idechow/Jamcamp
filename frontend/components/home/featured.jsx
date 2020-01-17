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
      return (
         {
            backgroundImage: `url(${album.photoUrl})`,
            backgroundPosition: "center"
         }
      )
   }

   showMain(album) {
      return (
         <Link
            className="large-feature-link"
            to={`/artist/${album.bandId}/album/${album.id}`}>
            <div className="large-feature-details"
               style={this.backgroundImage(album)}>
               <p className="large-feature-band">{album.artist}</p>
               <p className="large-feature-title">{album.name}</p>
            </div>
         </Link>
      )
   }

   // showSide(albums) {
   //    const albumDetails = albums.map((album, idx) => {
   //       return (
   //          <li className="small-feature-wrapper" key={album.id}>
   //             <Link
   //                className={`small-feature-link ${"small-feature-" + (idx + 1)}`}
   //                to={`/albums/${album.id}`}
   //                style={this.backgroundImage(album)}>
   //                <div className="small-feature-details">
   //                   <p className="small-feature-title">{album.title}</p>
   //                   <p className="small-feature-band">{album.artist}</p>
   //                </div>
   //             </Link>
   //          </li>
   //       )
   //    })
   //    return albumDetails;
   // }

   render() {
      
      let big = this.props.albums[1]
      if (this.state.loaded){
      return (
         <div className="featured-container">
            <main className="featured-albums">
               <section className="big-feature">
                  {this.showMain(big)}
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
      } else { return <div>loading</div> }
   }

}

export default FeaturedAlbums;