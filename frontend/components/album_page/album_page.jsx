import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import TrackContainer from './tracks_container';
import TrackPlayerContainer from '../audio_player/track_player_container';
import Discography from './discography';

class AlbumPage extends React.Component {
   constructor(props){
      super(props); 
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
         <main className="album-page">
            <figure className="band-image-wrap">
               <Link className="band-image-link" to="/">
                  <img className="band-image" src={artist.bandPhotoUrl}/>
               </Link>
            </figure>
            <section className="album-content">
               <div className="album-left">
                  <div className="ablum-player">
                     <div className="album-byline">
                        <p className="album-title">{album.name}</p>
                        <p className="album-artist">by {album.artist}</p>
                        <p className="album-genre">{album.genre}</p>
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
               </div>
               <aside>
                  <div>
                     <img className="artist-photo" src={artist.photoUrl}/>
                     <p>{artist.band}</p>
                     <p>{artist.location || "SF"}</p>
                     <p>{artist.about || "about"}</p>
                     <p>{artist.weblink || "link"}</p>
                  </div>
                  <ul>
                     { discogList }
                  </ul>
               </aside>
            </section>
         </main>
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