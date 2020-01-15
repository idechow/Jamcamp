import React from 'react';
import { Link } from 'react-router-dom';

class AlbumPage extends React.Component {
   constructor(props){
      super(props)
   }

   componentDidMount(){
      const albumId = this.props.match.params.albumId;
      this.props.fetchAlbum(albumId).then(() =>
         this.props.fetchTracks(albumId));
   }

   componentDidUpdate(prevProps){
      const albumId = this.props.match.params.albumId;
      if (this.props.match.params.albumId !== prevProps.match.params.albumId){
         this.props.fetchAlbum(albumId).then(() =>
            this.props.fetchTracks(albumId));
      }
   }

   render(){
      const { album } = this.props;
      if ( album === undefined ) return null;

      return (
         <main className="album-page">
            <section className="album-content">
               <div className="album-left">
                  <div className="ablum-player">
                     <div className="album-byline">
                        <p className="album-title">{album.name}</p>
                        <p className="album-artist">{album.artist}</p>
                        <p className="album-genre">{album.genre}</p>
                     </div>
                     <div className="album-player">

                     </div>
                     <div className="album-tracks">

                     </div>
                     <p className="album-description">{album.description}</p>
                  </div>
                  <div className="album-right">
                     <img className="album-cover" src={album.photo_url}/>
                  </div>
               </div>
            </section>
         </main>
      );
   }
}

export default AlbumPage;