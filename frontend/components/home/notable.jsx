import React from 'react';
import { Link } from 'react-router-dom';

class NotableAlbums extends React.Component {

   constructor(props) {
      super(props);
   }

   notableAlbum(album, key) {
      return (
         <li className='notable-li-col' key={key}>
            <div className='notable-li-inner'>
               <Link className="notable-album-link"
                  to={`/artist/${album.bandId}/album/${album.id}`}>
                  <img className='notable-album-cover' src={album.photoUrl} />
               </Link>
               <h4 className='notable-tag'>
                  <Link to={`/artist/${album.bandId}/album/${album.id}`}>
                     <div className='notable-name'>{album.name}</div>
                     <div className='notable-artist'>by {album.artist}</div>
                  </Link>
               </h4>
               <p className='notable-genre'>recorded: {album.releaseDate}</p>
               <p className='notable-description'>
                  <span>{album.description || 'A mix of greatest rock, folk, and country-rock, Dead shows are unique works of art. Each show includes improvisations and sonic explorations that are one-of-a-kind.'}</span>
               </p>
            </div>
         </li>
      );
   }

   mapAlbums() {
      const ele = this.props.albumArray.map(album => {
         return this.notableAlbum(album, album.id)
      });
      ele.shift();
      ele.shift();
      return ele;
   }

   
   render() {
      return (
         <section className="notable-container">
            <div className="notable-row">
               <h3>NOTABLE SETS</h3>
            </div>
            <div className="notable-row">
               <ul className="notable-albums">
                  {this.mapAlbums()}
               </ul>
            </div>
         </section>
      );
   }
}

export default NotableAlbums;