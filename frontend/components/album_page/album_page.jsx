import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import TrackContainer from './tracks_container';
import TrackPlayerContainer from '../audio_player/track_player_container';
import Discography from './discography';
import NarrowFooter from '../footer/narrow_footer';

class AlbumPage extends React.Component {
   constructor(props){
      super(props); 
      this.handleCollect = this.handleCollect.bind(this);
      this.handleFollow = this.handleFollow.bind(this);
      // this.state = {
      //    loaded: false
      // }
   }

   componentDidMount() {
      const albumId = this.props.match.params.albumId;
      const bandId = this.props.match.params.bandId;
      this.props.fetchArtistAlbums(bandId).then(() =>
         this.props.fetchTracks(albumId)).then(() =>
            this.props.fetchArtist(bandId));
   }

   componentDidUpdate(prevProps) {
      const albumId = this.props.match.params.albumId;
      const bandId = this.props.match.params.bandId;
      if (this.props.match.params.albumId !== prevProps.match.params.albumId) {
         this.props.fetchArtistAlbums(bandId).then(() =>
            this.props.fetchTracks(albumId)).then(() =>
               this.props.fetchArtist(bandId));
      }
   }

   componentWillUnmount(){
      this.props.setTrack();
      this.props.clearTracks();
      this.props.clearAlbums();
      this.props.clearArtists();
   }

   handleCollect(e) {
      const collectData = {
         user_id: this.props.currentUser.id,
         album_id: this.props.album.id,
      };
      if (this.props.currentUser.collection[this.props.album.id]) {
         this.props.removeCollect(this.props.album.id);
      } else {
         this.props.addCollect(collectData);
      }
   }

   collectButton() {
      if (!!this.props.currentUser) {
         return (
            <>
               <button 
                  className="album-collect-btn"
                  onClick={this.handleCollect}>
                  <span className="album-collect-icon-wrap"
                     title={this.props.currentUser.collection[this.props.album.id]
                        ? "Remove this album from your collection"
                        : "Add this album to your collection"}>
                     {this.props.currentUser.collection[this.props.album.id]
                     ? <i className="fas fa-heart album-collect-icon"></i>
                     : <i className="far fa-heart album-collect-icon"></i>}
                  </span>
                  <span className="album-collect-text"
                     title={this.props.currentUser.collection[this.props.album.id]
                        ? "Remove this album from your collection" 
                        : "Add this album to your collection"}>
                     {this.props.currentUser.collection[this.props.album.id]
                     ? "In Collection" : "Add to Collection"}
                  </span>
               </button>
               <span className="album-collect-link-wrap">
                  {this.props.currentUser.collection[this.props.album.id] 
                  ?  <>
                     <span className="album-collect-dash"> - </span>
                     <Link 
                        className="album-collect-link" 
                        to={`/user/${this.props.currentUser.id}`}>
                        view
                     </Link> 
                  </>
                  : null }
               </span>
            </>
         );
      } else {
         return null;
      }
   }

   handleFollow(e) {
      const followData = {
         user_id: this.props.currentUser.id,
         band_id: this.props.artist.id,
      };
      if (this.props.currentUser.followees[this.props.artist.id]) {
         this.props.removeFollow(this.props.artist.id);
      } else {
         this.props.addFollow(followData);
      }
   }

   followButton() {
      if (!!this.props.currentUser) {
         if (this.props.currentUser.followees[this.props.artist.id]) {
            return (
               <button
                  className="artist-flw-btn unfollow"
                  onClick={this.handleFollow}>
                  <span>Following</span>
               </button>
            );
         } else {
            return (
               <button
                  className="artist-flw-btn follow"
                  onClick={this.handleFollow}>
                  <span>Follow</span>
               </button>
            );
         }
      } else {
         return null;
      }
   }


