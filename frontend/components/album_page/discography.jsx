import React from 'react';
import { Link } from 'react-router-dom';

const Discography = ({ artistAlbum }) => {
   return (
      <div>
         <Link to={`/artist/${artistAlbum.bandId}/album/${artistAlbum.id}`}>
            <img className="discog-artwork" src={artistAlbum.photoUrl}/>
         </Link>
         <Link className="discog-album-name" to={`/artist/${artistAlbum.bandId}/album/${artistAlbum.id}`}>
            <p>{artistAlbum.name}</p>
         </Link>
      </div>
   );
};

export default Discography;