   render(){
      const { album, discog, artist, tracks } = this.props;
      if ( album === undefined || artist === undefined ) return null;
      // if (tracks.length === 0 ) return null;
      
      const trackList = tracks.map(track => {
         return <TrackContainer key={track.title.concat(track.id)} track={track} />
      })

      const discogList = discog.map(disc => {
         return <Discography key={disc.name.concat(disc.id)} artistAlbum={disc} />
      })
     
      // if (this.state.loaded) {
      return (
      <div className="album-page-wrap">
         <main className="album-page">
            <figure className="band-image-wrap">
                  <Link className="band-image-link" to={`/user/${artist.id}`}>
                  <img className="band-image" src={artist.bandPhotoUrl}/>
               </Link>
            </figure>
            <section className="album-content">
               <div className="album-left">
                  <div className="ablum-player">
                     <div className="album-byline">
                        <p className="album-title">{album.name}</p>
                           <p className="album-artist">by&nbsp;
                              <Link 
                                 className="artist-discog-link" 
                                 to={`/user/${artist.id}`}>
                                    {album.artist}
                              </Link>
                           </p>
                        {/* <p className="album-genre">{album.genre}</p> */}
                     </div>
                     <div className="player">
                        <TrackPlayerContainer tracks={tracks}/>
                     </div>
                     <div className="album-tracks">
                        <ul>
                           { trackList }
                        </ul>
                     </div>
                     <p className="album-description">{album.description || "description"}</p>
                     {/* <p className="album-release-date">{album.release_date}</p> */}
                  </div>
               </div>
               <div className="album-right">
                  <div className="album-shell">
                     <img className="album-cover" src={album.photoUrl} />
                  </div>
                  <div className="album-collect-wrap">
                     { this.collectButton() }
                  </div>
               </div>
               <aside className="album-aside">
                  <div>
                     <img className="artist-photo" src={artist.photoUrl}/>
                     <p className="artist-name" >{artist.band}</p>
                     <p className="artist-location">{artist.location || "San Francisco, CA"}</p>
                     { this.followButton() }
                     {/* <button className="artist-follow">Following</button> */}
                     <p className="artist-about">{artist.about || "Khruangbin is a three-piece band from Texas, formed of Laura Lee on bass, Mark Speer on guitar, and Donald Johnson on drums."}</p>
                     <p className="artist-page-link">{artist.weblink || "gratefuldead.com"}</p>
                  </div>
                  { discog.length > 1 ?
                  <ul>
                     <p className="artist-discog-title">discography</p>
                     { discogList }
                  </ul> 
                  : null }
               </aside>
            </section>
         </main>
         <NarrowFooter />
      </div>
      );
      // } else { return <div>loading</div> }
   }
}

export default AlbumPage;




// componentDidUpdate(prevProps) {
   //    const albumId = this.props.match.params.albumId;
   //    if (this.props.match.params.albumId !== prevProps.match.params.albumId) {
   //       const a = this.props.fetchAlbum(albumId);
   //       const b = this.props.fetchTracks(albumId);
   //       const c = this.props.fetchArtistAlbums(this.props.match.params.bandId);
   //       Promise.all([a, b, c])
   //          .then(() => this.setState({ loaded: true }))
   //    }
   // }


   // componentDidMount() {
   //    const albumId = this.props.match.params.albumId;
   //    const a = this.props.fetchAlbum(albumId);
   //    const b = this.props.fetchTracks(albumId);
   //    const c = this.props.fetchArtistAlbums(this.props.match.params.bandId);
   //    Promise.all([a, b, c])
   //       .then(() => this.setState({ loaded: true }))
   // }

   // const trackList = album.trackArr.sort((x, y) => {
      //    return Object.keys(x)[0] < Object.keys(y)[0] ? -1 : 1
      // }).map(trackObj => {
      //    const track = tracks[Object.values(trackObj)[0]] || '';
      //    if (track === '') return <div></div>;
      //    return <TrackContainer key={track.title.concat(track.id)} track={track} />
      // })

       // const discogList = artist.date.sort((x, y) => {
      //    return Object.keys(x)[0] <= Object.keys(y)[0] ? 1 : -1
      // }).map(dateObj => {
      //    const discogItem = discog[Object.values(dateObj)[0]] || '';
      //    if (discogItem === '') return <div></div>;
      //    return <Discography key={discogItem.name.concat(discogItem.id)} artistAlbum={discogItem} />
      // })